import "./Home.css";
import styled from "styled-components";
import ExampleTextareaComment from "../components/InputText";
import Post from "../components/Post";
import FollowCard from "../components/FollowCard";
import { useAppContext } from "../lib/App-context";
// Example users data
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

const HomePage = () => {
  const { tweets, userData } = useAppContext();

  return (
    <div className="homePage">
      <div className="leftSide">
        <div style={{ padding: "1rem" }}>Home</div>
        <div className="mainPage">
          <div className="divider" />
          <div style={{ padding: "1rem" }}>
            <ExampleTextareaComment tweet={userData.userId} />
          </div>

          <div className="divider" />
          {tweets.map((tweet, index) => {
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
export default HomePage;
