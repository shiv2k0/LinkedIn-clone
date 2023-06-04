import { useState } from "react"
import "./register.css"
import {Link} from "react-router-dom"
const Register = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [photoURL,setPhotoURL] = useState("")
    return <div className="register">
        <div className="register-info">
            <h1>Make the most of your professional life</h1>
            <form id="inputForm">
                <label htmlFor="name">Full Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} required />
                <label htmlFor="email">Email or phone number</label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} required />
                <label htmlFor="profilePhoto">Profile Photo Url (optional) </label>
                <input type="text" value={photoURL} onChange={e=>setPhotoURL(e.target.value)} required />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                <div className="register_conditions">
                    By clicking Agree & Join, you agree to the LinkedIn &nbsp;
                    <span>User 
                        <br /> Agreement, Privacy Policy,
                    </span>
                    and <span>Cookie Policy.</span>
                </div>
                <button type="submit">Agree & Join</button>
                <div className="register_bottom">
                    <div className="register_line"/>
                    or
                    <div className="register_line"/>
                </div>
                <div className="login_with" >
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
          <div className="login_already">
            Already on LinkedIn?
            <Link to={"/login"}>
              <span> Sign in</span>
            </Link>
          </div>
            </form>
        </div>
        
    </div>
}
export default Register