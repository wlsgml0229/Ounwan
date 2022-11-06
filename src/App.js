import "./App.css";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLogin from "./views/KaKaoLogin";
import Home from "./views/Home";
import PrivateRoute from "./views/PrivateRoute";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
