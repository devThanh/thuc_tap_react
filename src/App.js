import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login  from "./components/Login";
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Order from "./components/Order";
import Cart from './components/Cart'
import Product from './components/Product';
import Checkout  from './components/Checkout'
import Admin from './components/admin/Admin';


function App() {

  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/admintoken" exact element={<Admin />} />
            <Route path="/dashboard" exact element={<Dashboard />}>
              <Route path="product/:id" exact element={<Product />} />
              <Route path="order" exact element={<Order />} />
              <Route path="profile" exact element={<Profile />} />
              <Route path="cart" exact element={<Cart />} />
            </Route>
            {/* <Route path="/loginadmin" exact element={<Login />}>
              <Route path='/admintoken' ></Route>
            </Route> */}
          </Routes>
        </Router>

      </React.StrictMode>
    </div>
  );
}

export default App;
