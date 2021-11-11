import { useState } from "react";
// import swal from "sweetalert";
import { toast } from "react-hot-toast";
import useAuth from "../../../hook/useAuth";
import "./DashBoardNav.css";

const DashBoardNav = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { firebaseContext, navToggle, setNavToggle } = useAuth();
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
          <button
            onClick={() => handleLogOut()}
            className="btn_round_outline"
            style={{ minHeight: "35px", maxWidth: "100px" }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
