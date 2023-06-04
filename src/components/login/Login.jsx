import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider()
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password).then((result) => {
        const user = result.user;
        dispatch(
          login({
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            uid: user.uid,
          })
        );
      });
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, auth]);
  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        })
      );
    });
  };
  return (
    <div className="login">
      <div className="login-info">
        <form id="LoginInputForm">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="login_forget">Forgot password ?</div>
          <button type="submit" onClick={handleSignIn}>
            Sign in
          </button>
          <div className="register_bottom">
            <div className="register_line" />
            or
            <div className="register_line" />
          </div>
          <div className="login_with" onClick={LoginWithGoogle}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-512.png"
              alt=""
            />
            Continue with Google
          </div>
          <div className="login_with" onClick={LoginWithGoogle}>
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
