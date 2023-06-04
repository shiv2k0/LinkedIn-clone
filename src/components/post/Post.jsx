import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { forwardRef } from "react";

const InputOptions = ({ icon, action }) => (
  <div className="post__action">
    {icon}
    <span>{action}</span>
  </div>
);

const Post = forwardRef(({ name, description, message, imageUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <img
          src={
            imageUrl ||
            `https://cdn-icons-png.flaticon.com/128/847/847969.png`
          }
          alt=""
        />
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__menu">
        <BsThreeDotsVertical />
      </div>

      <div className="post__body">{message}</div>
      <div className="body__line" />
      <div className="post__actions">
        <InputOptions icon={<AiFillLike />} action={"Like"} />
        <InputOptions icon={<FaRegCommentDots />} action={"Comment"} />
        <InputOptions icon={<BiRepost />} action={"Repost"} />
        <InputOptions icon={<RiSendPlaneFill />} action={"Send"} />
      </div>
    </div>
  );
});

export default Post;
