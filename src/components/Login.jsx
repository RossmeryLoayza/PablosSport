import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import "../assetss/css/login.css";
//servicios
import {ApiUrl} from "../services/apirest";
import axios from "axios"


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: "",
                password: "",
            },
            error: false,
            errorMsg: "",
            is_owner: null

        };
        this.manejadorBoton = this.manejadorBoton.bind(this);
    }


    manejadorChange = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },

        });
    };

    async manejadorBoton(event) {
        event.preventDefault();
        const UrlAuth = "api/auth-token/"
        //Igual sale error en la consola pero si identifica si es usaurio vendedor o dueño
        try {
            const resToken = axios.post(ApiUrl + UrlAuth, {
                username: this.state.form.username,
                password: this.state.form.password
            })

            const token = (await resToken).data.token
            const UrlInformationUser = "api/users/me/"

            let resInformationUser = await axios.get(ApiUrl + UrlInformationUser, {
                headers: {
                    Authorization: 'Token ' + token
                }
            })
            const is_owner = (resInformationUser).data.is_owner;
            this.setState({is_owner: is_owner});
        } catch (error) {
            console.log("Nombre de usuario o contraseña incorrecta");

        }

    };

    render() {
        const {isLogin, is_owner} = this.state
        if (is_owner !== null && is_owner === true) {
            console.log("Redirección a la pagina del dueño");
            return <Redirect to="/dashboard"/>
        } else if (is_owner !== null && is_owner === false) {
            console.log("Redirección a la pagina de vendedor");
            return <Redirect to="/dashboard"/>
        } else {
            return (
                <React.Fragment>
                    <section className="login-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 login-sec">
                                    <h2 className="text-center">Login Now</h2>
                                    <form className="login-form" onSubmit={this.manejadorBoton}>
                                        <div className="form-group">
                                            <label
                                                htmlFor="exampleInputEmail1"
                                                className="text-uppercase"
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                name="username"
                                                onChange={this.manejadorChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="exampleInputPassword1"
                                                className="text-uppercase"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder=""
                                                name="password"
                                                onChange={this.manejadorChange}
                                            />
                                        </div>

                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"/>
                                                <small>Remember Me</small>
                                            </label>
                                            <a href="/zapatillas">
                                                <button
                                                    type="submit"
                                                    className="btn btn-login float-right"
                                                >
                                                    Submit
                                                </button>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-7 banner-sec">
                                    <div
                                        id="carouselExampleIndicators"
                                        className="carousel slide"
                                        data-ride="carousel"
                                    >
                                        <ol className="carousel-indicators">
                                            <li
                                                data-target="#carouselExampleIndicators"
                                                data-slide-to="0"
                                                className="active"
                                            ></li>
                                        </ol>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </React.Fragment>
            );
        }

    }
};

export default Login;
