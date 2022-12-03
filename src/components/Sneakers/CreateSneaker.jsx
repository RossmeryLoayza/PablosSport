import React,{Component}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import { Dropdown } from 'react-bootstrap'

class CreateSneaker extends React.Component{
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
                                    <h5>Crear Zapatilla</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/zapatillas">
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
                                        <div className="d-flex">
                                            <div className="row gap-5">
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Código: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">#12</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">#13</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">#14</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Modelo: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">CourtJam</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">SoleMatch</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Avacourt</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Talla: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">37</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">38</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">39</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Precio sugerido de venta: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">110.00</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">120.00</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">140.00</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gap-5">
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Color: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Blanco</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Negro</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Rojo</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Marca: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Adidas</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Nike</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Under Armour</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Proveedor: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Proveedor1</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Proveedor2</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">Proveedor3</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div style={{width:'180px',textAlign:'left'}}>
                                                        <label> Precio de compra: </label>
                                                    </div>
                                                    <div style={{width:'250px'}}>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                                
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">110.00</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">120.00</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-1">140.00</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Agregar Zapatilla</button>
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
export default CreateSneaker;