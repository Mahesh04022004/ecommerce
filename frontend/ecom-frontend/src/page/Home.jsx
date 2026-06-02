import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight">ShopSphere</h1>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition">
              Home
            </a>
            <a href="#" className="hover:text-black transition">
              Products
            </a>
            <a href="#" className="hover:text-black transition">
              Categories
            </a>
            <a href="#" className="hover:text-black transition">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <button
              className="px-5 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="px-5 py-2 bg-black text-white rounded-full hover:opacity-90 transition"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
              ✨ New Collection 2026
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
              Shop Better.
              <br />
              Live Smarter.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Discover premium products curated for modern lifestyles. Quality,
              style, and innovation — all in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition">
                Shop Now
              </button>

              <button className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                Explore
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-40"></div>

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="hero"
              className="rounded-3xl shadow-2xl object-cover h-[550px] w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Categories</h2>

          <p className="text-gray-500 mt-3">
            Handpicked collections for every lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition">
            <div className="text-5xl mb-4">👕</div>
            <h3 className="text-2xl font-semibold">Fashion</h3>
            <p className="text-gray-500 mt-2">
              Trendy outfits and accessories.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-semibold">Electronics</h3>
            <p className="text-gray-500 mt-2">Smart gadgets and technology.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold">Home Living</h3>
            <p className="text-gray-500 mt-2">
              Beautiful essentials for your home.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROMO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-black text-white rounded-[40px] p-12 text-center">
          <h2 className="text-4xl font-bold">Summer Sale Up To 50% Off</h2>

          <p className="mt-4 text-gray-300">
            Limited-time deals on your favorite products.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Start Shopping
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h2 className="text-2xl font-bold">ShopSphere</h2>

              <p className="text-gray-500 mt-3">
                Premium shopping experience for modern customers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>

              <ul className="space-y-2 text-gray-500">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>

              <ul className="space-y-2 text-gray-500">
                <li>Help Center</li>
                <li>Contact</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>

              <ul className="space-y-2 text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-10 pt-6 text-center text-gray-500">
            © 2026 ShopSphere. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
