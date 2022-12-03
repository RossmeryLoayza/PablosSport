import { MdOutlineSpaceDashboard } from "react-icons/md"
import { MdPointOfSale } from "react-icons/md"
import { GiRunningShoe } from "react-icons/gi"
import { GiTakeMyMoney } from "react-icons/gi"
import { HiDocumentAdd } from "react-icons/hi"
import { BiPackage } from "react-icons/bi"
import { FaHardHat } from "react-icons/fa"
import { MdPayments } from "react-icons/md"
import { BiStore } from "react-icons/bi"

export default function Layout ({ Children, baseURL }) {
  return (
    <div className="flex col-sm-1" style={{backgroundColor:'#663399', color:'white'}}>
        <div id="sidebar" style={{backgroundColor:'#663399', color:'white'}}>
            <div id="sidebar-accordion" className="accordion" style={{backgroundColor:'#663399', color:'white'}}>
                <div className="list-group vh-100" style={{backgroundColor:'#663399', color:'white'}}>
                    <a href="/dashboard" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <MdOutlineSpaceDashboard/>
                        <div>Dashboard</div>
                    </a>
                    <a href="/puesto_venta" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <MdPointOfSale/>
                        <div>Puestos de Venta</div>
                    </a>
                    <a href="/zapatillas" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <GiRunningShoe/>
                        <div>Zapatillas</div>
                    </a>
                    <a href="/ventas" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <GiTakeMyMoney/>
                        <div>Ventas</div>
                    </a>
                    <a href="/ordenes" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <HiDocumentAdd/>
                        <div>Ordenes</div> 
                    </a>
                    <a href="/proveedores" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <BiPackage/>
                        <div>Proveedores</div>
                    </a>
                    <a href="/vendedores" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <FaHardHat/>
                        <div>Vendedores</div>
                    </a>
                    <a href="/tipo_pago" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <MdPayments/>
                        <div>Tipos de Pago</div>
                    </a>
                    <a href="/almacenes" 
                    className="list-group-item list-group-item-action border-0 ps-2 text-center"
                    style={{backgroundColor:'#663399', color:'white'}}>
                        <BiStore/>
                        <div>Almacén</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

