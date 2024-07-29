import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your register logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="background" >
    <div className="app">

      <div className="left-container">
      <div className={`login-register-container ${isLogin ? "" : "flip"}`}>
          {isLogin ? (
            <div className={`login-container ${isLogin ? "" : "flip"} `}>
              <div className="login-box">
                <h2>Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
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
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <label htmlFor="rememberMe">Remember me?</label>
                  </div>
                  <button type="submit">LOGIN</button>
                  <a className="action">Forgot Password?</a>
                  <a
                    className="action"
                    onClick={() => {
                      setIsLogin(false);
                    }}
                  >
                    Don't have an account? Register here
                  </a>
                </form>
              </div>
            </div>
          ) : (
            <div className="register-container">
              <div className="login-container">
                <div className="login-box">
                  <h2>Register Your Account</h2>
                  <form onSubmit={handleRegisterSubmit}>
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
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
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
                        placeholder="Password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
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
                    <button type="submit">REGISTER</button>
                    <a
                      className="action"
                      onClick={() => {
                        setIsLogin(true);
                      }}
                    >
                      Already have an account? Login here
                    </a>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="right-container">
        <div className="quote-container">
          <div><h2>THE GOAL OF LIFE IS</h2></div>
          <div><h2>LIVING IN AGREEMENT</h2></div>
          <div ><h2 className="div-border">WITH NATURE.</h2></div>
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
