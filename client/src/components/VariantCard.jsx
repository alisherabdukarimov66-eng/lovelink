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
        group relative cursor-pointer select-none
        rounded-3xl p-7
        backdrop-blur-2xl
        border
        transition-all duration-300 ease-out

        hover:scale-[1.06]
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]

        active:scale-95
        ${
          selected
            ? "bg-white text-pink-600 border-white shadow-2xl scale-[1.06]"
            : "bg-white/10 text-white border-white/20 hover:bg-white/20"
        }
      `}
    >
      {/* glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/10 to-white/5 blur-xl" />

      {/* icon */}
      <div
        className={`
          text-5xl transition-transform duration-300
          group-hover:scale-110 group-hover:rotate-6
        `}
      >
        {icon}
      </div>

      {/* title */}
      <h2 className="mt-5 text-2xl font-extrabold tracking-tight">
        {title}
      </h2>

      {/* description */}
      <p className="mt-2 text-sm opacity-90 leading-relaxed">
        {description}
      </p>

      {/* bottom indicator */}
      <div
        className={`
          mt-6 h-[3px] w-12 rounded-full transition-all duration-300
          ${
            selected
              ? "bg-pink-500 w-20"
              : "bg-white/30 group-hover:w-16 group-hover:bg-white/60"
          }
        `}
      />
    </div>
  );
}

export default VariantCard;