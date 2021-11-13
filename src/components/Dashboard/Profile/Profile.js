import "./Profile.css";
import useAuth from "../../../hook/useAuth";
import toast from "react-hot-toast";

const Profile = () => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const handleLogOut = () => {
    toast("Edit profile feature coming soon!", {
      icon: <i className="fas fa-info-circle"></i>,
    });
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
