// components/Navbar.jsx
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex justify-end items-center p-4 border-b border-white/20">

      <div className="flex items-center gap-4">

        <FaUserCircle size={28} className="text-white cursor-pointer" />

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg text-white font-semibold 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          hover:opacity-90"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;