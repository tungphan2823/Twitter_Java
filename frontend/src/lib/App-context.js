import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

// Create a custom hook to access the context
export const useAppContext = () => React.useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [userTweets, setUserTweets] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [change, setChange] = useState(true);
  // Fetch tweets function
  const fetchTweets = async () => {
    const url = "http://localhost:8080/tweets";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch tweets");
      }
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Fetch user data function
  const fetchUserData = async () => {
    const url = "http://localhost:8080/users/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetailData = async () => {
    const url = "http://localhost:8080/tweets/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserTweets(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // Fetch data on component mount
  useEffect(() => {
    fetchTweets();
    fetchUserData();
    fetchUserDetailData();
  }, [change]);

  return (
    <AppContext.Provider
      value={{ tweets, userData, loading, error, userTweets, setChange , change}}
    >
      {children}
    </AppContext.Provider>
  );
};
