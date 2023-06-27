import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./SideBar/Sidebar";
import Home from '../Pages/Home/Home';
import './Dashboard.css';
const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  //if (!auth.isAdmin) return <p>Access denied. Not an Admin!</p>;

  return (
    <div>
        <Topbar />
     <div className="styledDashboard">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
     </div>
    </div>
  );
};

export default Dashboard;


