import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Room 상세페이지</div>;
};

export default RoomDetail;
