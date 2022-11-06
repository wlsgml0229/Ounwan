import { token } from "../utils/token";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = token.access();
  console.log("auth", token.access);
  if (!auth) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
