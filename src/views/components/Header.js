import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../scss/common/component.scss";
const Header = ({ title, backPath }) => {
  return (
    <div className="header-wrap">
      <ArrowBackIcon className="back-icon" />
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
