import React, {Component} from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import {Form, FormControl, Row, Col} from 'react-bootstrap'

//servicios
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
//librerias
import {Link, Redirect} from "react-router-dom";
import axios from "axios"


class CreateShoeModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            form: {
                code: "",
                name: "",
                brand: "",
                color: "",
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
        console.log(this.state)
    };

    manejadorBoton = async () => {
        // console.log(this.state.form)


        const UrlShoeModels = "api/shoemodels/"
        const res = await axios.post(ApiUrl + UrlShoeModels, this.state.form, {
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
            return <Redirect to='/modeloZapatilla'/>
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
                                    <h5>Crear Modelo de zapatilla</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <Link to="/modeloZapatilla">
                                            <button type="button" className="btn"
                                                    style={{backgroundColor: '#663399', color: 'white'}}>Regresar
                                            </button>
                                        </Link>
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
                                                }}> Codigo del modelo: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="code"
                                                type="text"
                                                placeholder="Ingrese código"
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
                                                }}> Nombre del modelo: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="name"
                                                type="text"
                                                placeholder="Ingrese nombre "
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
                                                }}> Marca: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="brand"
                                                type="text"
                                                placeholder="Ingrese marca"
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
                                                }}> Color: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="color"
                                                type="text"
                                                placeholder="Ingrese color"
                                                required
                                                onChange={this.manejadorChange}
                                            />
                                        </div>

                                        <div>
                                            <button onClick={this.manejadorBoton} type="button"
                                                    className="btn btn-primary">Guardar Modelo
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default CreateShoeModel;