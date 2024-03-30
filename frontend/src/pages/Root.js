import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Root.css";
const RootPage = () => {
  return (
    <div className="container">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <main className="Outlet">
        <Outlet />
      </main>
    </div>
  );
};
export default RootPage;
