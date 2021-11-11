import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AboutUs from "./components/AboutUs/AboutUs";
import CarListing from "./pages/CarListing";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
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
