import React, {Component} from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
//servicios
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
//librerias
import {Redirect} from "react-router-dom";
import axios from "axios"

class CreateWarehouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            redirect: false
            // isCreated: false
        };
        this.manejadorBoton = this.manejadorBoton.bind(this);
        this.manejadorChange = this.manejadorChange.bind(this);
    }

    manejadorChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    manejadorBoton = async () => {
        const name = this.state.name
        if (name.length !== 0) {
            const UrlapiCreatePaymenttypes = "api/storerooms/"
            const res = await axios.post(ApiUrl + UrlapiCreatePaymenttypes, {
                "name": this.state.name
            }, {
                headers: {
                    Authorization: 'Token ' + TokenFixed_of_UserRoot
                }
            }).then((response) => {
                this.setState({redirect: true});
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    //Mostrar un mensaje al usuario :
                    console.log("El nombre del puesto de venta ya existe")

                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
        } else {
            //Mostrar al usuario
            console.log("Nombre vacio debes ingresar un nombre")
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/almacenes'/>
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
                                    <h5>Crear Almacén</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/almacenes">
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
                                                }}> Nombre de almacén: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="company"
                                                type="text"
                                                placeholder="Ingrese nombre de empresa"
                                                onChange={this.manejadorChange}
                                                required
                                            />
                                        </div>
                                        <div>

                                            <button onClick={this.manejadorBoton} type="button"
                                                    className="btn btn-primary">Agregar Almacén
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

export default CreateWarehouse;