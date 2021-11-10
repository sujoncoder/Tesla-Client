import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationfirebase from "../firebase/firebase.init";

initializationfirebase();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);

  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    user,
    logOut,
    googleSignIn,
  };
};

export default useFirebase;
