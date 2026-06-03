import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import api from "../api/axios";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", formData);
      const token = response.data.token;
      login(token, response.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
              ECOM
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Login Account</h1>

            <p className="text-gray-500 mt-2">
              Enjoy the Ecom for to purchase.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="email"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="password"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-black text-white rounded-xl font-medium hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <button
              className="font-semibold text-black cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
