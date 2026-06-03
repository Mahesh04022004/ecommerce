import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout, token } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
            E
          </div>

          <h1 className="text-2xl font-bold text-gray-900">ShopSphere</h1>
        </div>

        {/* Right Side */}
        {token ? (
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">
              Hello, {user?.username}
            </span>

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="px-5 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
