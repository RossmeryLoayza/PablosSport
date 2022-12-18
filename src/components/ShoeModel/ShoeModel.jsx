import React, {Component} from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
//Librerias
import DataTable from 'react-data-table-component';
import {Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

const columns = (openModal) => [
    {
        name: 'id',
        selector: row => row.id,
    },
    {
        name: 'Código del modelo',
        selector: row => row.code,
    },
    {
        name: 'Nombre del modelo',
        selector: row => row.name,
    },
    {
        name: 'Marca',
        selector: row => row.brand,
    },
    {
        name: 'Color',
        selector: row => row.color,
    },
    {
        name: 'Acciones',
        cell: (row) => {
            return <div className="row gap-2">
                <a className="link-warning">
                    <Link className="btn btn-primary btn-sm rounded-pill"
                          to={{pathname: "/modificar_modeloZapatilla", code: row.code}}>Editar</Link>
                </a>
                <a className="link-warning">
                    <button type="button" onClick={() => {
                        openModal(row.code, row.name)
                    }}
                            className="btn btn-danger btn-sm rounded-pill">Eliminar
                    </button>
                </a>

            </div>
        }
    },
];


class ShoeModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show: false,
            code: "",
            name: "",
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal(code, name) {
        this.setState({show: true});
        this.setState({code: code});
        this.setState({name: name});
    }


    updateDataShoeModel(code) {
        const new_Data = this.state.data.filter(ShoeModel => ShoeModel.code !== code);
        this.setState({data: new_Data})
    }

    async componentDidMount() {
        const UrlShoeModel = "api/shoemodels/"
        const res = await axios.get(ApiUrl + UrlShoeModel, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        }).catch(function (error) {
            console.log(error.response)
            console.log(error.request)
            console.log(error.response)

        })
        await this.setState({data: res.data});
    };

    handleClose = () => this.setState({show: false});

    async deleteShoeModel(code) {
        const UrlShoeModel = "api/shoemodels/" + code + "/"
        const res = await axios.delete(ApiUrl + UrlShoeModel, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        console.log("Respuesta del DELETE:", res)
        this.updateDataShoeModel(code)
        this.handleClose()
    }

    render() {
        const {data, show, code, name} = this.state
        return (

            <div>
                <Header/>
                <div className='row'>
                    <Layout/>
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                            <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Modelo de Zapatilla</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <Link to="/crear_modeloZapatilla">
                                            <button type="button" className="btn"
                                                    style={{backgroundColor: '#663399', color: 'white'}}>+Nuevo Modelo
                                                Zapatilla
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background: 'F8F9FA'}}
                            />
                            <div class="d-flex justify-content-center">
                                <div style={{width: '60%'}}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar modelo de zapatilla"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                            </div>
                            <hr
                                style={{background: 'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center tetx-center">
                                <table className="table mt-5" style={{width: '50%'}}>
                                    {(data !== null &&
                                        <DataTable
                                            columns={columns(this.openModal)}
                                            data={data}
                                        />
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar el modelo zapatilla {name}  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Estas seguro que quieres eliminar el modelo zapatilla con codigo {code}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => {
                            this.deleteShoeModel(code)
                        }}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ShoeModel;