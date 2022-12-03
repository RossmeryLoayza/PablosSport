import React,{Component}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import { Dropdown } from 'react-bootstrap'

class CreateSale extends React.Component{
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
                                    <h5>Editar Venta</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/ventas">
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
                                            paddingRight:'10px'}}> Código: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="company"
                                            type="text"
                                            value="10225"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Precio de Venta: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="decimal"
                                            placeholder="Contacto"
                                            required
                                            />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div style={{width:'180px',textAlign:'left'}}>
                                                <label> Tipo de Pago: </label>
                                            </div>
                                            <div style={{width:'250px'}}>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                        
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Efectivo</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Tarjeta de Crédito</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Yape</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div style={{width:'180px',textAlign:'left'}}>
                                                <label> Vendedor Asociado: </label>
                                            </div>
                                            <div style={{width:'250px'}}>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                        
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Efectivo</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Tarjeta de Crédito</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Yape</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Editar Venta</button>
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
export default CreateSale;