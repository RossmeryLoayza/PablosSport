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
        name: 'RUC',
        selector: row => row.ruc,
    },
    {
        name: 'Nombre Empresa',
        selector: row => row.company_name,
    },
    {
        name: 'Número de\ncontacto',
        selector: row => row.contact_number,
    },
    {
        name: 'Nombre de\ncontacto',
        selector: row => row.contact_name,
    },
    {
        name: 'Acciones',
        cell: (row) => {
            return <div className="row gap-2">
                <a className="link-warning">
                    <Link className="btn btn-primary btn-sm rounded-pill"
                          to={{pathname: "/editar_proveedor", contact_name: row.contact_name}}>Editar</Link>
                </a>
                <a className="link-warning">
                    <button type="button" onClick={() => {
                        openModal(row.contact_name)
                    }}
                            className="btn btn-danger btn-sm rounded-pill">Eliminar
                    </button>
                </a>

            </div>
        }
    },
];


class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show: false,
            contactName: "",
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal(name) {
        this.setState({show: true});
        this.setState({contactName: name});
    }


    updateDataProvider(name) {
        const new_Data = this.state.data.filter(Provider => Provider.contactName !== name);
        this.setState({data: new_Data})
    }

    async componentDidMount() {
        const UrlProviders = "api/providers/"
        const res = await axios.get(ApiUrl + UrlProviders, {
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

    async deleteProvider(name) {
        const UrlProvider = "api/providers/" + name+"/"
        const res = await axios.delete(ApiUrl + UrlProvider, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        console.log("Respuesta del DELETE:", res)
        this.updateDataProvider(name)
        this.handleClose()
    }

    render() {
        const {data, show, contactName} = this.state
        return (

            <div>
                <Header/>
                <div className='row'>
                    <Layout/>
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                            <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Proveedores</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/nuevo_proveedor">
                                            <button type="button" className="btn"
                                                    style={{backgroundColor: '#663399', color: 'white'}}>+Nuevo
                                                Proveedor
                                            </button>
                                        </a>
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
                                        placeholder="Buscar proveedor"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                            </div>
                            <hr
                                style={{background: 'F8F9FA'}}
                            />
                            <div>
                                <table className="table mt-5">
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
                        <Modal.Title>Eliminar el proveedor {contactName} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Estas seguro que quieres eliminar el proveedor?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => {
                            this.deleteProvider(contactName)
                        }}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Provider;