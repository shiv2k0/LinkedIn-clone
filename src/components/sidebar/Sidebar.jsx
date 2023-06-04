import { useSelector } from "react-redux";
import "./sidebar.css"
import { selectUser } from "../../features/user/userSlice";

const Sidebar =()=>{
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
      );
    return <div className="sidebar">
    <div className="sidebar__top">
      <img
        src={`https://cdn.pixabay.com/photo/2012/02/23/14/46/high-16250_640.jpg`}
        alt=""
      />
      <div>
        <img
          src={
            user.photoURL ||
            `https://cdn-icons-png.flaticon.com/128/847/847969.png`
          }
          alt="Profile Photo"
          className="sidebar__top_profilePic"
        />
      </div>
      <h3>{user.displayName}</h3>
      <h4>{user.email}</h4>
    </div>
    <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,543</p>
      </div>
      <div className="sidebar__stat">
        <p>Views on post</p>
        <p className="sidebar__statNumber">2,448</p>
      </div>
    </div>
    <div className="sidebar__bottom">
      <p>Recent</p>
      {recentItem("reactjs")}
      {recentItem("programming")}
      {recentItem("sofwareegineering")}
      {recentItem("design")}
      {recentItem("developer")}
    </div>
  </div>
}

export default Sidebar