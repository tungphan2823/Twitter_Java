import React from "react";
import "./FollowCard.css"; // Importing a CSS file to style the component
import Avatar from "@mui/joy/Avatar";

const FollowCard = ({ users }) => {
  return (
    <div style={{ padding: "3rem" }}>
      <div className="follow-card">
        <h3>Who to follow</h3>
        {users.map((user) => (
          <div className="user" key={user.username}>
            {/* <img src={user.avatar} alt={`${user.name}'s avatar`} /> */}
            <Avatar />
            <div className="info">
              <p>
                <strong>{user.name}</strong>
              </p>
              <p>@{user.username}</p>
            </div>
            <div style={{paddingLeft:"1rem"}}>
              <button
                style={{
                  color: "black",
                  backgroundColor: "aliceblue",
                  padding: "1rem",
                  borderRadius: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Follow
              </button>
            </div>
          </div>
        ))}
        <button style={{ color: "rgb(29,155,240)" }}>Show more</button>
      </div>
    </div>
  );
};

export default FollowCard;
