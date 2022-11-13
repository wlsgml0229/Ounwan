import "../scss/common/nav.scss";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import UserCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/my">
        <UserCircleIcon fontSize="large" />
      </NavLink>
    </nav>
  );
};

export default Navbar;