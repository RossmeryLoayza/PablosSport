import React, { Component }  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'

class Warehouse extends React.Component{
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
                                    <h5>Almacenes</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/crear_almacen">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>+Nuevo Almacén</button>
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
                                    placeholder="Buscar almacén"
                                    aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center tetx-center">
                                <table className="table mt-5" style={{width:'50%'}}>
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre de almacén</th>
                                        <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>1</td>
                                            <td>Almacen 1</td>
                                            <td>
                                                <div className="row gap-2">
                                                    <a href="/editar_almacen" className="link-warning">
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

export default Warehouse;