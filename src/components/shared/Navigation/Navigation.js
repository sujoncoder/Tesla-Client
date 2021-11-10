import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(true);

  return (
    <div className="navbar">
      <Container>
        <div className="navbar_container">
          <div className="nav_logo">
            <h3>SORUM</h3>
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
                to="/contact-us"
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
                to="/contact-us"
              >
                Dashboard
              </NavLink>
            </li>
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
            {/* <div className={toggleBtn ? "drop_down active" : "drop_down"}>
              <div className="drop_down_icon">
                <img
                  onClick={() => setToggleBtn(!toggleBtn)}
                  // src={user.photoURL}
                  alt=""
                />
              </div>
              <div
                className={
                  toggleBtn ? "drop_down_menu active" : "drop_down_menu"
                }
              >
                <small>Welcome:~</small>
                <button
                  // onClick={() => handleLogOut()}
                  className="log_out btn-custom"
                >
                  Log Out
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
