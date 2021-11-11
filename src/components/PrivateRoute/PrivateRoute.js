import { Redirect, Route } from "react-router";
import useAuth from "../../hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { firebaseContext } = useAuth();
  const { user, isLoading } = firebaseContext;

  if (isLoading) {
    return <div>Login ...</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
