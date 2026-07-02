import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleAuth() {
    console.log("Button bosildi");

    if (!email || !password) {
      alert("Email va parolni kiriting.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          alert(error.message);
          return;
        }

        alert("Muvaffaqiyatli kirdingiz!");
        navigate("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          alert(error.message);
          return;
        }

        alert(
          "Hisob yaratildi. Email tasdiqlash kerak bo'lsa emailingizni tekshiring."
        );

        setIsLogin(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-2">
          ❤️ LoveLink
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {isLogin
            ? "Hisobingizga kiring"
            : "Yangi hisob yarating"}
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4 outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl p-4 mb-6 outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          onClick={handleAuth}
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-pink-300 text-white py-4 rounded-xl font-bold transition"
        >
          {loading
            ? "Kuting..."
            : isLogin
            ? "Kirish"
            : "Ro'yxatdan o'tish"}
        </button>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 w-full text-pink-600 font-semibold"
        >
          {isLogin
            ? "Hisobingiz yo'qmi? Ro'yxatdan o'ting"
            : "Hisobingiz bormi? Kirish"}
        </button>

      </div>
    </div>
  );
}

export default Login;
