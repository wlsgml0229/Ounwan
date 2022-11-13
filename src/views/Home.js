// import axios from "axios";
import "../scss/home.scss";
import { useEffect, useState } from "react";
import Room from "./components/Room";
import PlusBtn from "./components/PlusBtn";

const Home = () => {
  const [roomList, setRoomList] = useState([]);
  const roomInfo = [
    {
      title: "방제목1",
      content: "내용11",
      userNum: "5",
      created_date: new Date().getDate,
    },
    {
      title: "방제목2",
      content: "내용11",
      userNum: "5",
      created_date: new Date().getDate,
    },
    {
      title: "방제목3 ",
      content: "내용11",
      userNum: "5",
      created_date: new Date().getDate,
    },
  ];

  const requestRoomList = async () => {
    // await axios.get(`/getRoom`).then((res) => {
    //   setRoomList(res.data.data);
    // });
    setRoomList(roomInfo);
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
      <PlusBtn />
    </div>
  );
};
export default Home;
