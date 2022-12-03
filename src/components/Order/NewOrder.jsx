import React,{Component, useState}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
import TableData from './table';

import "react-datepicker/dist/react-datepicker.css";

class NewOrder extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          startDate: new Date(),
        };
      }
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
                                    <h5>Nuevo Pedido</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/ordenes">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>Regresar</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <TableData />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewOrder;