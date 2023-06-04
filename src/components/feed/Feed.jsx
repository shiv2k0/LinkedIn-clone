import { useEffect, useState } from "react";
import "./feed.css";
import Post from "../post/Post";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { getPosts, postStatus } from "../../api/firebaseAPI";

const FeedOption = ({ icon, title }) => {
  return (
    <div className="feed__option">
      <img src={icon} alt="" />
      <div>{title}</div>
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
    try {
      postStatus({
        id: new Date().getTime().toString(),
        name: user.displayName,
        description: user.email,
        message: input,
        imageUrl: user.photoURL,
      });
      setInput("");
    } catch (error) {
      alert(error.message);
    }
  };
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    getPosts(setPosts);
  }, []);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img
            src={
              user?.photoURL ||
              `https://cdn-icons-png.flaticon.com/128/847/847969.png`
            }
            alt="feed_pic"
            className="feed__profilePic"
          />
          <form onSubmit={sendPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button type="submit" onClick={sendPost}></button>
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
        {posts.map(({ id, name, description, message, imageUrl }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            imageUrl={imageUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};
export default Feed;
