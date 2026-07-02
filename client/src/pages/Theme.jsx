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
              className={`
group
p-8
rounded-[30px]
cursor-pointer
backdrop-blur-2xl
border
transition-all
duration-500

hover:scale-105
hover:-translate-y-2
hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]

${
theme === item.id
? "bg-white text-pink-600 border-white shadow-[0_0_40px_rgba(255,255,255,0.45)] ring-4 ring-white/30"
: "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-pink-300/40"
}
`}
            >
             <div className="text-6xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
  {item.emoji}
</div>
              <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
              {theme === item.id && (
  <div className="mt-4 inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
    ✓ Tanlandi
  </div>
)}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={() => navigate("/questions")}
            className="
px-8
py-4
rounded-2xl
bg-white/15
backdrop-blur-xl
text-white
border
border-white/20
hover:bg-white/25
transition-all
duration-300
"
          >
            ← Orqaga
          </button>

          <button
            disabled={!theme}
            onClick={next}
           className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl ${
theme
? "bg-white text-pink-600 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]"
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