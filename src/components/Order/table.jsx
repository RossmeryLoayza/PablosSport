import React, { useState } from 'react';
import OrderForm from './form';
import jsonData from './dataorder.json';

function TableOrderData() {
const [orderData, setOrderData] = useState(jsonData);

const tableRows = orderData.map((info) => {
	return (
		<tr>
			<th scope="row"><input className="form-check-input" type="checkbox"/></th>
			<td>{info.id}</td>
			<td>{info.model}</td>
			<td>Nombre<br/>Marca <br/> Color</td>
			<td>{info.quantity}</td>
			<td>{info.size}</td>
			<td>S/ {info.purchasePrice}</td>
			<td>S/ {info.salePrice}</td>
			<td>
				<div className="row aligns-items-center justify-content-center gap-2">
					<a href="#editar" className="link-danger">
						<button type="button" class="btn btn-danger btn-sm rounded-pill" style={{backgroundColor:'#FF0F00'}}>Eliminar</button>
					</a>
					<a href="#editar" className="link-primary">
						<button type="button" class="btn btn-primary btn-sm rounded-pill" style={{backgroundColor:'#001AFF'}}>Editar</button>
					</a>
				</div>
			</td>
		</tr>
	);
});

const addRows = (data) => {
	const totalOrders = orderData.length;
	data.id = totalOrders + 1;
	const updatedOrderData = [...orderData];
	updatedOrderData.push(data);
	setOrderData(updatedOrderData);
};

return (
	<div>
		<OrderForm func={addRows} />
		<table className="table table-stripped mt-5">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col"><p className="justify-content-center"># </p></th>
					<th scope="col">
						<p className="justify-content-center"> Modelo </p>
					</th>
					<th scope="col">
						<p className="justify-content-center"> Detalles del modelo </p>
					</th>
					<th scope="col">
						<p className="justify-content-center"> Cantidad </p>
					</th>
					<th scope="col">
						<p className="justify-content-center"> Talla </p>
					</th>
					<th scope="col">
						<p className="justify-content-center"> Precio de <br/>compra </p>
					</th>
					<th scope="col">
						<p className="justify-content-center"> Precio de venta <br/> sugerido </p>
					</th>
					<th scope="col">
						<p className="justify-content-center"> Acción </p>
					</th>
				</tr>
			</thead>
			<tbody>{tableRows}</tbody>
		</table>
		<div>
			<a href="#finalizar" className='d-flex justify-content-center'>
				<button type="button" className='btn' style={{backgroundColor:'#3DCCDF', color:'white'}}>+Finalizar</button>
			</a>
		</div>
	</div>
);
}

export default TableOrderData;
