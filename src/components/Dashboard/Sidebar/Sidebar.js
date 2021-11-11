import { useEffect } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import { toast } from "react-hot-toast";
import "./Sidebar.css";
import axios from "axios";

const Sidebar = () => {
  let { url } = useRouteMatch();
  const { firebaseContext } = useAuth();
  const { logOut, isAdmin } = firebaseContext;

  useEffect(() => {
    const url = "http://localhost:5000/users";
    axios.get(url);
  }, []);

  const handleLogOut = () => {
    const hanldefun = () => {};
    toast.success("Successfully Log Out!");
    logOut(hanldefun);
  };

  return (
    <>
      <div>
        <div className="sidebar_logo">
          <h3>
            Racy<span>Car</span>
          </h3>
        </div>
        <ul className="sidebar_menu my-4">
          <li className="sidebar_link">
            <NavLink activeClassName="active" to={`${url}/my-profile`}>
              <div className="sidebar_icon_div">
                <i className="fas fa-user"></i>
              </div>
              My Profile
            </NavLink>
          </li>
          {isAdmin ? (
            <>
              <li className="sidebar_link">
                <NavLink
                  activeClassName="active"
                  to={`${url}/manage-all-orders`}
                >
                  <div className="sidebar_icon_div">
                    <i className="fas fa-list-alt"></i>
                  </div>
                  Manage All Orders
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to={`${url}/add-a-product`}>
                  <div className="sidebar_icon_div">
                    <i className="fas fa-cart-plus"></i>
                  </div>
                  Add A Product
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to={`${url}/admin`}>
                  <div className="sidebar_icon_div">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  Admin
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to={`${url}/manage-products`}>
                  <div className="sidebar_icon_div">
                    <i className="fas fa-pen-square"></i>
                  </div>
                  Manage Products
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to={`${url}/my-order`}>
                  <div className="sidebar_icon_div">
                    <i className="fas fa-indent"></i>
                  </div>
                  My Order
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to={`${url}/pay-now`}>
                  <div className="sidebar_icon_div">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  Pay Now
                </NavLink>
              </li>
              <li className="sidebar_link">
                <NavLink activeClassName="active" to={`${url}/review`}>
                  <div className="sidebar_icon_div">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  Review
                </NavLink>
              </li>
            </>
          )}
          <li className="sidebar_link">
            <button onClick={handleLogOut}>
              <div className="sidebar_icon_div">
                <i className="fas fa-sign-out-alt"></i>
              </div>
              Log Out
            </button>
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
