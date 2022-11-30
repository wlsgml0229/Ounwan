import "./App.css";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogin from "./views/KaKaoLogin";
import Home from "./views/Home";
import PrivateRoute from "./views/PrivateRoute";
import NotFound from "./views/NotFound";
import Navbar from "./views/Navbar";
import RoomCreate from "./views/room/RoomCreate";
import RoomDetail from "./views/room/RoomDetail";
import { token } from "./utils/token";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Navbar />} path="/">
              <Route element={<Home />} path="/" />
              <Route element={<RoomCreate />} path="/room/create" />
              <Route element={<RoomDetail />} path="/roomDetail/:id" />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
