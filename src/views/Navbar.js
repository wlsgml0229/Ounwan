import "../scss/common/component.scss";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import UserCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Outlet />
      <nav>
        <NavLink to="/">
          <HomeIcon fontSize="large" />
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/my">
          <UserCircleIcon fontSize="large" />
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
