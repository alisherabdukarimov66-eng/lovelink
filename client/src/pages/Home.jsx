import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-700 relative">

      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <Navbar />

        <Hero />

        <Stats />

        <Features />

        <footer className="text-center py-12 text-pink-100 border-t border-white/20 mt-10">
          <p className="text-lg">
            Made with ❤️ by LoveLink
          </p>

          <p className="mt-2 text-sm opacity-80">
            © 2026 LoveLink. All rights reserved.
          </p>
        </footer>

      </div>

    </div>
  );
}

export default Home;