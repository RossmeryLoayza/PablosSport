import React, { Component }  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import TableData from './tableProduct';

class Sneakers extends React.Component{
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
                                    <h5>Zapatillas</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/crear_zapatilla">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>+Nuevo Producto</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center text-center">
                                <div className="row gap-3">
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Código: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por código"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Modelo: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por modelo"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Marca: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por marca"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Color: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por color"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Precio sugerido: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por precio"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Talla: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por talla"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{width:'150px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Almacén: </label>
                                        <input
                                            style={{width:'200px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Buscar por almacén"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div>
                                <TableData/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sneakers;