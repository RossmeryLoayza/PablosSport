import React, {Component} from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
import {Link, Redirect} from "react-router-dom";

class EditProviders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: this.props.location.code,
            formToEdit: {
                code: "",
                name: "",
                brand: "",
                color: "",
            },
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const UrlShoeModel = "api/shoemodels/" + this.state.code + "/"
        const res = await axios.get(ApiUrl + UrlShoeModel, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        }).catch(function (error) {
            console.log(error.response)
            console.log(error.request)
            console.log(error.response)

        })

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

    updateShoeModel = async () => {
        const UrlShoeModel = "api/shoemodels/" + this.state.code + "/"
        const res = await axios.put(ApiUrl + UrlShoeModel, this.state.formToEdit, {
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
                                    <h5>Modificar Proveedor</h5>
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
                                                }}> Código del modelo: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="code"
                                                value={this.state.formToEdit.code}
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
                                                }}> Nombre del modelo:: </label>
                                            <input
                                                style={{width: '250px'}}
                                                value={this.state.formToEdit.name}
                                                name="name"
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
                                                }}> Marca: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="brand"
                                                value={this.state.formToEdit.brand}
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
                                                }}> Color: </label>
                                            <input
                                                style={{width: '250px'}}
                                                name="color"
                                                type="text"
                                                value={this.state.formToEdit.color}
                                                // placeholder="ingrese ruc"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button onClick={this.updateShoeModel.bind(this)} type="button"
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