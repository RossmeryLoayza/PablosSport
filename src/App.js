import React from "react";
import "./assetss/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import Provider from "./components/Provider/Provider";
import CreateProvider from "./components/Provider/CreateProvider";
import EditProvider from "./components/Provider/EditProvider";

import Orders from "./components/Order/Orders";
import NewOrder from "./components/Order/NewOrder"

import PaymentType from "./components/PaymentType/PaymentType";
import EditPayment from "./components/PaymentType/EditPayment";
import CreatePayment from "./components/PaymentType/CreatePayment";

import PointSale from "./components/SalesPoint/PointSale";
import CreateSalePoint from "./components/SalesPoint/CreateSalePoint"
import EditSalePoint from "./components/SalesPoint/EditSalePoint"

import Sales from "./components/Sales/Sales";
import CreateSale from "./components/Sales/CreateSale";
import EditSale from "./components/Sales/EditSale";

import Sellers from "./components/Sellers/Sellers";
import CreateSellers from "./components/Sellers/CreateSeller";
import EditSellers from "./components/Sellers/EditSeller";

import Sneakers from "./components/Sneakers/Sneakers";
import CreateSneaker from "./components/Sneakers/CreateSneaker";
import EditSneaker from "./components/Sneakers/EditSneaker";

import Warehouse from "./components/Warehouse/Warehouse";
import CreateWarehouse from "./components/Warehouse/CreateWarehouse";
import EditWarehouse from "./components/Warehouse/EditWarehouse";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} />} />
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            path="/proveedores"
            exact
            render={(props) => <Provider {...props} />}
          />
          <Route
            path="/editar_proveedor"
            exact
            render={(props) => <EditProvider {...props} />}
          />
          <Route
            path="/nuevo_proveedor"
            exact
            render={(props) => <CreateProvider {...props} />}
          />
          <Route
            path="/puesto_venta"
            exact
            render={(props) => <PointSale {...props} />}
          />
          <Route
            path="/editar_puesto_venta"
            exact
            render={(props) => <EditSalePoint {...props} />}
          />
          <Route
            path="/crear_puesto_venta"
            exact
            render={(props) => <CreateSalePoint {...props} />}
          />
          <Route
            path="/ordenes"
            exact
            render={(props) => <Orders {...props} />}
          />
          <Route
            path="/nueva_orden"
            exact
            render={(props) => <NewOrder {...props} />}
          />
          <Route
            path="/tipo_pago"
            exact
            render={(props) => <PaymentType {...props} />}
          />
          <Route
            path="/editar_tipo_pago"
            exact
            render={(props) => <EditPayment {...props} />}
          />
          <Route
            path="/nuevo_tipo_pago"
            exact
            render={(props) => <CreatePayment {...props} />}
          />
          <Route
            path="/ventas"
            exact
            render={(props) => <Sales {...props} />}
          />
          <Route
            path="/crear_venta"
            exact
            render={(props) => <CreateSale {...props} />}
          />
          <Route
            path="/modificar_venta"
            exact
            render={(props) => <EditSale {...props} />}
          />
          <Route
            path="/vendedores"
            exact
            render={(props) => <Sellers {...props} />}
          />
          <Route
            path="/crear_vendedor"
            exact
            render={(props) => <CreateSellers {...props} />}
          />
          <Route
            path="/editar_vendedor"
            exact
            render={(props) => <EditSellers {...props} />}
          />
          <Route
            path="/zapatillas"
            exact
            render={(props) => <Sneakers {...props} />}
          />
          <Route
            path="/crear_zapatilla"
            exact
            render={(props) => <CreateSneaker {...props} />}
          />
          <Route
            path="/modificar_zapatilla"
            exact
            render={(props) => <EditSneaker {...props} />}
          />
          <Route
            path="/almacenes"
            exact
            render={(props) => <Warehouse {...props} />}
          />
          <Route
            path="/crear_almacen"
            exact
            render={(props) => <CreateWarehouse {...props} />}
          />
          <Route
            path="/editar_almacen"
            exact
            render={(props) => <EditWarehouse {...props} />}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
