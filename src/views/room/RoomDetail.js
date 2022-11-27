import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import axios from "axios";

const RoomDetail = () => {
  const client = useRef({});
  const [timer, setTimer] = useState("");
  const onStartTimer = () => {
    axios.post("/room/updateTimer").then((res) => {
      //리스트 업데이트
      if (res.data.data) {
        setTimer(res.data.data.startTime);
      }
    });
  };

  useEffect(() => {
    connect();

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
    client.current.subscribe(`/sub/chat`, ({ body }) => {});
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
