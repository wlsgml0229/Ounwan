import { useNavigate } from "react-router-dom";
// import roomImg from "../../images/logo.png";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const Room = ({ roomId, roonName, content, userNum }) => {
  const navigate = useNavigate();
  const moveRoomDetail = () => {
    navigate(`/roomDetail/${roomId}`);
  };
  return (
    <div className="room" onClick={moveRoomDetail}>
      {/* <img src={roomImg} alt="방 메인이미지" /> */}
      <div className="room-text-wrap">
        <h2>{roonName}</h2>
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
