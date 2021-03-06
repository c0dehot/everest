import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { GlobalStore } from "./components/GlobalStore";
import NavBar from './components/NavBar';
import ProductListPage from './components/ProductListPage';
import ProductInfoPage from './components/ProductInfoPage';
import SettingsPage from './components/SettingsPage';
import ProductAddPage from './components/ProductAddPage';
import CartPage from './components/CartPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalStore> {/* provides common elements across components */}
    <Router>
      <div className="App">
          <NavBar />
          <div class="container">
            <Route exact path={["/","/productlist"]} component={ProductListPage} />
            <Route path="/productinfo/:id" component={ProductInfoPage} />
            <Route exact path="/productadd" component={ProductAddPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/settings" component={SettingsPage} />
          </div>

          <Footer />
      </div>
    </Router>
    </GlobalStore>
  );
}

export default App;
