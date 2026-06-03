import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    role: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration Failed");
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
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

            <p className="text-gray-500 mt-2">
              Enjoy the Ecom for to purchase.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleForm}>
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="username"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="email"
            />

            {/* Age */}
            <input
              type="number"
              placeholder="Age"
              min="18"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="age"
            />

            {/* Role */}
            <select
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="role"
            >
              <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
              onChange={handleChange}
              name="password"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-black text-white rounded-xl font-medium hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <button
              className="font-semibold text-black cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
