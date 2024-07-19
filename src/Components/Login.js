import React, { useState } from 'react';
import styles from './Login.module.css'; // Importing CSS module

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Login attempted with Email: ${email}`);
  };

  return (
    <div>
      <div>
        
        <form className="form-signin">
          
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
          <label htmlFor="inputPassword" className="visually-hidden">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary d-block w-100" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
