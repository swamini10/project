import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();


  return (
    <div className="flex min-h-screen 
      bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">

      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-10 text-white">
          <h1 className="text-4xl font-bold mb-4">
            👋 Welcome to AI Study Assistant
          </h1>

          <p className="text-white/80">
            Your smart learning companion powered by AI 🚀
          </p>
        </div>
      </div>
    </div>

  );
};

export default Home;