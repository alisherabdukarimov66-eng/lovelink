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

function Card({ emoji,title,active,onClick }){

  return(

    <div
      onClick={onClick}
      className={`
      p-10
      rounded-3xl
      cursor-pointer
      transition
      duration-300
      text-center

      ${
        active
        ? "bg-white text-pink-600 scale-105"
        : "bg-white/15 text-white hover:bg-white/25"
      }

      `}
    >

      <div className="text-6xl">{emoji}</div>

      <h2 className="text-2xl font-bold mt-5">
        {title}
      </h2>

    </div>

  )

}

export default Recipient;