function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;

  return (
    <div className="mb-10">
      <div className="flex justify-between text-white mb-2">
        <span>Bosqich {step}</span>
        <span>{step}/{total}</span>
      </div>

      <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;