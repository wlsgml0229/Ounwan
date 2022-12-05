import React, { useEffect } from "react";
import axios from "axios";
import ounwanAxios from "../utils/axiosSetting";
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
      .post(`/user/kakao/login?code=${KAKAO_CODE}`)
      .then((res) => {
        if (res.data.data) {
          token.set(res.data.data.accessToken);
          ounwanAxios.setHeader();
          navigate("/");
        }
      })
      .catch((err) => {
        token.remove();
        navigate("/login");
      });
  }, []);

  return <div>KaKaoLogin</div>;
};

export default KakaoLogin;
