import Wallpaper from "../components/Wallpaper";
import "./Profile.css";

import FollowCard from "../components/FollowCard";
import Post from "../components/Post";
import { useAppContext } from "../lib/App-context";
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

const ProfilePage = () => {
  const { userTweets } = useAppContext();
  return (
    <div className="homePage">
      <div className="leftSide">
        <div style={{ padding: "1rem" }}>Admin123</div>
        <div className="mainPage">
          <div className="divider" />
          {/* <div className="wallpaper"> </div> */}
          <Wallpaper />
          <div className="profilePost">
            <div>Post</div>
            <div
              style={{
                borderBottom: "4px solid rgb(29,155,240) ",
                width: "50px",
              }}
            ></div>
          </div>

          <div
            style={{
              borderBottom: "2px solid rgb(56,68,77) ",
            }}
          ></div>
        </div>
        <div>
          {" "}
          {userTweets.map((tweet, index) => {
            return <Post key={index} tweet={tweet} />;
          })}
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
export default ProfilePage;
