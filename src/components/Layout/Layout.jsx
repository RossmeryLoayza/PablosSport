import {MdOutlineSpaceDashboard} from "react-icons/md"
import {MdPointOfSale} from "react-icons/md"
import {GiRunningShoe, GiConverseShoe, GiTakeMyMoney} from "react-icons/gi"
import {HiDocumentAdd} from "react-icons/hi"
import {BiPackage} from "react-icons/bi"
import {FaHardHat} from "react-icons/fa"
import {MdPayments} from "react-icons/md"
import {BiStore} from "react-icons/bi"
import {TbShoe} from "react-icons/tb"
import {Link} from "react-router-dom";

export default function Layout({Children, baseURL}) {
    return (
        <div className="flex col-sm-1" style={{backgroundColor: '#663399', color: 'white'}}>
            <div id="sidebar" style={{backgroundColor: '#663399', color: 'white'}}>
                <div id="sidebar-accordion" className="accordion" style={{backgroundColor: '#663399', color: 'white'}}>
                    <div className="list-group vh-100" style={{backgroundColor: '#663399', color: 'white'}}>
                        <Link to="/dashboard"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <MdOutlineSpaceDashboard/>
                            <div>Dashboard</div>
                        </Link>
                        <Link to="/puesto_venta"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <MdPointOfSale/>
                            <div>Puestos de Venta</div>
                        </Link>
                        <Link to="/modeloZapatilla"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <TbShoe/>
                            <div>Modelo Zapatilla</div>
                        </Link>
                        <Link to="/zapatillas"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <GiRunningShoe/>
                            <div>Zapatillas</div>
                        </Link>
                        <Link to="/ventas"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <GiTakeMyMoney/>
                            <div>Ventas</div>
                        </Link>
                        <Link to="/ordenes"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <HiDocumentAdd/>
                            <div>Ordenes</div>
                        </Link>
                        <Link to="/proveedores"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <BiPackage/>
                            <div>Proveedores</div>
                        </Link>
                        <Link to="/vendedores"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <FaHardHat/>
                            <div>Vendedores</div>
                        </Link>
                        <Link to="/tipo_pago"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <MdPayments/>
                            <div>Tipos de Pago</div>
                        </Link>
                        <Link to="/almacenes"
                              className="list-group-item list-group-item-action border-0 ps-2 text-center"
                              style={{backgroundColor: '#663399', color: 'white'}}>
                            <BiStore/>
                            <div>Almacén</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

