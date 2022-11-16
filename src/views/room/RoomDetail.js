// import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const { id } = useParams();
  console.log(id);
  const requestRoomDetail = () => {};

  useEffect(() => {
    requestRoomDetail();
  });
  return <div>Room 상세페이지</div>;
};

export default RoomDetail;
