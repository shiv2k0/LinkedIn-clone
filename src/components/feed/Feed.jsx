import { useState } from "react"
import "./feed.css"
import Post from "../post/Post";
import FlipMove from "react-flip-move";

const FeedOption = ({ icon, title }) => {
    return (
      <div className="feed__option">
        <img src={icon} alt="" />
        <div>{title}</div>
      </div>
    );
  };

const Feed = () =>{
    const [input,setInput] = useState("")
    return <div className="feed">
    <div className="feed__inputContainer">
      <div className="feed__input">
        <img
          src={
            `https://cdn-icons-png.flaticon.com/128/847/847969.png`
          }
          alt=""
          className="feed__profilePic"
        />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start a post"
          />
          <button  type="submit"></button>
        </form>
      </div>
      <div className="feed__options">
        <FeedOption
          icon={`https://cdn-icons-png.flaticon.com/128/833/833453.png`}
          title="Photos"
        />
        <FeedOption
          icon={`https://cdn-icons-png.flaticon.com/128/10109/10109836.png`}
          title="Video"
        />
        <FeedOption
          icon={`https://cdn-icons-png.flaticon.com/128/8081/8081283.png`}
          title="Events"
        />
        <FeedOption
          icon={`https://cdn-icons-png.flaticon.com/128/3131/3131611.png`}
          title="Write Article"
        />
      </div>
    </div>
    <div className="feed__line" />
    <FlipMove>
        <Post
          name="Shiv"
          description="description"
          message="message"
          imageUrl="imageUrl"
        />
        <Post
          name="Shiv"
          description="description"
          message="message"
          imageUrl="imageUrl"
        />
    </FlipMove>
  </div>
}
export default Feed