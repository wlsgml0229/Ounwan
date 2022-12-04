// import { token } from "../utils/token";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  // const auth = token.access();
  const auth = "test";
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
