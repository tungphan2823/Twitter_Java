import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import TextField from "@mui/material/TextField";
export default function EditDialog({ userData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const updateUserData = async (userData) => {
    const response = await fetch(`http://localhost:8080/users/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
  const handleClose = async () => {
    // Get the values from the text fields
    const firstName = document.getElementById("name").value;
    const username = document.getElementById("name2").value;
    const profilePicture = document.getElementById("name3").value;
    const lastName = document.getElementById("name4").value;
    // Create the newUserData object
    const newUserData = {
      id: userData.id,
      firstName,
      lastName,
      username,
      profilePicture,
      email: userData.email,
      password: userData.password,
      dayJoined: userData.dayJoined,
    };
  
    // Call the updateUserData function
    try {
      const updatedUser = await updateUserData(newUserData);
      console.log(updatedUser);
    } catch (error) {
      console.error(`Error updating user: ${error}`);
    }
  
    setOpen(false);
  };
  

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
            defaultValue={userData.firstName}
          />
          <TextField
            margin="dense"
            id="name4"
            label="Last Name"
            type="text"
            fullWidth
            defaultValue={userData.lastName}
          />
          <TextField
            margin="dense"
            id="name2"
            label="Username"
            type="text"
            fullWidth
            defaultValue={userData.username}
          />
          <TextField
            margin="dense"
            id="name3"
            label="Profile Picture"
            type="text"
            fullWidth
            defaultValue={userData.profilePicture}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
