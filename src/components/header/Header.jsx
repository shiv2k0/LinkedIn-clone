import "./header.css"
import HeaderOptions from "./HeaderOptions";
import { ImHome3 } from "react-icons/im";
import { MdPeopleAlt, MdBusinessCenter } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";


const Header = () =>{
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignout=()=>{
    dispatch(logout())
    auth.signOut()
    navigate("/login")
    
  }

    return <div className="header">
    <div className="header__left">
      <img
        src="https://img.icons8.com/?size=1x&id=xuvGCOXi8Wyg&format=png"
        alt=""
      />
      <div className="header__search">
        {/* searchIcon */}
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div className="header__right">
      <HeaderOptions Icon={ImHome3} title="Home" />
      <HeaderOptions Icon={MdPeopleAlt} title="My Network" />
      <HeaderOptions Icon={MdBusinessCenter} title="Business" />
      <HeaderOptions Icon={RiMessage2Fill} title="Messaging" />
      <HeaderOptions Icon={IoMdNotifications} title="Notification" />
      <HeaderOptions
        avatar={
          user.photoURL ||
          `https://cdn-icons-png.flaticon.com/128/847/847969.png`
        }
        title="Me"
        onClick={handleSignout}
      />
      <HeaderOptions />
    </div>
  </div>
}

export default Header