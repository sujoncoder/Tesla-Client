import { Redirect, Route } from "react-router";
import useAuth from "../../../hook/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { firebaseContext, setSpinner } = useAuth();
  const { user, isLoad, isAdmin } = firebaseContext;

  if (isLoad) {
    return <div>Login ...</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
