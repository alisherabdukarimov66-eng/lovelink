function Stats() {
  const stats = [
    {
      number: "1000+",
      title: "LoveLinks",
      icon: "❤️",
    },
    {
      number: "5000+",
      title: "Javoblar",
      icon: "💌",
    },
    {
      number: "100%",
      title: "Anonymous",
      icon: "🔒",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
        >
          <div className="text-5xl mb-4">
            {item.icon}
          </div>

          <h2 className="text-white text-4xl font-black">
            {item.number}
          </h2>

          <p className="text-pink-100 mt-2 text-lg">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;