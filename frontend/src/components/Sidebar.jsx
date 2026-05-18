// components/Sidebar.jsx
import { FaHome, FaBook, FaRobot } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        🤖 AI Study Assistant
      </h1>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-300">
          <FaHome /> Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-300">
          <FaBook /> My Notes
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-pink-300">
          <FaRobot /> AI Chat
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;