import React, {Component} from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
//servicios
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
//librerias
import {Redirect} from "react-router-dom";
import axios from "axios"

class CreateProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            form: {
                ruc: "",
                company_name: "",
                contact_number: "",
                contact_name: "",
            },
            // isCreated: false
        };
        this.manejadorBoton = this.manejadorBoton.bind(this);
        this.manejadorChange = this.manejadorChange.bind(this);
    }

    manejadorChange = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },

        });
    };

    manejadorBoton = async () => {
        // console.log(this.state.form)


        const UrlProviders = "api/providers/"
        const res = await axios.post(ApiUrl + UrlProviders, this.state.form, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        }).then((response) => {
            this.setState({redirect: true});
        }).catch(function (error) {
            if (error.response) {
                // console.log("Error Status:", error.response.status);
                // console.log("Error Headers:", error.response.headers);


                //Mostrar un mensaje al usuario del error del response.data :
                console.log("Error Data:", error.response.data);


            } else if (error.request) {
                console.log("Error Request:", error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/proveedores'/>
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
                                    <h5>Crear Proveedor</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/proveedores">
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
                                        <div>
                                            <label
                                                style={{
                                                    width: '180px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> Nombre de empresa: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="company_name"
                                                type="text"
                                                placeholder="Ingrese nombre de empresa"
                                                required
                                                onChange={this.manejadorChange}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    width: '180px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> Nombre de proveedor: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="contact_name"
                                                type="text"
                                                placeholder="Ingrese nombre de proveedor"
                                                required
                                                onChange={this.manejadorChange}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    width: '180px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> Número de contacto: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="contact_number"
                                                type="text"
                                                placeholder="Ingrese número de contacto"
                                                required
                                                onChange={this.manejadorChange}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    width: '180px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> RUC: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="ruc"
                                                type="number"
                                                placeholder="Ingrese RUC"
                                                required
                                                onChange={this.manejadorChange}
                                            />
                                        </div>
                                        <div>
                                            <button onClick={this.manejadorBoton} type="button"
                                                    className="btn btn-primary">Guardar Proveedor
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

export default CreateProvider;