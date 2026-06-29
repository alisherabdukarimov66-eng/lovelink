import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useSurvey } from "../context/SurveyContext";

function QuestionCount() {
  const navigate = useNavigate();
  const { updateSurvey } = useSurvey();

  const [count, setCount] = useState(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">

        <ProgressBar step={3} total={6} />

        <h1 className="text-5xl text-white text-center font-bold">
          ❓ Nechta savol bo'lsin?
        </h1>

        <p className="text-center text-pink-100 mt-3">
          1 tadan 10 tagacha savol tanlashingiz mumkin.
        </p>

        <div className="flex justify-center mt-12">
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="px-6 py-4 rounded-2xl text-xl"
          >
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <option key={n} value={n}>
                {n} ta savol
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between mt-12">
          <button
            onClick={() => navigate("/recipient")}
            className="px-8 py-4 rounded-full bg-white/20 text-white"
          >
            ← Orqaga
          </button>

          <button
            onClick={() => {
              updateSurvey({
                questionCount: count,
              });

              navigate("/questions");
            }}
            className="px-10 py-4 rounded-full bg-white text-pink-600 font-bold"
          >
            Davom etish →
          </button>
        </div>

      </div>
    </div>
  );
}

export default QuestionCount;