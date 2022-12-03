import React,{Component}  from "react";
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'

class EditPayment extends React.Component{
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
                                    <h5>Modificar Tipo de Pago</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/tipo_pago">
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
                                        <div className="column">
                                            <p>Código:           01254</p>
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Nombre de tipo de pago: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Izi Pay"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Modificar Tipo de Pago</button>
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
export default EditPayment;