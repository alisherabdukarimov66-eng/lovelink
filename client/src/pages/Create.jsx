import { useState } from "react";
import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";
import VariantCard from "../components/VariantCard";

function Create() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const { updateSurvey } = useSurvey();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-center text-white">
          💌 Nima yaratmoqchisiz?
        </h1>

        <p className="text-center text-pink-100 mt-3 mb-10 text-lg">
          Quyidagi variantlardan birini tanlang.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <VariantCard
            icon="💌"
            title="Sevgi xati"
            description="Romantik maktub yuboring."
            selected={selected === "letter"}
            onClick={() => setSelected("letter")}
          />

          <VariantCard
            icon="❤️"
            title="Sevgi izhori"
            description="Hislaringizni chiroyli tarzda bildiring."
            selected={selected === "love"}
            onClick={() => setSelected("love")}
          />

          <VariantCard
            icon="🌹"
            title="Uchrashuv taklifi"
            description="Uni uchrashuvga taklif qiling."
            selected={selected === "date"}
            onClick={() => setSelected("date")}
          />
        </div>

        <div className="flex justify-center mt-12">
          <button
  disabled={!selected}
  onClick={() => {
    updateSurvey({
      type: selected,
    });

    navigate("/recipient");
  }}
  className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
    selected
      ? "bg-white text-pink-600 hover:scale-105 hover:shadow-2xl"
      : "bg-white/30 text-white cursor-not-allowed"
  }`}
>
  Davom etish →
</button>
        </div>
      </div>
    </div>
  );
}

export default Create;