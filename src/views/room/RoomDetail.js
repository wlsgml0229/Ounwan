import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";

import axios from "axios";

const RoomDetail = () => {
  const client = useRef({});
  const [timer, setTimer] = useState("");
  const onStartTimer = () => {
    // 회원 id 값 전달
    axios.post("/room/update/timer").then((res) => {
      //리스트 업데이트, 멈춘시간이 존재하면 거기서 시작 , 없으면 최초의시간과 현재시간 비교
      if (res.data.data) {
        setTimer(res.data.data.startTime);
      }
    });
  };

  useEffect(() => {
    // connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://43.201.95.19/:8080/ws-stomp", // 웹소켓 서버로 직접 접속
      // webSocketFactory: () => new SockJS("/ws-stomp"), // proxy를 통한 접속
      connectHeaders: {
        "auth-token": "spring-chat-auth-token",
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/chat`, ({ body }) => {
      // 연결 되어있을때 -> 회원 리스트 받아오면서 타이머
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({}),
    });
  };

  return (
    <div>
      <div>
        상세페이지 방<button onClick={onStartTimer}>타이머</button>
      </div>
    </div>
  );
};

export default RoomDetail;
