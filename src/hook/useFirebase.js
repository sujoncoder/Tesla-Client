import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationfirebase from "../firebase/firebase.init";
import { toast } from "react-hot-toast";
import axios from "axios";

initializationfirebase();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoad, setIsLoad] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const auth = getAuth();

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const clearInputForm = () => {
    setUserRegistration({
      username: "",
      fullname: "",
      email: "",
      password: "",
      imageUrl: "",
    });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const signUpWithEmailAndPass = (handleCallBack, handleUser) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(
      auth,
      userRegistration.email,
      userRegistration.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateProfile(auth.currentUser, {
          displayName: userRegistration.fullname,
          photoURL: userRegistration.imageUrl,
        })
          .then(() => {
            const userData = {
              name: user.displayName,
              email: user.email,
            };
            handleUser(userData);
            clearInputForm();
            handleCallBack();
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
        toast.error("User Already exist");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const signInWithEmailAndPass = (handleCallBack, handleUser) => {
    console.log(userRegistration);
    setIsLoading(true);
    signInWithEmailAndPassword(
      auth,
      userRegistration.email,
      userRegistration.password
    )
      .then((userCredential) => {
        console.log("Hello");
        const user = userCredential.user;
        setUser(user);
        clearInputForm();
        const userData = {
          name: user.displayName,
          email: user.email,
        };
        handleUser(userData);
        handleCallBack();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInWithGoogle = (handleCallBack, handleUser) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const user = {
          name: result.user.displayName,
          email: result.user.email,
        };
        handleUser(user);
        handleCallBack();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const signInWithGithub = (handleCallBack, handleUser) => {
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        const user = {
          name: result.user.displayName,
          email: result.user.email,
        };
        handleUser(user);
        handleCallBack();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = (hanldefun) => {
    signOut(auth)
      .then(() => {
        setUser({});
        hanldefun(true);
      })
      .catch((error) => {
        setError(error.message);
        hanldefun(false);
      });
  };

  useEffect(() => {
    setIsLoad(true);
    const url = `${process.env.REACT_APP_REST_API}users/${user.email}`;
    axios.get(url).then((res) => {
      setIsAdmin(res.data?.admin);
      setIsLoad(false);
    });
  }, [user.email]);

  return {
    error,
    user,
    isAdmin,
    logOut,
    isLoad,
    isLoading,
    signInWithGoogle,
    signInWithGithub,
    handleInput,
    userRegistration,
    signUpWithEmailAndPass,
    signInWithEmailAndPass,
  };
};

export default useFirebase;
