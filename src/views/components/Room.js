import roomImg from "../../images/logo.png";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const Room = ({ title, content, userNum }) => {
  return (
    <div className="room">
      {/* <img src={roomImg} alt="방 메인이미지" /> */}
      <div className="room-text-wrap">
        <h2>{title}</h2>
        {/* <span>{content}</span> */}
        <div className="room-user-item">
          <PeopleOutlineIcon />
          <span>{userNum}명</span>
        </div>
      </div>
    </div>
  );
};

export default Room;
