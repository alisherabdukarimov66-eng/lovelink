import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSurveys } from "../utils/supabaseStorage";

function Dashboard() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadSurveys() {
      const data = await getAllSurveys();
      setSurveys(data);
      setLoading(false);
    }

    loadSurveys();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 p-8">

      <h1 className="text-5xl text-white font-bold text-center mb-10">
        📊 Dashboard
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">

        {surveys.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center">
            Hali hech qanday so'rovnoma yaratilmagan.
          </div>
        ) : (
          surveys.map((survey) => (
            <div
              key={survey.id}
              className="bg-white rounded-3xl p-6 shadow-xl flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {survey.type}
                </h2>

                <p className="text-gray-500">
                  Savollar: {survey.questions?.length || 0}
                </p>

                <p className="text-gray-500">
                  ID: {survey.id}
                </p>
              </div>

              <button
                onClick={() => navigate(`/answers/${survey.id}`)}
                className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
              >
                Ochish
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;