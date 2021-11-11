import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AboutUs from "./components/AboutUs/AboutUs";
import CarListing from "./pages/CarListing";
import NotFound from "./components/NotFound/NotFound";
import useAuth from "./hook/useAuth";

function App() {
  const { firebaseContext } = useAuth();
  const { isLoading } = firebaseContext;
  return (
    <>
      <div
        className={isLoading ? "spinner_container active" : "spinner_container"}
      >
        <div className="spinner_wrapper">
          <svg viewBox="0 0 100 100">
            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="1.5"
                  floodColor="#fc6767"
                />
              </filter>
            </defs>
            <circle
              id="spinner"
              style={{
                fill: "transparent",
                stroke: "var(--main-color)",
                strokeWidth: "7px",
                strokeLinecap: "round",
                filter: "url(#shadow)",
              }}
              cx="50"
              cy="50"
              r="45"
            />
          </svg>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/car-listing">
          <CarListing />
        </Route>
        <Route path="/login">
          <Login signUp={false} />
        </Route>
        <Route path="/sign-up">
          <Login signUp={true} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
