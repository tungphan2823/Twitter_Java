import "./Sidebar.css";

import { NavLink } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
const SidebarData = [
    {
        title: "",
        link: "/",
        icon: <XIcon/>,
      },
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Notification",
    link: "/notification",
    icon: <NotificationsIcon />,
  },
  {
    title: "Profile",
    link: "/profile",
    icon: <PersonIcon />,
  },
  { title: "Logout", icon: <LogoutIcon /> },
];
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarLists">
        {SidebarData.map((val) => {
          return (
            <NavLink
              key={val.title}
              to={val.link}
              className={({ isActive }) =>
                isActive ? "active-nav" : undefined
              }
            >
              <li key={val.title} className="row">
                {" "}
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>{" "}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
