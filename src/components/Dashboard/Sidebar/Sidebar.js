import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <>
      <div>
        <div className="sidebar_logo">
          <h4>Sorum</h4>
        </div>
        <ul className="sidebar_menu my-4">
          <li className="sidebar_link">
            <NavLink activeClassName="active" to="/dashboard/profile">
              <div className="sidebar_icon_div">
                <i className="fas fa-user"></i>
              </div>
              My Profile
            </NavLink>
          </li>
          {isAdmin ? (
            <>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/my-order">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-indent"></i>
                  </div>
                  My Order
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/my-order">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  Pay Now
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/booking-list">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  Review
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/my-order">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-list-alt"></i>
                  </div>
                  My Order
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/my-order">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-list-alt"></i>
                  </div>
                  Manage All Orders
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/booking-list">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-indent"></i>
                  </div>
                  Add A Product
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/booking-list">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-indent"></i>
                  </div>
                  Make Admin
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to="/dashboard/booking-list">
                  <div className="sidebar_icon_div">
                    <i className="fas fa-indent"></i>
                  </div>
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
          <li className="sidebar_link">
            <Link to="/dashboard/add-booking">
              <div className="sidebar_icon_div">
                <i className="fas fa-sign-out-alt"></i>
              </div>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          className="btn_round"
          style={{
            minHeight: "40px",
            maxWidth: "140px",
          }}
          to="/"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
