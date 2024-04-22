import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import Avatar from "@mui/joy/Avatar";
import { useAppContext } from "../lib/App-context";
export default function CommentInput({ userId, tweetId }) {
    const [italic, setItalic] = useState(false);
    const [fontWeight, setFontWeight] = useState("normal");
    const [anchorEl, setAnchorEl] = useState(null);
    const [content, setContent] = useState("");
    const {userData } = useAppContext();
    const generateRandomId = () => {
      return Math.floor(Math.random() * 1000000); // Adjust range as needed
    };
  
    const handlePost = () => {
      const commentId = generateRandomId(); // Generate random commentId
      const comment = {
        comment_id: commentId,
        tweet_id: tweetId,
        user_id: userId,
        comment: content,
        timestamp: new Date().toISOString(),
      };
  
      fetch("http://localhost:8080/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Comment posted:", data);
        })
        .catch((error) => {
          console.error("Error posting comment:", error);
        });
    };
  
    return (
      <FormControl>
        <div style={{ display: "flex" }}>
        <Avatar src={userData.profilePicture} />
          <Textarea
            placeholder="Some thing here?!"
            minRows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            endDecorator={
              <Box
                sx={{
                  display: "flex",
                  gap: "var(--Textarea-paddingBlock)",
                  pt: "var(--Textarea-paddingBlock)",
                  flex: "auto",
                }}
              >
                <IconButton
                  variant="plain"
                  color="neutral"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <FormatBold />
                  <KeyboardArrowDown fontSize="md" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  size="sm"
                  placement="bottom-start"
                  sx={{ "--ListItemDecorator-size": "24px" }}
                >
                  {["200", "normal", "bold"].map((weight) => (
                    <MenuItem
                      key={weight}
                      selected={fontWeight === weight}
                      onClick={() => {
                        setFontWeight(weight);
                        setAnchorEl(null);
                      }}
                      sx={{ fontWeight: weight }}
                    >
                      <ListItemDecorator>
                        {fontWeight === weight && <Check fontSize="sm" />}
                      </ListItemDecorator>
                      {weight === "200" ? "lighter" : weight}
                    </MenuItem>
                  ))}
                </Menu>
  
                <IconButton
                  variant={italic ? "soft" : "plain"}
                  color={italic ? "primary" : "neutral"}
                  aria-pressed={italic}
                  onClick={() => setItalic((bool) => !bool)}
                >
                  <FormatItalic />
                </IconButton>
                <Button sx={{ ml: "auto" }} onClick={handlePost}>
                  Post
                </Button>
              </Box>
            }
            sx={{
              minWidth: 470,
              fontWeight,
              fontStyle: italic ? "italic" : "initial",
              backgroundColor: "rgb(21,32,43)",
              color: "white",
              borderStyle: "none",
            }}
          />
        </div>
      </FormControl>
    );
}
