import Avatar from "@mui/joy/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Tweet.css";
import LikeButton from "./Like";
import CommentFormProps from "./Comment";
import { Link } from "react-router-dom";
import { useState } from "react";
function formatTimestamp(timestamp) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const date = new Date(timestamp);
  return date.toLocaleString("en-US", options).replace(",", " ·");
}
const Tweet = ({ tweetData }) => {
  if (!tweetData || !tweetData.user) {
    return null; // or some fallback UI
  }
  const formattedTimestamp = formatTimestamp(tweetData.timestamp);
  const commentUser = tweetData.likes.find((comment) => comment.user_id === 1);
  return (
    <div className="tweetCard">
      <Avatar src={tweetData.user.profilePicture} />
      <div className="tweetText">
        <Link
          to={`/profile/${tweetData.user.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          <div>
            <div>
              {tweetData.user.firstName} {tweetData.user.lastName}
            </div>

            <div style={{ color: "rgb(124,136,150)" }}>
              @{tweetData.user.username}
            </div>
          </div>
        </Link>

        <div>{tweetData.content}</div>
        <div style={{ color: "rgb(124,136,150)" }}>{formattedTimestamp}</div>
        <div className="iconBar">
          <div className="iconAction">
            <LikeButton
              TweetLike={tweetData.likes.length}
              TweetComment={commentUser}
              TweetId={tweetData.userId}
            />
          </div>
          <div className="iconAction">
            <ModeCommentIcon />
            <p>{tweetData.comments.length}</p>
          </div>
          <div className="iconAction">
            <VisibilityIcon />
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
