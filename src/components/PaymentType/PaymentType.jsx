import React, { Component }  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'

class PaymentType extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='row'>
                    <Layout />
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                        <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Tipos de Pago</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/nuevo_tipo_pago">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>+Nuevo Tipo de Pago</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div class="d-flex justify-content-center">
                                <div style={{ width: '60%' }}>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar tipo de pago"
                                    aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center">
                                <table className="table mt-5" style={{width:'60%'}}>
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">#</th>
                                        <th scope="col">Tipo de pago</th>
                                        <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>1</td>
                                            <td>Izi Pay</td>
                                            <td>
                                                <div className="row gap-2">
                                                    <a href="/editar_tipo_pago" className="link-warning">
                                                        <button type="button" class="btn btn-primary btn-sm rounded-pill">Editar</button>
                                                    </a>
                                                    <a href="#eliminar" className="link-danger">
                                                        <button type="button" class="btn btn-danger btn-sm rounded-pill">Eliminar</button>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentType;