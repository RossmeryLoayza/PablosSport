import React, { Component }  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import { Completado, Pendiente, Incompleto } from "../Estado"

class Orders extends React.Component{
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
                                    <h5>Ordenes</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="#exportar">
                                            <button type="button" className="btn" style={{backgroundColor:'white', borderColor:'#663399', color:'#663399'}}>Exportar a Excel</button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/nueva_orden">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>+Nuevo Pedido</button>
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
                                    placeholder="Buscar pedido"
                                    aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div>
                                <table className="table mt-5">
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col"><p className="justify-content-center"># </p></th>
                                        <th scope="col">
                                            <p className="justify-content-center"> Fecha de pedido emitido </p>
                                        </th>
                                        <th scope="col">
                                            <p className="justify-content-center"> Usuario </p>
                                        </th>
                                        <th scope="col">
                                            <p className="justify-content-center"> Proveedor </p>
                                        </th>
                                        <th scope="col">
                                            <p className="justify-content-center"> Detalles del pedido </p>
                                        </th>
                                        <th scope="col">
                                            <p className="justify-content-center"> Estado </p>
                                        </th>
                                        <th scope="col">
                                            <p className="d-flex aligns-items-center justify-content-center"> Acción </p>
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox"/></th>
                                            <td></td>
                                            <td>17/10/2022</td>
                                            <td>Admin</td>
                                            <td>Juan</td>
                                            <td>
                                                <a href="#editar" className="link-warning">
                                                    <button type="button" class="btn btn-info btn-sm rounded-pill" style={{backgroundColor:'#8EA6FB', borderColor:'#8EA6FB'}}>Ver detalles</button>
                                                </a>
                                            </td>
                                            <td>
                                                <div>
                                                    <Completado/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="gap-1 row aligns-items-center justify-content-around">
                                                    <a href="#editar" className="d-flex aligns-items-center justify-content-around">
                                                        <button type="button" class="btn btn-sm rounded-pill" style={{backgroundColor:'#8EA6FB'}}>Registrar entrega</button>
                                                    </a>
                                                    <a href="#editar" className="link-danger d-flex aligns-items-center justify-content-around">
                                                        <button type="button" class="btn btn-sm rounded-pill" style={{backgroundColor:'#FF0F00', color:'white'}}>Eliminar</button>
                                                    </a>
                                                    <a href="#editar" className="link-primary d-flex aligns-items-center justify-content-around">
                                                        <button type="button" class="btn btn-sm rounded-pill" style={{backgroundColor:'#001AFF', color:'white'}}>Editar</button>
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

export default Orders;