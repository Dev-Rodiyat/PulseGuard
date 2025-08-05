const Controls = ({ isDetecting, toggleDetection, disabled }) => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <button
        onClick={toggleDetection}
        disabled={disabled}
        className={`px-6 py-2 rounded text-white font-semibold ${isDetecting ? "bg-red-600" : "bg-green-600"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isDetecting ? "Stop" : "Start"}
      </button>
    </div>
  );
};
export default Controls;