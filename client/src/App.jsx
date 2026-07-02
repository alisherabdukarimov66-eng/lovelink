import { useRef, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.volume = 0.2;
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[9999] bg-white text-pink-600 px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {playing ? "⏸️ Pause" : "🎵 Play"}
      </button>

      <AppRoutes />
    </>
  );
}

export default App;