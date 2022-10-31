import "./App.css";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogin from "./views/KaKaoLogin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/kakaoLogin" element={<KakaoLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
