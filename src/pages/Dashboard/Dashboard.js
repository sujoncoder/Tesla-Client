import DashBoardNavigation from "../../components/Dashboard/DashBoardNavigation/DashBoardNavigation";
import DashBoardNav from "../../components/Dashboard/DashBoardNav/DashBoardNav";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import useAuth from "../../hook/useAuth";
import "./Dashboard.css";
import { useEffect } from "react";

const Dashboard = () => {
  const { navToggle, setNavToggle, mobileNav, setMobileNav } = useAuth();
  const handleSidebar = () => {
    setNavToggle(!navToggle);
  };
  const handleReview = () => {
    const width = window.innerWidth;
    if (width <= 992) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  };

  useEffect(() => {
    handleReview();
  }, []);

  window.addEventListener("resize", handleReview);
  return (
    <>
      <div
        className={navToggle || mobileNav ? "active dashboard" : "dashboard"}
        onClick={handleSidebar}
      >
        <aside
          onClick={(event) => event.stopPropagation()}
          className={navToggle ? "active aside" : "aside"}
        >
          <div className="aside_wrapper">
            <Sidebar />
          </div>
        </aside>
        <div
          onClick={(event) => event.stopPropagation()}
          className="dashboard_wrapper"
        >
          <DashBoardNav />
          <DashBoardNavigation />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
