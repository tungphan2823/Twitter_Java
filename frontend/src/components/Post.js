import Avatar from "@mui/joy/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import LikeButton from "./Like";
import { useState, useEffect } from "react";
import "./Post.css";
function formatTimestamp(timestamp) {
  const options = {
    month: "short",
    day: "numeric",
  };

  const date = new Date(timestamp);
  return date.toLocaleString("en-US", options).replace(",", " ·");
}
const Post = ({ tweet }) => {
  const formattedTimestamp = formatTimestamp(tweet.timestamp);
  const commentUser = tweet.likes.find((comment) => comment.user_id === 1);
  return (
    <div className="postCard">
      <div className="postDetail">
        <Avatar src={tweet.user.profilePicture} />
        <div className="postText">
          <Link to={`/profile/${tweet.user.id}`} style={{ textDecoration: "none", color: "white" }}>
            <div style={{ display: "flex" }}>
              <div>
                {tweet.user.firstName} {tweet.user.lastName}
              </div>

              <div style={{ color: "rgb(124,136,150)" }}>
                @{tweet.user.username}
              </div>
              <div style={{ color: "rgb(124,136,150)" }}>
                · {formattedTimestamp}
              </div>
            </div>
          </Link>

          <Link
            to={`/${tweet.userId}/${tweet.tweetId}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>{tweet.content}</div>
          </Link>
        </div>
      </div>

      <div className="iconBar">
        <LikeButton
          TweetId={tweet.tweetId}
          TweetLike={tweet.likes.length}
          TweetComment={commentUser}
        />
        <div className="iconAction">
          <ModeCommentIcon />
          <p>{tweet.comments.length}</p>
        </div>
        <div className="iconAction">
          <VisibilityIcon />
          <p>10</p>
        </div>
      </div>
    </div>
  );
};
export default Post;
