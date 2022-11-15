import "./App.css";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogin from "./views/KaKaoLogin";
import Home from "./views/Home";
// import PrivateRoute from "./views/PrivateRoute";
import NotFound from "./views/NotFound";
import Navbar from "./views/Navbar";
import RoomDetail from "./views/room/RoomDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* 
          <Route
            index
            path="/"
            element={
              <PrivateRoute>
                <Route element={<Navbar />}></Route>
                <Home />
              </PrivateRoute>
            }
          /> */}

          <Route element={<Home />} path="/" />
          <Route element={<RoomDetail />} path="/roomDetail/:id" />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
