import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Registration.css";

const Registration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegisterSubmit}>
        <h2>Register Your Account</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">REGISTER</button>
        <Link className="action" to="/login">Already have an account? Login here</Link>
      </form>
    </div>
  )
}

export default Registration;
