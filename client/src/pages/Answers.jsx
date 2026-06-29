import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswers } from "../utils/supabaseStorage";

function Answers() {
  const { id } = useParams();

  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnswers() {
      const data = await getAnswers(id);
      setAnswers(data);
      setLoading(false);
    }

    loadAnswers();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700">
        <h1 className="text-4xl text-white font-bold">
          Yuklanmoqda...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-center">
          💌 Kelgan javoblar
        </h1>

        {answers.length === 0 ? (
          <p className="text-center mt-8 text-gray-500 text-lg">
            Hozircha javoblar mavjud emas.
          </p>
        ) : (
          <div className="space-y-8 mt-10">
            {answers.map((answer, index) => (
              <div
                key={answer.id}
                className="border border-pink-200 rounded-2xl p-6 bg-pink-50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-2xl">
                    💖 Javob #{index + 1}
                  </h2>

                  <span className="text-gray-500 text-sm">
                    {new Date(answer.created_at).toLocaleString()}
                  </span>
                </div>

                {answer.answers.map((item, i) => (
                  <div
                    key={i}
                    className="mb-5 bg-white rounded-xl p-4"
                  >
                    <p className="font-semibold text-lg">
                      {i + 1}. {item.question}
                    </p>

                    <p className="text-pink-700 mt-2 text-lg">
                      ❤️ {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Answers;