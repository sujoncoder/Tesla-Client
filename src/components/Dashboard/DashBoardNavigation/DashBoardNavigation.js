import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import AddAProduct from "../AddAProduct/AddAProduct";
import Admin from "../Admin/Admin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProduts from "../ManageProducts/ManageProduts";
import MyOrder from "../MyOrder/MyOrder";
import Profile from "../Profile/Profile";
import Review from "../Review/Review";
import "./DashBoardNavigation.css";

const DashBoardContent = () => {
  const { navToggle } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div
      className={navToggle ? "dashboard_content active" : "dashboard_content"}
    >
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/my-profile`} />
        </Route>
        <Route path={`${path}/my-profile`}>
          <Profile></Profile>
        </Route>
        <Route path={`${path}/manage-all-orders`}>
          <ManageAllOrder />
        </Route>
        <Route path={`${path}/add-a-product`}>
          <AddAProduct />
        </Route>
        <Route path={`${path}/admin`}>
          <Admin />
        </Route>
        <Route path={`${path}/manage-products`}>
          <ManageProduts />
        </Route>
        <Route path={`${path}/my-order`}>
          <MyOrder />
        </Route>
        <Route path={`${path}/pay-now`}>
          <h4>Payment system coming soon.</h4>
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoardContent;
