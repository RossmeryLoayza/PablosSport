import React, { useState } from 'react';
import jsonData from './product.json';

function TableOrderData() {
const [orderData, setOrderData] = useState(jsonData);

const tableRows = orderData.map((info) => {
	return (
		<tr>
			<td>{info.id}</td>
            <td>{info.modelo}</td>
            <td></td>
            <td>{info.stock}</td>
            <td>S/ {info.precio_venta}</td>
            <td>{info.talla}</td>
            <td>{info.proveedor}</td>
            <td>{info.almacenes + " "}</td>
            <td>
                <div className="row gap-2">
                    <a href="/modificar_zapatilla" className="link-warning">
                        <button type="button" class="btn rounded-pill btn-sm" style={{backgroundColor:'#001AFF', color:'white'}}>Editar</button>
                    </a>
                    <a href="#eliminar" className="link-danger">
                        <button type="button" class="btn btn rounded-pill btn-sm" style={{backgroundColor:'#FF0F00', color:'white'}}>Eliminar</button>
                    </a>
                </div>    
            </td>
		</tr>
	);
});


return (
	<div>
		<table className="table table-stripped mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Detalle del <br/> modelo</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio de venta <br/> sugerido</th>
                    <th scope="col">Talla</th>
                    <th scope="col">Proveedor</th>
                    <th scope="col">Almacenes</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
			<tbody>{tableRows}</tbody>
		</table>
	</div>
);
}

export default TableOrderData;
