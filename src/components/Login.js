import React, { useEffect, useState } from 'react'
import "../css/Form.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import useFetch from '../util/useFetch';
import AuthService from '../service/auth-service';
import PropTypes from 'prop-types';

 const Login = () => {


  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data] = useFetch("https://thucannhanh-production.up.railway.app/loginadmin")
  function handleSubmit(){
    navigate('/loginadmin')

  }


  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="login"></div>
        <div className="form-section">
          <h3 className="form-header">Welcome Back! </h3>
          <form method='POST' onSubmit={handleSubmit}>
            <input placeholder="Your username" name='username'  onChange={(e) => setUsername(e.target.value)}></input>
            <input placeholder="Your Password" name='password'  onChange={(e) => setPassword(e.target.value)}></input>
            <button className="submit-button" type="submit">Login</button>
          </form>
          <div className="form-footer">
          <Link to={"/signup"} className="link-tag"><p>Create an account</p></Link>
            
            <p>Forgot Passoword</p>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Login;