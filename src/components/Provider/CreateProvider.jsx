import React,{Component}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'

class CreateProvider extends React.Component{
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
                                    <h5>Crear Proveedor</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/proveedores">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>Regresar</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center text-center p-5 m-5">
                                <form>
                                    <div className="form-group row gap-5">
                                        <div>
                                            <label
                                            style={{width:'180px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Nombre de empresa: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Ingrese nombre de empresa"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Nombre de proveedor: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Ingrese nombre de proveedor"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Número de contacto: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="text"
                                            placeholder="Ingrese número de contacto"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> RUC: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="ruc"
                                            type="number"
                                            placeholder="Ingrese RUC"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Guardar Proveedor</button>
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
export default CreateProvider;