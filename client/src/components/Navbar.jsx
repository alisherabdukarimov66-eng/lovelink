import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between py-6">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">
          <Heart className="text-white" fill="white" size={24} />
        </div>

        <div>
          <h1 className="text-white text-2xl font-black">
            LoveLink
          </h1>

          <p className="text-pink-100 text-sm">
            Anonymous Love Survey
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/25 transition-all duration-300"
      >
        Dashboard
      </button>
    </nav>
  );
}

export default Navbar;