import React from "react";
import "./Wallpaper.css"; // Import CSS file for styling
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useAppContext } from "../lib/App-context";
function Wallpaper() {
  const { userData } = useAppContext();
  // Convert the date from the database into a JavaScript Date object
  const joinedDate = new Date(userData.dayJoined);

  // Format the date as "Month Year"
  const joinedMonthYear = joinedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  return (
    <div className="profile">
      <div className="wallpaper"></div>
      <img
        src={userData.profilePicture}
        alt="Avatar"
        className="avatar"
      />

      <div className="information">
        <button className="buttonEdit">Edit profile</button>
        <div>
          {userData.firstName} {userData.lastName}
        </div>
        <div style={{ fontSize: "15px", color: "rgb(124,136,150)" }}>
          @{userData.username}
        </div>
        <div style={{ fontSize: "15px", color: "rgb(124,136,150)" , position:"flex" , justifyContent:"center" }}>
          <CalendarMonthIcon /> 
          Joined {joinedMonthYear}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "15px",
            color: "rgb(124,136,150)",
          }}
        >
          <div>0 Following</div>
          <div>0 Followers</div>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper;
