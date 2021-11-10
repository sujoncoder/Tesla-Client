import { useState } from "react";
import swal from "sweetalert";
import useAuth from "../../../hook/useAuth";
import "./DashBoardNav.css";

const DashBoardNav = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { firebaseContext, navToggle, setNavToggle } = useAuth();
  const { user, logOut } = firebaseContext;

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "Once logged out you will not be able to access all the services on this website",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((logout) => {
      if (logout) {
        logOut();
        swal("Successfully Log Out", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className={navToggle ? "dashboard_nav active" : "dashboard_nav"}>
      <div onClick={() => setNavToggle(!navToggle)} className="humberger_icon">
        {navToggle ? (
          <i className="fas fa-bars"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
      <div className={toggleBtn ? "drop_down active" : "drop_down"}>
        <div className="drop_down_icon">
          <img
            onClick={() => setToggleBtn(!toggleBtn)}
            src={user.photoURL}
            alt=""
          />
        </div>
        <div className={toggleBtn ? "drop_down_menu active" : "drop_down_menu"}>
          <small>Welcome:~</small>
          <p>{user.displayName}</p>
          <button onClick={() => handleLogOut()} className="log_out btn-custom">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
