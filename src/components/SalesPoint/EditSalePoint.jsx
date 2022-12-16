import React, {Component} from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
import {Redirect} from "react-router-dom";

class EditSalePoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.name,
            new_name: "",
            redirect: false
        }
    }

    handleNewName = (e) => this.setState({new_name: e.target.value})

    //https://stackoverflow.com/questions/35287949/react-with-es7-uncaught-typeerror-cannot-read-property-state-of-undefined
    updateName() {
        const UrlDeletePointSale = "api/pointsofsale/" + this.state.name + "/"
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
            return <Redirect to='/puesto_venta'/>
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
                                    <h5>Modificar Puesto de Venta</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/puesto_venta">
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
                                                    width: '250px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> Nombre de Puesto de Venta Actual: {this.state.name} </label>
                                            <input
                                                style={{width: '300px'}}
                                                name="company"
                                                type="text"
                                                placeholder="Ingrese nuevo nombre"
                                                required
                                                onChange={this.handleNewName}
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button onClick={this.updateName.bind(this)} type="button"
                                                        className="btn btn-primary">Modificar Puesto de
                                                    Venta
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

export default EditSalePoint;