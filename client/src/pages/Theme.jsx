import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useSurvey } from "../context/SurveyContext";

function Theme() {
  const navigate = useNavigate();
  const { updateSurvey } = useSurvey();

  const [theme, setTheme] = useState("");

  const themes = [
    { id: "romantic", emoji: "❤️", title: "Romantik" },
    { id: "cute", emoji: "🌸", title: "Cute" },
    { id: "elegant", emoji: "🌙", title: "Elegant" },
    { id: "funny", emoji: "😂", title: "Qiziqarli" },
  ];

  const next = () => {
    updateSurvey({ theme });
    navigate("/link-ready");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 p-6">
      <div className="max-w-5xl mx-auto">

        <ProgressBar step={5} total={6} />

        <h1 className="text-5xl font-bold text-white text-center">
          🎨 Mavzuni tanlang
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {themes.map((item) => (
            <div
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`p-8 rounded-3xl cursor-pointer transition ${
                theme === item.id
                  ? "bg-white text-pink-600"
                  : "bg-white/20 text-white"
              }`}
            >
              <div className="text-5xl">{item.emoji}</div>
              <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={() => navigate("/questions")}
            className="px-8 py-4 rounded-full bg-white/20 text-white"
          >
            ← Orqaga
          </button>

          <button
            disabled={!theme}
            onClick={next}
            className={`px-10 py-4 rounded-full font-bold ${
              theme
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

export default Theme;