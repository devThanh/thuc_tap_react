import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      console.log(event.value)
      event.preventDefault();
      navigate("/login");
    };
  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="signup"></div>
        <div className="form-section">
          <h3 className='form-header'>Welcome to ThanhHuy!</h3>
          <form onSubmit={handleSubmit}>
            <input placeholder="Your name" name='name'></input>
            <input placeholder="Your username" name='username'></input>
            <input placeholder="Your email address" name='email'></input>
            <input placeholder="Your phone" name='phoneNumber'></input>
            <input placeholder="Your password" name='password'></input>
            <button className='submit-button'>SIGN UP</button>
          </form>
          <div className="form-footer">
            <p>
              Already have an account.  <Link to={"/login"} className="link-tag">Login</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp