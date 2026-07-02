import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllSurveys,
  deleteSurvey,
} from "../utils/supabaseStorage";
import { supabase } from "../lib/supabase";

function Dashboard() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadSurveys() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      setEmail(user.email);

      const data = await getAllSurveys();
      setSurveys(data);
      setLoading(false);
    }

    loadSurveys();
  }, [navigate]);

  async function logout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  async function handleDelete(id) {
    const ok = window.confirm(
      "Rostdan ham ushbu LoveLinkni o'chirmoqchimisiz?"
    );

    if (!ok) return;

    const success = await deleteSurvey(id);

    if (!success) {
      alert("O'chirishda xatolik.");
      return;
    }

    setSurveys((prev) => prev.filter((item) => item.id !== id));

    alert("LoveLink o'chirildi.");
  }

  async function copyLink(id) {
    const link = `${window.location.origin}/l/${id}`;

    await navigator.clipboard.writeText(link);

    alert("Link nusxalandi!");
  }

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
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              ❤️ LoveLink Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              {email}
            </p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">

            <button
              onClick={() => navigate("/create")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl transition"
            >
              ➕ Yangi LoveLink
            </button>

            <button
              onClick={logout}
              className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl transition"
            >
              🚪 Logout
            </button>

          </div>

        </div>

        {surveys.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <h2 className="text-2xl font-bold">
              Hali hech qanday LoveLink yaratilmagan.
            </h2>

            <button
              onClick={() => navigate("/create")}
              className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl transition"
            >
              Birinchi LoveLink yaratish
            </button>

          </div>
        ) : (
          <div className="space-y-6">

            {surveys.map((survey) => (
              <div
                key={survey.id}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col md:flex-row justify-between items-center"
              >

                <div>
                  <h2 className="text-2xl font-bold">
                    {survey.type}
                  </h2>

                 <p className="text-gray-500">
  📋 Savollar: {survey.questions?.length || 0}
</p>

<p className="text-pink-600 font-semibold">
  💌 Javoblar: {survey.answersCount}
</p>

<p className="text-gray-500">
  🆔 ID: {survey.id}
</p>

<p className="text-gray-500">
  📅 Yaratilgan sana:{" "}
  {new Date(survey.created_at).toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })}
</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-5 md:mt-0">

                  <button
                    onClick={() => copyLink(survey.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    📋 Nusxalash
                  </button>

                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(
                      `${window.location.origin}/l/${survey.id}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-xl transition"
                  >
                    📤 Telegram
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${window.location.origin}/l/${survey.id}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    💚 WhatsApp
                  </a>

                  <button
                    onClick={() => navigate(`/answers/${survey.id}`)}
                    className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    📩 Javoblar
                  </button>

                  <button
                    onClick={() => handleDelete(survey.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition"
                  >
                    🗑️ O'chirish
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;