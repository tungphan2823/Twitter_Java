import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LikeButton = ({ TweetId, TweetLike, TweetComment }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (TweetComment) {
      console.log(TweetComment)
      setLiked(!liked);
    }
  }, []);

  const handleLikeClick = async () => {
    // Toggle the liked state
    setLiked(!liked);

    try {
      if (liked) {
        // Send a DELETE request to remove the like
        await fetch("http://localhost:8080/likes/user/1", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // Send a POST request to add the like
        await fetch("http://localhost:8080/likes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tweet_id: TweetId,
            user_id: 1,

            timestamp: new Date().toISOString(),
          }),
        });
      }
      // Handle success or error response as needed
    } catch (error) {
      console.error("Error sending request:", error);
      // Handle error case
    }
  };

  return (
    <div className="iconAction">
      <FavoriteBorderIcon
        style={{ color: liked ? "rgb(221,46,68)" : "inherit" }}
        onClick={handleLikeClick}
      />
      <p>{TweetLike}</p>
    </div>
  );
};

export default LikeButton;
