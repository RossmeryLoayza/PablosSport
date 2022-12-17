import React, {Component} from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";
import {Redirect} from "react-router-dom";

class EditWarehouse extends React.Component {
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
        const UrlDeletePointSale = "api/storerooms/" + this.state.name + "/"
        console.log(UrlDeletePointSale)
        const res = axios.put(ApiUrl + UrlDeletePointSale, {
            name: this.state.new_name
        }, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        this.setState({
            redirect: true
        })

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
                                    <h5>Modificar Almacén</h5>
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
                                        <div className="column">
                                            <p>Almacén: {this.state.name}</p>
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    width: '180px',
                                                    clear: 'left',
                                                    textAlign: 'left',
                                                    paddingRight: '10px'
                                                }}> Nuevo nombre de almacén: </label>
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

                                            <button onClick={this.updateName.bind(this)} type="button"
                                                    className="btn btn-primary">Modificar Almacén
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

export default EditWarehouse;