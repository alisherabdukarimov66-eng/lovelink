function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        mt-8
        px-8
        py-4
        rounded-full
        bg-white
        text-pink-600
        font-bold
        text-lg
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
        active:scale-95
      "
    >
      {children}
    </button>
  );
}

export default PrimaryButton;