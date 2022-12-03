import React,{Component}  from "react";
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='row'>
                    <Layout />
                    <div className="col-sm-11 bg-light">
                        <div className="pt-5 ps-4">
                            <h5> DASHBOARD </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;