import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import { useState } from "react";
import Modal from "@mui/joy/Modal";

export default function MenuSelect({ tweetData }) {
  const [showForm, setShowForm] = useState(false);
  const [editContent, setEditContent] = useState(tweetData.content);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const handleSaveClick = () => {
    const url = `http://localhost:8080/tweets/${tweetData.tweetId}`;
    const updatedData = {
      tweetId: tweetData.tweetId,
      content: editContent,
      timestamp: new Date().toISOString(),
      userId: tweetData.userId,
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setShowForm(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeleteClick = () => {
    const url = `http://localhost:8080/tweets/${tweetData.tweetId}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "plain", color: "primary" } }}
        >
          <MoreVert />
        </MenuButton>
        <Menu placement="bottom-end">
          <MenuItem onClick={handleEditClick}>
            <ListItemDecorator>
              <Edit />
            </ListItemDecorator>{" "}
            Edit post
          </MenuItem>

          <ListDivider />
          <MenuItem variant="soft" color="danger" onClick={handleDeleteClick}>
            <ListItemDecorator sx={{ color: "inherit" }}>
              <DeleteForever />
            </ListItemDecorator>{" "}
            Delete
          </MenuItem>
        </Menu>
      </Dropdown>
      <Modal open={showForm} onClose={handleCancelClick}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "300px",
            margin: "20px auto",
          }}
        >
          <textarea
            placeholder="Edit post"
            style={{ padding: "10px", fontSize: "16px", height: "100px" }}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />

          <button
            onClick={handleSaveClick}
            style={{
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            style={{
              padding: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
}
