import Avatar from "@mui/joy/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useEffect, useState } from "react";
import "./Post.css";
function formatTimestamp(timestamp) {
  const options = {
    month: "short",
    day: "numeric",
  };

  const date = new Date(timestamp);
  return date.toLocaleString("en-US", options).replace(",", " ·");
}
const Comment = ({ comment }) => {
  const [userData, setUserData] = useState([]);

  const formattedTimestamp = formatTimestamp(comment.timestamp);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/users/${comment.user_id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchUserData();
  }, [comment.user_id]);
  return (
    <div className="postCard">
      <Avatar src={userData.profilePicture} />
      <div className="postText">
        <div style={{ display: "flex" }}>
          <div>
            {userData.firstName} {userData.lastName}
          </div>

          <div style={{ color: "rgb(124,136,150)" }}>@{userData.username}</div>
          <div style={{ color: "rgb(124,136,150)" }}>
            {" "}
            · {formattedTimestamp}
          </div>
        </div>

        <div>{comment.comment}</div>
        <div className="iconBar">
          <div className="iconAction">
            <FavoriteBorderIcon />
            {/* <p>{tweet.likes.length}</p> */}
          </div>
          <div className="iconAction">
            <ModeCommentIcon />
            {/* <p>{tweet.comments.length}</p> */}
          </div>
          <div className="iconAction">
            <VisibilityIcon />
            {/* <p>10</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
