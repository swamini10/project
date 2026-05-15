import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AIChat from "./pages/AIChat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>

      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<AIChat />} />
      </Routes>

    </Router>
  );
}

export default App;