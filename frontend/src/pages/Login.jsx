import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate(); // ✅ correct

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
        "http://localhost:8080/api/auth/login",
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
        toast.success("✅ Login Successful!");

        // 👉 Save token (optional)
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // ✅ Direct redirect (NO delay)
        navigate("/home");

      } else {
        toast.error(data.message || "❌ Invalid Credentials");
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
            Welcome Back
          </h1>

          <p className="text-white/70 mt-2">
            Login to your account 🔐
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

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

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-white shadow-lg transition duration-300
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90"
              }`}
          >
            {loading ? "Logging in..." : "🚀 Login"}
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-white/70 mt-6 text-sm">
          Don't have an account?

          <span
            onClick={() => navigate("/register")}
            className="ml-2 font-semibold text-white cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;