import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20">

      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 text-white mb-8">
        <Heart size={18} fill="white" />
        <span className="text-sm font-medium">
          Anonymous • Beautiful • Secure
        </span>
      </div>

      <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
        Anonymous
        <br />
        Love Questions
      </h1>

      <p className="mt-8 max-w-2xl mx-auto text-pink-100 text-lg md:text-xl leading-8">
        Sevgan insoningiz uchun anonim savollar yarating,
        linkni ulashing va javoblarni real vaqtda qabul qiling.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

        <button
          onClick={() => navigate("/create")}
          className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
        >
          💌 Boshlash
          <ArrowRight size={20} />
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white/15 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/25 transition-all duration-300"
        >
          📊 Dashboard
        </button>

      </div>

    </section>
  );
}

export default Hero;