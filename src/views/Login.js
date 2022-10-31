import "../scss/login.scss";
import logo from "../images/logo.png";
import kakao_login_btn from "../images/kakao_login_large_wide.png";
import { REST_API_KEY, REDIRECT_URI } from "../secretConfig";

const Login = () => {
  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div className="Login">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="title-wrapper">
        <h1>반갑습니다</h1>
        <h2>오운완과 함께 운동하세요</h2>
      </div>
      <div className="login-btn-wrapper">
        <img
          src={kakao_login_btn}
          className="btn-login kakao"
          alt="kakao login"
          onClick={loginHandler}
        />
      </div>
    </div>
  );
};

export default Login;
