import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RoomCreate = () => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const changeRoomName = (e) => {
    setRoomName(e.target.value);
  };
  const onCreateRoom = () => {
    axios.post("/room/create", { roomName: roomName }).then((res) => {
      console.log(res);
      if (res.data.data) {
        const roomId = res.data.data.roomId;
        navigate(`/roomDetail/${roomId}`);
      }
    });
  };
  return (
    <div className="room-create">
      <div className="header-wrap">
        <ArrowBackIcon className="back-icon" />
        <h2>방 만들기 </h2>
      </div>
      <div className="room-create-content">
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="방 이름"
          variant="outlined"
          onChange={changeRoomName}
        />
        <div className="people-number">
          <div className="people-icon-wrap">
            <PeopleAltOutlinedIcon /> 정원 (15명)
          </div>
          <TextField
            type="number"
            size="small"
            style={{ width: 100 }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
        </div>
        <div className="btn-create-wrap">
          <Button variant="outlined" fullWidth onClick={onCreateRoom}>
            생성 하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCreate;
