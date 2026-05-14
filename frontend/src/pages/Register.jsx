import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserShield
} from "react-icons/fa";

const Register = () => {
 const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("✅ User Registered Successfully");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
        setFormData({
          name: "",
          email: "",
          password: "",
          role: ""
        });

      } else {
        toast.error(data.message || "❌ Registration Failed");
      }

    } catch (error) {
      console.error(error);
      toast.error("⚠️ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">
            Create Account
          </h1>

          <p className="text-white/70 mt-2">
            Join AI Study Assistant 🚀
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-white text-sm mb-1 block">
              Name
            </label>

            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
              <FaUser className="text-gray-500 mr-3" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none text-gray-800"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-white text-sm mb-1 block">
              Email
            </label>

            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
              <FaEnvelope className="text-gray-500 mr-3" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none text-gray-800"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm mb-1 block">
              Password
            </label>

            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
              <FaLock className="text-gray-500 mr-3" />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none text-gray-800"
                required
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="text-white text-sm mb-1 block">
              Role
            </label>

            <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
              <FaUserShield className="text-gray-500 mr-3" />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full outline-none text-gray-700 bg-transparent"
                required
              >
                <option value="">Select Role</option>
                <option value="STUDENT">🎓 Student</option>
                <option value="ADMIN">🛠 Admin</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-white shadow-lg transition duration-300
              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90"
              }`}
          >
            {loading ? "Registering..." : "✨ Register Now"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-white/70 mt-6 text-sm">
          Already have an account?

          <span className="ml-2 font-semibold text-white cursor-pointer hover:underline">
            <Link to="/login" className="ml-2 font-semibold text-white cursor-pointer hover:underline" >
              Login
            </Link>
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;