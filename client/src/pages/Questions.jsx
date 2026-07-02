import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useSurvey } from "../context/SurveyContext";

function Questions() {
  const navigate = useNavigate();
  const { updateSurvey } = useSurvey();

  const [questions, setQuestions] = useState([""]);

  const handleChange = (index, value) => {
    const copy = [...questions];
    copy[index] = value;
    setQuestions(copy);
  };

  const addQuestion = () => {
    if (questions.length >= 10) return;
    setQuestions([...questions, ""]);
  };

  const removeQuestion = (index) => {
    if (questions.length === 1) return;

    const copy = questions.filter((_, i) => i !== index);
    setQuestions(copy);
  };

  const next = () => {
    const filtered = questions.filter((q) => q.trim() !== "");

    if (filtered.length === 0) {
      alert("Kamida bitta savol kiriting.");
      return;
    }

    updateSurvey({
      questions: filtered,
    });

    navigate("/theme");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 p-6">
      <div className="max-w-3xl mx-auto">

        <ProgressBar step={3} total={5} />

        <h1 className="text-5xl font-bold text-white text-center">
          ✍ Savollarni yozing
        </h1>

        <p className="text-pink-100 text-center mt-3 mb-10">
          Sevgan insoningiz javob beradigan savollar.
        </p>

        <div className="space-y-5">
          {questions.map((question, index) => (
            <div
  key={index}
  className="
  flex
  gap-3
  bg-white/5
  backdrop-blur-xl
  border
  border-white/10
  rounded-3xl
  p-3
  transition-all
  duration-300
  hover:bg-white/10
  "
>

              <input
                value={question}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`${index + 1}-savol`}
               className="
flex-1
rounded-2xl
p-5
bg-white/15
backdrop-blur-xl
border
border-white/20
text-white
placeholder-pink-100
outline-none
focus:border-white
focus:bg-white/20
transition-all
"
              />

              <button
                onClick={() => removeQuestion(index)}
                className="
bg-red-500/90
hover:bg-red-600
text-white
px-5
rounded-2xl
transition-all
duration-300
hover:scale-105
"
              >
                ✕
              </button>

            </div>
          ))}
        </div>

        <button
          onClick={addQuestion}
          className="
mt-6
bg-white
text-pink-600
px-8
py-4
rounded-2xl
font-bold
shadow-xl
hover:scale-105
transition-all
duration-300
"
        >
          ➕ Savol qo'shish
        </button>

        <div className="flex justify-between mt-10">
          <button
            onClick={() => navigate("/recipient")}
            className="px-8 py-4 rounded-full bg-white/20 text-white"
          >
            ← Orqaga
          </button>

          <button
            onClick={next}
            className="
px-12
py-4
rounded-2xl
bg-white
text-pink-600
font-bold
shadow-xl
hover:scale-105
hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]
transition-all
duration-300
"
          >
            Davom etish →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Questions;