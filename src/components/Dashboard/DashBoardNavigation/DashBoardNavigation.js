import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddAProduct from "../AddAProduct/AddAProduct";
import Admin from "../Admin/Admin";
import DisplayProduct from "../DisplayProduct/DisplayProduct";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProduts from "../ManageProducts/ManageProduts";
import MyOrder from "../MyOrder/MyOrder";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductEdit from "../ProductEdit/ProductEdit";
import Profile from "../Profile/Profile";
import Review from "../Review/Review";
import "./DashBoardNavigation.css";

const DashBoardContent = () => {
  const { navToggle, mobileNav } = useAuth();

  let { path } = useRouteMatch();
  return (
    <div
      className={
        navToggle || !mobileNav
          ? "dashboard_content active"
          : "dashboard_content"
      }
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
        <AdminRoute path={`${path}/display-product/:id`}>
          <DisplayProduct />
        </AdminRoute>
        <Route path={`${path}/product-details/:id`}>
          <ProductDetails />
        </Route>
        <Route path={`${path}/my-order`}>
          <MyOrder />
        </Route>
        <Route path={`${path}/pay-now`}>
          <div
            style={{
              textAlign: "center",
            }}
            className="my-4"
          >
            <h3>Payment system coming soon.</h3>
          </div>
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
