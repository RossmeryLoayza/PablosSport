import React, {Component} from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
import {Redirect} from "react-router-dom";

class EditPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.name,
            new_name: "",
            redirect: false
        }
    }

    handleNewName = (e) => this.setState({new_name: e.target.value})

    updateName() {
        const UrlDeletePointSale = "api/paymenttypes/" + this.state.name + "/"
        console.log(UrlDeletePointSale)
        const res = axios.put(ApiUrl + UrlDeletePointSale, {
            name: this.state.new_name
        }, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        // console.log("Respuesta del PUT:", res)
        this.setState({
            redirect: true
        })

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/tipo_pago'/>
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Header/>
                <div className='row'>
                    <Layout/>
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                            <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Modificar Tipo de Pago</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/tipo_pago">
                                            <button type="button" className="btn"
                                                    style={{backgroundColor: '#663399', color: 'white'}}>Regresar
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background: 'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center text-center p-5 m-5">
                                <form>
                                    <div className="form-group row gap-5">
                                        <div className="column">
                                            <p>Tipo de pago: {this.state.name}</p>
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    width: '180px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> Nuevo nombre de tipo de pago: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="company"
                                                type="text"
                                                placeholder="Ingrese nombre"
                                                onChange={this.handleNewName}
                                                required
                                            />
                                        </div>
                                        <div>
                                                <button onClick={this.updateName.bind(this)} type="button" className="btn btn-primary">Modificar Tipo de
                                                    Pago
                                                </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPayment;