import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddAProduct from "../AddAProduct/AddAProduct";
import Admin from "../Admin/Admin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProduts from "../ManageProducts/ManageProduts";
import MyOrder from "../MyOrder/MyOrder";
import ProductEdit from "../ProductEdit/ProductEdit";
import Profile from "../Profile/Profile";
import Review from "../Review/Review";
import "./DashBoardNavigation.css";

const DashBoardContent = () => {
  const { navToggle } = useAuth();
  let { path } = useRouteMatch();
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
        <AdminRoute path={`${path}/manage-all-orders`}>
          <ManageAllOrder />
        </AdminRoute>
        <AdminRoute path={`${path}/add-a-product`}>
          <AddAProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/admin`}>
          <Admin />
        </AdminRoute>
        <AdminRoute path={`${path}/manage-products`}>
          <ManageProduts />
        </AdminRoute>
        <Route path={`${path}/my-order`}>
          <MyOrder />
        </Route>
        <Route path={`${path}/pay-now`}>
          <h4>Payment system coming soon.</h4>
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <AdminRoute path={`${path}/product-edit/:id`}>
          <ProductEdit />
        </AdminRoute>
      </Switch>
    </div>
  );
};

export default DashBoardContent;
