import "./home.css";
import { Feed, Header, Sidebar, Widgets } from "../../components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import { login, logout } from "../../features/user/userSlice";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        setLoading(false);
      } else {
        dispatch(logout());
        navigate("/login");
      }
    });
  }, []);
  return (
    <div className="Home">
      {
        loading ? (
          "Loading"
        ): 
        <>
        <Header />
        <div className="Home__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
      }
      
    </div>
  );
};
export default Home;
