import React, { Component }  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'

class Sales extends React.Component{
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
                                    <h5>Ventas</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/crear_venta">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>+Nueva Venta</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div class="d-flex justify-content-between m-3">
                                <div style={{ width: '60%' }}>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar venta"
                                    aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                                <div>
                                    <a href="#Buscar">
                                        <button type="button" className='btn' style={{backgroundColor:'#663399', color:'white'}}>Generar Balance</button>
                                    </a>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div className="m-3">
                                <table className="table mt-5">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Vendido por</th>
                                        <th scope="col">Nombre del <br/> punto de venta</th>
                                        <th scope="col">Precio Venta total</th>
                                        <th scope="col">Detalles de Venta</th>
                                        <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Joe Girard</td>
                                            <td>Pablo's Sport</td>
                                            <td>2000.00</td>
                                            <td>
                                                <a href="#editar" className="link-warning">
                                                    <button type="button" class="btn btn-info btn-sm rounded-pill" style={{backgroundColor:'#8EA6FB', borderColor:'#8EA6FB'}}>Ver detalles</button>
                                                </a>
                                            </td>
                                            <td>
                                                <div className="row gap-2">
                                                    <a href="/modificar_venta" className="link-warning">
                                                        <button type="button" class="btn btn-primary btn-sm rounded-pill">Editar</button>
                                                    </a>
                                                    <a href="#eliminar" className="link-danger">
                                                        <button type="button" class="btn btn-danger  btn-sm rounded-pill">Eliminar</button>
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

export default Sales;