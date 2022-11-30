import axios from "axios";
import "../scss/home.scss";
import { useEffect, useState } from "react";
import Room from "./room/Room";
import PlusModal from "./components/PlusModal";

const Home = () => {
  const [roomList, setRoomList] = useState([]);

  const requestRoomList = async () => {
    console.log("---");
    await axios.get(`/room/list`).then((res) => {
      setRoomList(res.data.data);
    });
  };

  //create 되는 시점에 방 리스트 정보 불러오기
  useEffect(() => {
    requestRoomList();
  }, []);

  return (
    <div className="home">
      {roomList.map((el) => (
        <Room key={el.roomId} {...el} />
      ))}
      <PlusModal />
    </div>
  );
};
export default Home;
