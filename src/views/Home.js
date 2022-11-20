import axios from "axios";
import "../scss/home.scss";
import { useEffect, useState } from "react";
import Room from "./room/Room";
import PlusModal from "./components/PlusModal";

const Home = () => {
  const [roomList, setRoomList] = useState([]);
 
  // const roomInfo = [
  //   {
  //     id: "1",
  //     title: "방제목1",
  //     content: "내용11",
  //     userNum: "5",
  //     created_date: new Date().getDate,
  //   },
  //   {
  //     id: "2",
  //     title: "방제목2",
  //     content: "내용11",
  //     userNum: "5",
  //     created_date: new Date().getDate,
  //   },
  //   {
  //     id: "3",
  //     title: "방제목3 ",
  //     content: "내용11",
  //     userNum: "5",
  //     created_date: new Date().getDate,
  //   },
  // ];

  const requestRoomList = async () => {
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
      {roomList.map((el, idx) => (
        <Room key={idx} {...el} />
      ))}
      <PlusModal />
    </div>
  );
};
export default Home;
