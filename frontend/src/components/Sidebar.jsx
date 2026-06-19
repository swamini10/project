import { FaHome, FaBook, FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        🤖 AI Study Assistant
      </h1>

      <ul className="space-y-6">

        <li
          onClick={() => navigate("/home")}
          className="flex items-center gap-3 cursor-pointer hover:text-pink-300"
        >
          <FaHome /> Dashboard
        </li>

        <li
          onClick={() => navigate("/notes")}
          className="flex items-center gap-3 cursor-pointer hover:text-pink-300"
        >
          <FaBook /> My Notes
        </li>

        <li
          onClick={() => navigate("/chat")}
          className="flex items-center gap-3 cursor-pointer hover:text-pink-300"
        >
          <FaRobot /> AI Chat
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;