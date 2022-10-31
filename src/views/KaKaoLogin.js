import React, { useEffect } from "react";
import axios from "axios";
import { REDIRECT_URI, REST_API_KEY } from "../secretConfig";
import { useLocation } from "react-router-dom";

const KakaoLogin = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log("kakao_code", KAKAO_CODE);
  let grant_type = "authorization_code";
  useEffect(() => {
    // 백엔드로 인가코드보내기
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${REST_API_KEY}
        &redirect_uri=${REDIRECT_URI}
        &code=${KAKAO_CODE}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
        }
      });
  }, []);

  return <div>KaKaoLogin</div>;
};

export default KakaoLogin;
