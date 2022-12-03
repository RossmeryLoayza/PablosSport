import React,{Component}  from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'

class EditSalePoint extends React.Component{
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
                                    <h5>Modificar Puesto de Venta</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/puesto_venta">
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
                                            style={{width:'250px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Nombre de Puesto de Venta: </label>
                                            <input
                                            style={{width:'300px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Pablo´s Sport"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Modificar Puesto de Venta</button>
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
export default EditSalePoint;