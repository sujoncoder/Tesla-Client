import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initializationfirebase = () => {
  getAnalytics(app);
};

export default initializationfirebase;
