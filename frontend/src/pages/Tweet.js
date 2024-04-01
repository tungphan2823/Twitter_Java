import "./Home.css";

import FollowCard from "../components/FollowCard";
import Tweet from "../components/Tweet";
import ExampleTextareaComment from "../components/InputText";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
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
const TweetPage = () => {
  const params = useParams();
  const [tweetData, setTweetData] = useState([]);
  useEffect(() => {
    const fetchStudentCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/tweets/${params.userId}/${params.tweetId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTweetData(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchStudentCourses();
  }, [params.userId, params.tweetId]);
  console.log(tweetData.comments);
  return (
    <div className="homePage">
      <div className="leftSide">
        <div style={{ padding: "1rem" }}>Post</div>
        <div className="mainPage" style={{ width: "540px" }}>
          <Tweet tweetData={tweetData} />
          <div style={{ padding: "1rem", borderBottom:"2px solid rgb(56, 68, 77)"}}>
            {" "}
            <ExampleTextareaComment />
          </div>
          {tweetData.comments &&
            tweetData.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
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
export default TweetPage;
