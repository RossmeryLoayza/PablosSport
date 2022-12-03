import React,{Component}  from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'

class Provider extends React.Component{
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
                                    <h5>Proveedores</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/nuevo_proveedor">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>+Nuevo Proveedor</button>
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
                                    placeholder="Buscar proveedor"
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
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre del Proveedor</th>
                                        <th scope="col">Nombre Empresa</th>
                                        <th scope="col">RUC</th>
                                        <th scope="col">Número de <br/> contacto</th>
                                        <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Kasper Rørsted</td>
                                            <td>Adidas</td>
                                            <td>20145896</td>
                                            <td>958888888</td>
                                            <td>
                                                <div className="row gap-2">
                                                    <a href="/editar_proveedor" className="link-warning">
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
export default Provider;