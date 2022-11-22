import "../../scss/common/plusmodal.scss";
import { useState } from "react";

const PlusModal = () => {
  const [plusBtn, setPlusBtn] = useState(false);
  const [roomModal, setRoomModal] = useState(false);
  const handleOpen = () => setRoomModal(true);
  const handleClose = () => setRoomModal(false);

  const clickPlusBtn = () => {
    setPlusBtn(!plusBtn);
  };

  return (
    <div className="plus-modal">
      <div className="plus-btn" onClick={!roomModal && clickPlusBtn}>
        +
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

      {/* {roomModal && (
        <div className="room-modal">
          <b>🥳 방 만들기</b>
          <p></p>
        </div>
      )} */}
    </div>
  );
};

export default PlusModal;
