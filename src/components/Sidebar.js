import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "../css/Sidebar.css";
import logo from "../images/logo.svg";
// import homeIcon from "../images/home.svg";
// import calenderIcon from "../images/calendar.svg";
// import userIcon from "../images/user-circle.svg";
import vector from "../images/Vector.svg";
const Sidebar = () => {
    const navigate = useNavigate()
      const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="brand">
        <Link to={"/"} className="link-tag">

          <img src={logo} alt="logo" />
          <p>ThanhHuy</p>
        </Link>
        </div>
        <div className="nav-items">
          <ul>
            {/* <li className="nav-item home-nav">
              <span className="sidebar-icon">
                <img src={homeIcon} alt="home-Icon"></img>
              </span>
              Dashboard
            </li>
            <li className="nav-item">
              <span className="sidebar-icon">
                <img src={userIcon} alt="user-icon"></img>
              </span>
              Your Profile
            </li> */}
            
            <li className="nav-item" onClick={()=>navigate('/cart')}>
              <span className="sidebar-icon">
                <img src={vector} alt="badge"></img>
              </span>
              Orders
              <span className="cart-count-container">
                <p className=" cart-count">{cart.length}</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar