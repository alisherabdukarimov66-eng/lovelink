import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import Logo from "../components/Logo";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
  async function testConnection() {
    const { data, error } = await supabase
      .from("surveys")
      .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
  }

  testConnection();
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-10 text-center shadow-2xl">
        <Logo />

        <PrimaryButton onClick={() => navigate("/create")}>
          💌 Boshlash
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Home;