import React,{Component}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import { Dropdown } from 'react-bootstrap'

class EditSneaker extends React.Component{
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
                                    <h5>Editar Zapatilla</h5>
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
                                            placeholder="Ingrese código"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Modelo: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="text"
                                            placeholder="Modelo de zapatilla"
                                            required
                                            />
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
                                                        <Dropdown.Item href="#/action-1">Proveedor 1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Proveedor 3</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-1">Proveedor 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Precio de Compra: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="text"
                                            placeholder="Ingrese Precio de compra"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Color: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="text"
                                            placeholder="Ingrese Color"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Talla: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="text"
                                            placeholder="Ingrese talla"
                                            required
                                            />
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
export default EditSneaker;