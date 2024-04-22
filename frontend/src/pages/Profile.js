import Wallpaper from "../components/Wallpaper";
import "./Profile.css";
import { useParams } from "react-router-dom";
import FollowCard from "../components/FollowCard";
import Post from "../components/Post";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../lib/App-context";
import { AppContext } from "../lib/App-context";
import { useContext } from "react";
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
  const { change } = useContext(AppContext);

  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/tweets/${params.userId}`
        );
        const dataTweet = await response.json();
        setTweets(dataTweet);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [params.userId, change]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/users/${params.userId}`
        );
        const dataUser = await response.json();
        setUserData(dataUser);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [params.userId, change]);
  // const { userTweets } = useAppContext();
  return (
    <div className="homePage">
      <div className="leftSide">
        <div style={{ padding: "1rem" }}>{userData.username}</div>
        <div className="mainPage">
          <div className="divider" />
          {/* <div className="wallpaper"> </div> */}
          <Wallpaper userData={userData} />
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
export default ProfilePage;
