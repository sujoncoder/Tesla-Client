import { createContext, useState } from "react";
import useFirebase from "../hook/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(true);
  const firebaseContext = useFirebase();
  return (
    <AuthContext.Provider value={{ firebaseContext, navToggle, setNavToggle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
