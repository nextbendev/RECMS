import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';  // Correctly import UserContext

function Login() {
  const { logInUser } = useContext(UserContext);  // Destructure logInUser
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Example user data
    const userData = {
      userId: '34895734',
      name: 'Benjamin Sommerville',
      email: email,
      cellPhone: '863-867-5309',
      brokerage: 'Advantage Realty #1',
      brokerageId: '1',
      creatorId: '34895734',
      loggedIn: true,
    };

    logInUser(userData);  // Log the user in by setting loggedIn to true
    alert(`Login successful with Email: ${email}`);
    console.log(userData, "data")
  };

  return (
    <div>
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="visually-hidden">Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary d-block w-100" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2023-2024</p>
      </form>
    </div>
  );
}

export default Login;
