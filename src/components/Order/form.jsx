import React, { useState } from 'react';
import { Calendario } from './Calendario'

function OrderForm(props) {
const [model, setModel] = useState('');
const [quantity, setQuantity] = useState('');
const [size, setSize] = useState('');
const [purchasePrice, setPurchasePrice] = useState('');
const [salePrice, setSalePrice] = useState('');

const changeModel = (event) => {
	setModel(event.target.value);
};

const changeQuantity = (event) => {
	setQuantity(event.target.value);
};

const changePurchasePrice = (event) => {
	setPurchasePrice(event.target.value);
};

const changeSize = (event) => {
	setSize(event.target.value);
};

const changeSalePrice = (event) => {
	setSalePrice(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	model,
    quantity,
    size,
    purchasePrice,
    salePrice
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setModel ('');
	setQuantity ('');
    setSize ('');
    setPurchasePrice ('');
    setSalePrice ('');
};

return (
	<div>
        <form action="">
            <div className='d-flex justify-content-around gap-3'>
                <div className='gap-5 p-4'>
                    <div className='d-flex justify-content-center gap-3 mb-5'>
                        <label className="pt-1"> Proveedor</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>   -   </option>
                            <option value="1">Juan</option>
                            <option value="2">Sergio</option>
                            <option value="3">Carlos</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-center gap-3 pt-3'>
                        <label className="pt-1"> Fecha </label>
                        <Calendario/>
                    </div>
                </div>
                <div className='p-4' style={{backgroundColor:'#f3d7f7'}}>
                    <div className="mb-3">
                        <label
                            style={{width:'180px',
                            clear:'left',
                            textAlign:'left',
                            paddingRight:'10px'}}> Modelo: </label>
                        <input
                            style={{width:'250px'}}
                            name="company"
                            type="text"
                            placeholder="Ingrese modelo"
                            value={model}
                            onChange={changeModel}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <label
                                style={{width:'100px',
                                clear:'left',
                                textAlign:'left',
                                paddingRight:'10px'}}> Cantidad: 
                            </label>
                            <input
                                style={{width:'100px'}}
                                name="company"
                                type="text"
                                value={quantity}
                                onChange={changeQuantity}
                                required
                            />
                        </div>
                        <div>
                            <label
                                style={{width:'100px',
                                clear:'left',
                                textAlign:'left',
                                paddingRight:'10px'}}> Talla: 
                            </label>
                            <input
                                style={{width:'100px'}}
                                name="company"
                                type="text"
                                value={size}
                                onChange={changeSize}
                                required
                            />
                        </div>                        
                    </div>
                    <div>
                        <label
                            style={{width:'180px',
                            clear:'left',
                            textAlign:'left',
                            paddingRight:'10px'}}> Precio de compra: 
                        </label>
                        <input
                            style={{width:'250px'}}
                            name="contact"
                            type="text"
                            value={purchasePrice}
                            onChange={changePurchasePrice}
                            placeholder="Precio de compra"
                            required
                        />
                    </div>
                    <div>
                        <label
                            style={{width:'180px',
                            clear:'left',
                            textAlign:'left',
                            paddingRight:'10px'}}> Precio de venta sugerido: 
                        </label>
                        <input
                            style={{width:'250px'}}
                            name="ruc"
                            type="number"
                            value={salePrice}
                            onChange={changeSalePrice}
                            placeholder="Precio de venta sugerido"
                            required
                        />
                    </div>
                    <div className='d-flex justify-content-end mt-3'>
                        <button className='btn' type='button' style={{backgroundColor:'#1FE000', color:'white', borderColor:'#1FE000'}} onClick={transferValue}> +Agregar</button>
                    </div>
                </div>
            </div>
        </form>
	</div>
);
}

export default OrderForm;
