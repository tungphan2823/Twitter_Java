import "./App.css";
import HomePage from "./pages/Home";
import NotificationPage from "./pages/Notification";
import ProfilePage from "./pages/Profile";
import RootPage from "./pages/Root";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import { AppProvider } from "./lib/App-context";
import TweetPage from "./pages/Tweet";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
     
      {
        path: ":userId/:tweetId",
        element: <TweetPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      {/* Wrap your routes with RouterProvider */}
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

export default App;
