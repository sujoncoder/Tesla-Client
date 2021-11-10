import DashBoardNav from "../../components/Dashboard/DashBoardNav/DashBoardNav";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import useAuth from "../../hook/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const { navToggle } = useAuth();
  return (
    <>
      <div className="dashboard">
        <aside className={navToggle ? "active" : ""}>
          <div className="aside_wrapper">
            <Sidebar />
          </div>
        </aside>
        <div className="dashboard_wrapper">
          <DashBoardNav />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
