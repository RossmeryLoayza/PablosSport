import React, {Component} from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
import {Redirect} from "react-router-dom";

class EditProviders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact_name: this.props.location.contact_name,
            formToEdit: {
                ruc: "",
                company_name: "",
                contact_number: "",
                contact_name: "",
            },
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const UrlProviders = "api/providers/" + this.state.contact_name
        const res = await axios.get(ApiUrl + UrlProviders, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        }).catch(function (error) {
            console.log(error.response)
            console.log(error.request)
            console.log(error.response)

        })

        // console.log("Obtención de datos:", res.data)
        await this.setState({formToEdit: res.data});
    };


    handleChange = (e) => {
        console.log(e.target.name)
        console.log(this.state)

        this.setState({
            formToEdit: {
                ...this.state.formToEdit,
                [e.target.name]: e.target.value
            },

        });


    };

    updateProvider = async () => {
        const UrlProviders = "api/providers/" + this.state.contact_name + "/"
        const res = await axios.put(ApiUrl + UrlProviders, this.state.formToEdit, {
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
                                    <h5>Modificar Proveedor</h5>
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
                                                }}> Nombre del proveedor: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="contact_name"
                                                value={this.state.formToEdit.contact_name}
                                                type="text"
                                                // placeholder="Ingrese el nombre del contacto"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </div>
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
                                                value={this.state.formToEdit.company_name}
                                                name="company_name"
                                                type="text"
                                                required
                                                onChange={this.handleChange}
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
                                                value={this.state.formToEdit.contact_number}
                                                type="text"
                                                // placeholder="ingrese número de contacto"
                                                required
                                                onChange={this.handleChange}
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
                                                value={this.state.formToEdit.ruc}
                                                // placeholder="ingrese ruc"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button onClick={this.updateProvider.bind(this)} type="button"
                                                        className="btn btn-primary">Modificar Proveedor
                                                </button>
                                            </a>
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

export default EditProviders;