import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useSurvey } from "../context/SurveyContext";

function Recipient() {
  const navigate = useNavigate();
  const { updateSurvey } = useSurvey();

  const [selected, setSelected] = useState("");

  const next = () => {
    updateSurvey({
      recipient: selected,
    });

    // Keyingi bosqich
    navigate("/questions");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 flex items-center justify-center p-6">

      <div className="max-w-6xl w-full">

        <ProgressBar
          step={2}
          total={5}
        />

        <h1 className="text-5xl text-white font-bold text-center">
          👤 Kim uchun?
        </h1>

        <p className="text-center text-pink-100 mt-3 mb-10">
          So'rovnoma kim uchun yaratilmoqda?
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <Card
            emoji="👨"
            title="Erkak"
            active={selected==="male"}
            onClick={()=>setSelected("male")}
          />

          <Card
            emoji="👩"
            title="Ayol"
            active={selected==="female"}
            onClick={()=>setSelected("female")}
          />

          <Card
            emoji="❓"
            title="Aniq emas"
            active={selected==="unknown"}
            onClick={()=>setSelected("unknown")}
          />

        </div>

        <div className="flex justify-between mt-12">

          <button
            onClick={()=>navigate("/create")}
            className="px-8 py-4 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
          >
            ← Orqaga
          </button>

          <button
            disabled={!selected}
            onClick={next}
            className={`px-10 py-4 rounded-full font-bold transition ${
              selected
                ? "bg-white text-pink-600"
                : "bg-white/20 text-white cursor-not-allowed"
            }`}
          >
            Davom etish →
          </button>

        </div>

      </div>

    </div>
  );
}

function Card({ emoji, title, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
      group
      relative
      overflow-hidden
      p-10
      rounded-[30px]
      cursor-pointer
      backdrop-blur-2xl
      border
      transition-all
      duration-500
      text-center

      hover:scale-105
      hover:-translate-y-2
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]

      ${
        active
          ? "bg-white text-pink-600 border-white shadow-[0_0_40px_rgba(255,255,255,0.45)] ring-4 ring-white/30"
          : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-pink-300/40"
      }
      `}
    >
      <div className="text-7xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
        {emoji}
      </div>

      <h2 className="text-3xl font-black mt-5">
        {title}
      </h2>

      {active && (
        <div className="absolute top-5 right-5 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          ✓
        </div>
      )}
    </div>
  );
}

export default Recipient;