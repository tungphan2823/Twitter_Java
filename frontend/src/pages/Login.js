import React, { useState } from "react";
import "./Login.css";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import XIcon from "@mui/icons-material/X";
import Box from "@mui/joy/Box";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error message

  const handleLogin = async () => {
    const credentials = `${email}:${password}`;
    const encodedCredentials = btoa(credentials);
    const url = "http://localhost:8080/login"; // Change this to your login endpoint
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
        credentials: 'include', // Include credentials
      });
      if (response.ok) {
        // Successful authentication
        // Store credentials or session token in local storage
        localStorage.setItem('credentials', encodedCredentials);
        console.log("Authentication successful");
        window.location.href = "/"; // Redirect user to tweets page
      } else {
        // Failed authentication
        setError("Invalid email or password"); // Set error message
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setError("Network error. Please try again later."); // Set error message
    }
  };
  

  return (
    <div className="loginPage">
      <div className="loginBoard">
        <div>
          <XIcon />
          <h1>Sign in to Twitter</h1>
          <Box
            sx={{
              py: 2,
              display: "grid",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Input
              placeholder="Email"
              variant="solid"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              variant="solid"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="error">{error}</div>} {/* Display error message */}
            <Button size="md" onClick={handleLogin}>
              Next
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
