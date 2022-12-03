import React, { Component } from "react";
import "../assetss/css/login.css";
//servicios
import { ApiUrl } from "../services/apirest";
//librerias
import axios from "axios"


class Login extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };
  manejadorSubmit(e) {
    e.preventDefault();
  }

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  manejadorBoton = () => {
    axios.post(ApiUrl, {
      email: 'admin',
      password: 'AX7!aWTuE@gHJRqXV8ag'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <section className="login-block">
          <div className="container">
            <div className="row">
              <div className="col-md-5 login-sec">
                <h2 className="text-center">Login Now</h2>
                <form onSubmit={this.manejadorBoton} className="login-form">
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
                      <input type="checkbox" className="form-check-input" />
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
export default Login;
