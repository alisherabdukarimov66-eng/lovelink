import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSurvey,
  saveAnswer,
} from "../utils/supabaseStorage";

function Receiver() {
  const { id } = useParams();

  const [survey, setSurvey] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSurvey() {
      const data = await getSurvey(id);

      if (data) {
        setSurvey(data);
        setAnswers(data.questions.map(() => ""));
      }

      setLoading(false);
    }

    loadSurvey();
  }, [id]);

  const handleChange = (index, value) => {
    const copy = [...answers];
    copy[index] = value;
    setAnswers(copy);
  };

  const handleSubmit = async () => {
    if (answers.some((answer) => answer.trim() === "")) {
      alert("Iltimos, barcha savollarga javob bering.");
      return;
    }

    const formattedAnswers = survey.questions.map((question, index) => ({
      question,
      answer: answers[index],
    }));

    const success = await saveAnswer({
      surveyId: id,
      answers: formattedAnswers,
    });

    if (success) {
      alert("❤️ Javoblaringiz muvaffaqiyatli yuborildi!");
    } else {
      alert("❌ Xatolik yuz berdi.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700">
        <h1 className="text-4xl text-white font-bold">
          Yuklanmoqda...
        </h1>
      </div>
    );
  }

  if (!survey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700">
        <h1 className="text-4xl text-white font-bold">
          ❌ So'rovnoma topilmadi
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-center">
          💌 Siz uchun xabar bor
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Quyidagi savollarga samimiy javob bering ❤️
        </p>

        <div className="mt-10 space-y-6">
          {survey.questions.map((question, index) => (
            <div key={index}>
              <label className="block font-semibold mb-2">
                {index + 1}. {question}
              </label>

              <input
                type="text"
                value={answers[index]}
                onChange={(e) =>
                  handleChange(index, e.target.value)
                }
                placeholder="Javobingiz..."
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-10 w-full bg-pink-600 hover:bg-pink-700 transition text-white py-4 rounded-xl font-bold text-lg"
        >
          ❤️ Javoblarni yuborish
        </button>

      </div>
    </div>
  );
}

export default Receiver;