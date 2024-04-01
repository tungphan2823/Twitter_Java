import Avatar from "@mui/joy/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Tweet.css";
import CommentFormProps from "./Comment";
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

  return (
    <div className="tweetCard">
      <Avatar src={tweetData.user.profilePicture} />
      <div className="tweetText">
        <div>
          <div>
            {tweetData.user.firstName} {tweetData.user.lastName}
          </div>

          <div style={{ color: "rgb(124,136,150)" }}>
            @{tweetData.user.username}
          </div>
        </div>
        <div>{tweetData.content}</div>
        <div style={{ color: "rgb(124,136,150)" }}>{formattedTimestamp}</div>
        <div className="iconBar">
          <div className="iconAction">
            <FavoriteBorderIcon />
            <p>{tweetData.likes.length}</p>
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
