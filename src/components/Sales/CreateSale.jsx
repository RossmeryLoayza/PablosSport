import React,{Component}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'

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
                                    <h5>Crear Venta</h5>
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
                                            paddingRight:'10px'}}> Hecho por: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Ingrese nombre de vendedor"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Punto de Venta: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="decimal"
                                            placeholder="Ingrese punto de venta"
                                            required
                                            />
                                        </div>
                                    </div>
                                    <div style={{width:'50%'}}>
                                        <table className="table mt-5">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Modelo</th>
                                            <th scope="col">Stock <br/> disponible</th>
                                            <th scope="col">Talla</th>
                                            <th scope="col">Precio sugerido<br/> de Venta</th>
                                            <th scope="col">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>BG14256</td>
                                                <td>8</td>
                                                <td>37</td>
                                                <td>S/ 150.00</td>
                                                <td>
                                                    <div className="row gap-2">
                                                        <a href="/modificar_venta" className="link-warning">
                                                            <button type="button" class="btn btn-success btn-sm rounded-pill">Agregar</button>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex justife-content-center" style={{width:'80%'}}>
                                        <table className="table mt-5">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Modelo</th>
                                            <th scope="col">Stock <br/> disponible</th>
                                            <th scope="col">Talla</th>
                                            <th scope="col">Precio sugerido<br/> de Venta</th>
                                            <th scope="col">Cantipad por<br/>vender</th>
                                            <th scope="col">Precio de venta<br/>x unidad</th>
                                            <th scope="col">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>BG14256</td>
                                                <td>8</td>
                                                <td>37</td>
                                                <td>S/ 150.00</td>
                                                <td>
                                                    <input
                                                    type="number"
                                                    required/>
                                                </td>
                                                <td>
                                                <input
                                                    type="number"
                                                    required/>
                                                </td>
                                                <td>
                                                    <div className="row gap-2">
                                                        <a href="/modificar_venta" className="link-warning">
                                                            <button type="button" class="btn btn-danger btn-sm rounded-pill">Deshacer</button>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                            <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Generar Venta</button>
                                            </a>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateSale;