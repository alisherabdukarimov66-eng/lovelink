import { useState, useEffect } from "react";
import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";
import VariantCard from "../components/VariantCard";
import confetti from "canvas-confetti";

function Create() {
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [titleText, setTitleText] = useState("");

  const navigate = useNavigate();
  const { updateSurvey } = useSurvey();

  const fullTitle = "💌 Nima yaratmoqchisiz?";

  useEffect(() => {
    setShow(true);

    let i = 0;

    const interval = setInterval(() => {
      setTitleText(fullTitle.slice(0, i));
      i++;

      if (i > fullTitle.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  function fireConfetti() {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: {
        y: 0.7,
      },
      colors: [
        "#ff4d6d",
        "#ff85a2",
        "#ffffff",
        "#ffd6e0",
        "#ffb3c6",
      ],
    });
  }

  const handleContinue = () => {
    if (!selected) return;

    setLoading(true);

    setTimeout(() => {
      updateSurvey({
        type: selected,
      });

      navigate("/recipient");
    }, 700);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700">

      <div className="absolute w-[600px] h-[600px] bg-white/20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse" />

      <div className="absolute w-[500px] h-[500px] bg-purple-300/20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-pulse" />

      <div className="max-w-6xl w-full z-10">

        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-5 h-[80px]">
          {titleText}
          <span className="animate-pulse">|</span>
        </h1>

        <div className="max-w-md mx-auto mb-12">
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="w-1/5 h-full bg-white rounded-full"></div>
          </div>

          <p className="text-center text-pink-100 mt-3">
            1 / 5 Bosqich
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >

          <div className="transition-all duration-700 delay-100">
            <VariantCard
              icon="💌"
              title="Sevgi xati"
              description="Romantik maktub yuboring"
              selected={selected === "letter"}
              onClick={() => {
                setSelected("letter");
                fireConfetti();
              }}
            />
          </div>

          <div className="transition-all duration-700 delay-200">
            <VariantCard
              icon="❤️"
              title="Sevgi izhori"
              description="Hislaringizni bildiring"
              selected={selected === "love"}
              onClick={() => {
                setSelected("love");
                fireConfetti();
              }}
            />
          </div>

          <div className="transition-all duration-700 delay-300">
            <VariantCard
              icon="🌹"
              title="Uchrashuv taklifi"
              description="Uni uchrashuvga taklif qiling"
              selected={selected === "date"}
              onClick={() => {
                setSelected("date");
                fireConfetti();
              }}
            />
          </div>

        </div>

        <div className="flex justify-center mt-14">
          <button
            disabled={!selected || loading}
            onClick={handleContinue}
            className={`px-14 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl ${
              selected
                ? "bg-white text-pink-600 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                : "bg-white/20 text-white cursor-not-allowed"
            }`}
          >
            {loading ? "Yuklanmoqda..." : "Davom etish →"}
          </button>
        </div>

      </div>

    </div>
  );
}

export default Create;