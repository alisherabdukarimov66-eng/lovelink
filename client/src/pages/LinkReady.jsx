import { useEffect, useMemo, useRef } from "react";
import { useSurvey } from "../context/SurveyContext";
import { saveSurvey } from "../utils/supabaseStorage";

function LinkReady() {
  const { survey } = useSurvey();

  const saved = useRef(false);

  const code = useMemo(() => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }, []);

  useEffect(() => {
    if (saved.current) return;

    saved.current = true;

    async function save() {
      const success = await saveSurvey({
        id: code,
        ...survey,
      });

      console.log("Supabase save:", success);
    }

    save();
  }, [code, survey]);

  const link = `${window.location.origin}/l/${code}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
    alert("Link nusxalandi!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center">
          🎉 So'rovnoma tayyor!
        </h1>

        <p className="text-center mt-4 text-gray-600">
          Linkni nusxalab yuboring.
        </p>

        <div className="bg-gray-100 rounded-xl p-4 mt-8 break-all">
          {link}
        </div>

        <button
          onClick={copyLink}
          className="w-full mt-6 bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition"
        >
          📋 Linkni nusxalash
        </button>

        <div className="mt-8">
          <h2 className="font-bold mb-3">
            Siz yaratgan ma'lumotlar:
          </h2>

          <p>Turi: {survey.type}</p>
          <p>Kim uchun: {survey.recipient}</p>
          <p>Mavzu: {survey.theme}</p>
          <p>Savollar: {survey.questions.length}</p>
        </div>
      </div>
    </div>
  );
}

export default LinkReady;