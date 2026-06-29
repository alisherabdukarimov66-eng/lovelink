function VariantCard({
  icon,
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-3xl
        border
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
        
        ${
          selected
            ? "bg-white text-pink-600 border-white shadow-2xl scale-105"
            : "bg-white/15 text-white border-white/20 hover:bg-white/25"
        }
      `}
    >
      <div className="text-5xl">{icon}</div>

      <h2 className="mt-5 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 opacity-90">
        {description}
      </p>
    </div>
  );
}

export default VariantCard;