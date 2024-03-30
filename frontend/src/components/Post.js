import Avatar from "@mui/joy/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Post.css";
const Post = ({ tweet }) => {
  return (
    <div className="postCard">
      <Avatar src={tweet.user.profilePicture} />
      <div className="postText">
        <div style={{ display: "flex" }}>
          <div>{tweet.user.firstName} {tweet.user.lastName}</div>

          <div style={{ color: "rgb(124,136,150)" }}>@{tweet.user.username}</div>
        </div>
        <div>{tweet.content}</div>
        <div className="iconBar">
          <div className="iconAction">
            <FavoriteBorderIcon />
            <p>10</p>
          </div>
          <div className="iconAction">
            <ModeCommentIcon />
            <p>10</p>
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
export default Post;
