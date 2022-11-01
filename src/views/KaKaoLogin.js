import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { token } from "../utils/token";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log("kakao_code", KAKAO_CODE);

  useEffect(() => {
    // 백엔드로 인가코드보내기
    axios
      .post("/login", { code: KAKAO_CODE })
      .then((res) => {
        console.log("tokenSuccess", res);
        if (res.data.response) {
          token.set("user_token", res.data.response.data);
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err);
      });
  });

  return <div>KaKaoLogin</div>;
};

export default KakaoLogin;
