import ExampleTextareaComment from "../components/InputText";
import Post from "../components/Post";
import Notification from "../components/Notification";
import FollowCard from "../components/FollowCard";
const users = [
  {
    username: "markiplier",
    name: "Mark",
    avatar: "https://example.com/markiplier-avatar.jpg", // Replace with actual avatar URL
  },
  {
    username: "ChandlerHallow",
    name: "Chandler Hallow",
    avatar: "https://example.com/chandler-avatar.jpg", // Replace with actual avatar URL
  },
  {
    username: "discord",
    name: "Discord",
    avatar: "https://example.com/discord-avatar.jpg", // Replace with actual avatar URL
  },
  // Add more users as needed
];

const NotificationPage = () => {
  return (
    <div className="homePage">
      <div className="leftSide">
        <div style={{ padding: "1rem" }}>Notification</div>
        <div className="mainPage">
          <div className="divider" />
         

          
          <Notification />
          <div style={{ borderBottom: "2px solid rgb(56, 68, 77)" }}></div>
        </div>
      </div>
      <div className="rightSide">
        <div>
          <FollowCard users={users} />
        </div>
      </div>
    </div>
  );
};
export default NotificationPage;
