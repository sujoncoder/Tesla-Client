import "./Profile.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Profile = () => {
  const { firebaseContext, setLoading } = useAuth();
  const { user, logOut } = firebaseContext;
  const history = useHistory();
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

  const handleBackToHome = () => {
    setLoading(true);
    history.push("/");
  };

  return (
    <>
      <div className="profile_wrapper">
        <div className="profile">
          <h4>Profile</h4>
          <div className="profile_img">
            <img src={user.photoURL} alt="" />
          </div>
          <h5>{user.displayName}</h5>
          <p>{user.email}</p>
          <button
            onClick={handleLogOut}
            style={{
              minHeight: "40px",
              maxWidth: "140px",
              marginBottom: "20px",
            }}
            className="btn_round"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
