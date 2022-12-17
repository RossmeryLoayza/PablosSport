import React from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
//Servicios
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
        name: 'Nombre del puesto de venta',
        selector: row => row.name,
    },
    {
        name: 'Acciones',
        cell: (row) => {
            return <div className="row gap-2">
                <a className="link-warning">
                    <Link className="btn btn-primary btn-sm rounded-pill"
                          to={{pathname: "/editar_tipo_pago", name: row.name}}>Editar</Link>
                </a>
                <a className="link-warning">
                    <button type="button" onClick={() => {
                        openModal(row.name)
                    }}
                            className="btn btn-danger btn-sm rounded-pill">Eliminar
                    </button>
                </a>

            </div>
        }
    },
];


class PaymentType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show: false,
            currentName: "",
        };
        this.openModal = this.openModal.bind(this);
    }

    async componentDidMount() {
        const UrlPointOfSales = "api/paymenttypes/"
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

    updateDataPointSale(name) {
        const new_Data = this.state.data.filter(paymentType => paymentType.name !== name);
        this.setState({data: new_Data})
    }

    handleClose = () => this.setState({show: false});

    async deletePaymentType(name) {
        const UrlDeletePointSale = "api/paymenttypes/" + name
        const res = await axios.delete(ApiUrl + UrlDeletePointSale, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        console.log("Respuesta del DELETE:", res)
        this.updateDataPointSale(name)
        this.handleClose()
    }

    render() {
        const {data, show, currentName} = this.state
        return (
            <React.Fragment>
                <Header/>
                <div className='row'>
                    <Layout/>
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                            <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Tipos de Pago</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <Link to="/nuevo_tipo_pago">
                                            <button type="button" className="btn"
                                                    style={{backgroundColor: '#663399', color: 'white'}}>+Nuevo Tipo de
                                                Pago
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
                                        placeholder="Buscar tipo de pago"
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
                        <Modal.Title>Eliminar el tipo de pago {currentName} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Estas seguro que quieres eliminar el tipo de pago?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => {
                            this.deletePaymentType(currentName)
                        }}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default PaymentType;