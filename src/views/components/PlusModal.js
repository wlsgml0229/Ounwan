import "../../scss/common/plusmodal.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const PlusModal = () => {
  const [plusBtn, setPlusBtn] = useState(false);
  const [roomModal, setRoomModal] = useState(false);
  const handleOpen = () => setRoomModal(true);
  const handleClose = () => setRoomModal(false);
  const onCreateRoom = () => {};

  const clickPlusBtn = () => {
    setPlusBtn(!plusBtn);
  };

  return (
    <div className="plus-modal">
      <div className="plus-btn" onClick={!roomModal && clickPlusBtn}>
        <AddCircleRoundedIcon fontSize="large" />
      </div>
      {plusBtn && (
        <div className="plus-modal-wrap" onClick={clickPlusBtn}>
          <div className="plus-modal-content">
            <ul>
              <li onClick={handleOpen}>💪 방 만들기</li>
            </ul>
          </div>
        </div>
      )}

      {roomModal && (
        <div className="room-modal">
          <b>🥳 방 만들기</b>
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <div className="btn-wrap">
            <Button variant="outlined">닫기</Button>
            <Button variant="contained" onClick={onCreateRoom}>
              생성
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlusModal;
