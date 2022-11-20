import "../../scss/common/plusmodal.scss";
import {useState } from "react";

const PlusModal = () => {
  const [plusBtn, setPlusBtn] = useState(false);

  const clickPlusBtn = () => {
    setPlusBtn(!plusBtn)
  }
  return (
  <div className="plus-modal" onClick={clickPlusBtn}>
    
    <div className="plus-btn">
      +
    </div>
    {plusBtn && 
      <div className="plus-modal-wrap">
        <div className="plus-modal-content">
          <ul>
            <li>
              방 만들기
            </li>
          </ul>
        </div>
      </div>
    }
  </div>
  );
};

export default PlusModal;
