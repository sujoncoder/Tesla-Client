import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import { toast } from "react-hot-toast";
import "./Navigation.css";

const Navigation = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(true);

  const { firebaseContext } = useAuth();
  const { user, logOut } = firebaseContext;

  const handleLogOut = () => {
    const handleToast = (isTrue) => {
      isTrue
        ? toast.success("Successfully Log Out!")
        : toast.error("Log Out Error.");
    };
    logOut(handleToast);
  };

  return (
    <div className="navbar">
      <Container>
        <div className="navbar_container">
          <div className="nav_logo">
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h3>
                Racy<span>Car</span>
              </h3>
            </Link>
          </div>
          <div
            className="humberger_nav_icon"
            onClick={() => setToggleHamburger(!toggleHamburger)}
          >
            {toggleHamburger && <i className="fas fa-bars"></i>}
          </div>
          <ul className={toggleHamburger ? "nav_menu active" : "nav_menu"}>
            <div
              className="humberger_close"
              onClick={() => setToggleHamburger(!toggleHamburger)}
            >
              {!toggleHamburger && <i className="fas fa-times"></i>}
            </div>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/listing"
              >
                Services
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/car-listing"
              >
                Car Listing
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link"
                to="/contact-us"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav_items">
              <NavLink
                activeClassName="active"
                className="nav_link dashboard_btn_link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            {!user.email ? (
              <li className="nav_items mobile_menu">
                <NavLink
                  activeClassName="active"
                  className="nav_link dashboard_btn_link"
                  to="/sign-up"
                >
                  Sign Up
                </NavLink>
              </li>
            ) : (
              <li className="nav_items mobile_menu">
                <NavLink
                  activeClassName="actives"
                  className="nav_link dashboard_btn_link"
                  onClick={handleLogOut}
                  to="/"
                >
                  Log Out
                </NavLink>
              </li>
            )}
          </ul>
          <div className="connect">
            <NavLink
              className="btn_round dashboard_btn"
              style={{
                minHeight: "40px",
                minWidth: "140px",
              }}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            {!user?.email && (
              <NavLink
                activeClassName="link_active"
                to="/sign-up"
                style={{
                  marginLeft: 10,
                }}
                className="sign_up"
              >
                Sign Up <i className="fas fa-arrow-right"></i>
              </NavLink>
            )}
            {user?.email && (
              <>
                <Link
                  style={{ whiteSpace: "nowrap" }}
                  className="view_profile_link"
                  to="/dashboard/my-profile"
                >
                  View Profile<i className="fas fa-arrow-right"></i>
                </Link>
                <div className={toggleBtn ? "drop_down active" : "drop_down"}>
                  <div className="drop_down_icon">
                    <img
                      onClick={() => setToggleBtn(!toggleBtn)}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <div
                    className={
                      toggleBtn ? "drop_down_menu active" : "drop_down_menu"
                    }
                  >
                    <small>Welcome:~</small>
                    <p>{user.displayName}</p>
                    <button
                      onClick={() => handleLogOut()}
                      className="btn_round_outline"
                      style={{
                        minHeight: "35px",
                        width: "100px",
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
