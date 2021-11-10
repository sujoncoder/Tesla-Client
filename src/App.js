import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import useFirebase from "./hook/useFirebase";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";

function App() {
  const { googleSignIn } = useFirebase();
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
