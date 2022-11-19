import { token } from "../utils/token";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const auth = token.access();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
