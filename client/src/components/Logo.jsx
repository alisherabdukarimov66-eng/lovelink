function Logo() {
  return (
    <div className="text-center">
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
        <span className="text-pink-300">❤️</span>{" "}
        <span className="bg-gradient-to-r from-pink-200 via-rose-100 to-purple-200 bg-clip-text text-transparent">
          LoveLink
        </span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-pink-100">
        Bir havola, mingta his.
      </p>
    </div>
  );
}

export default Logo;