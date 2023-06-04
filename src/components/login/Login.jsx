import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="login">
      <div className="login-info">
        <form id="LoginInputForm">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          <div className="login_forget">Forgot password ?</div>
          <button type="submit">Sign in</button>
          <div className="register_bottom">
            <div className="register_line" />
            or
            <div className="register_line" />
          </div>
          <div className="login_with">
            <img
                src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png"
                alt=""
              />
            Continue with Google
          </div>
          <div className="login_with">
            <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png"
                alt=""
              />
            Sign in with Apple
          </div>
        </form>
        <div className="new_register">
          New to LinkedIn?{" "}
          <Link to={"/register"}>
            <span>Join now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
