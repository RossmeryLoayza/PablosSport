import React, {Component} from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
//Servicios
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
//Librerias
import DataTable from 'react-data-table-component';
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
import {Redirect} from "react-router-dom";

const columns = (openModal, deletePointSale) => [
    {
        name: 'id',
        selector: row => row.id,
    },
    {
        name: 'Nombre del Puesto de Venta',
        selector: row => row.name,
    },
    {
        name: 'Acciones',
        cell: (row) => {
            return <div className="row gap-2">
                <a href="/editar_puesto_venta" className="link-warning">
                    <button type="button"
                            className="btn btn-primary btn-sm rounded-pill">Editar
                    </button>
                </a>
                <a onClick={() => {
                    openModal(row.name)
                }} className="link-danger">
                    <button type="button"
                            className="btn btn-danger btn-sm rounded-pill">Eliminar
                    </button>
                </a>
            </div>
        }
    },
];


class PointSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show: false,
            currentName: "",
            edit: false
        };
        this.openModal = this.openModal.bind(this);
    }


    async componentDidMount() {
        const UrlPointOfSales = "api/pointsofsale/"
        const res = await axios.get(ApiUrl + UrlPointOfSales, {
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

    openModal(name) {
        this.setState({show: true});
        this.setState({currentName: name});
    }

    removePointSale(name) {
        const new_Data = this.state.data.filter(pointOfSale => pointOfSale.name !== name);
        this.setState({data: new_Data})
    }

    handleClose = () => this.setState({show: false});

    async deletePointSale(name) {
        const UrlDeletePointSale = "api/pointsofsale/" + name
        const res = await axios.delete(ApiUrl + UrlDeletePointSale, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        console.log("Respuesta del DELETE:", res)
        this.removePointSale(name)
        this.handleClose()
    }

    render() {
        const {data, show, currentName, edit} = this.state
        if (edit === true) {
            return <Redirect to="/editar_puesto_venta"/>
        } else {
            return (
                <React.Fragment>
                    <Header/>
                    <div className='row'>
                        <Layout/>
                        <div className="col-sm-11 bg-light">
                            <div className="bg-white">
                                <div className="d-flex m-3 pt-3 justify-content-between">
                                    <div>
                                        <h5>Puestos de Venta</h5>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <div>
                                            <a href="/crear_puesto_venta">
                                                <button type="button" className="btn"
                                                        style={{backgroundColor: '#663399', color: 'white'}}>+Nuevo
                                                    Puesto
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <hr
                                    style={{background: 'F8F9FA'}}
                                />
                                <div className="d-flex justify-content-center">
                                    <div style={{width: '60%'}}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Buscar puesto de venta"
                                            aria-label="Recipient's username with two button addons"
                                        />
                                    </div>
                                </div>
                                <hr
                                    style={{background: 'F8F9FA'}}
                                />
                                <div className="d-flex justify-content-center">

                                    <table className="table mt-5" style={{width: '60%'}}>
                                        {(data !== null &&
                                            <DataTable
                                                columns={columns(this.openModal, this.deletePointSale)}
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
                            <Modal.Title>Eliminar puesto de venta de {currentName} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>¿Estas seguro que quieres eliminar el puesto de venta?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="danger" onClick={() => {
                                this.deletePointSale(currentName)
                            }}>
                                Continuar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
            );


        }

        ;

    }

}

export default PointSale;