import { Lightbulb, Play, X } from "lucide-react";

const Instructions = ({ setShowInstructions, dontShowAgain, setDontShowAgain, handleStart }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 h-screen overflow-y-auto">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => setShowInstructions(false)}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-xl transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Optimization Tips
          </h2>
          <p className="text-gray-400">Follow these guidelines for best results</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: "💡", text: "Sit in a well-lit area (natural light is best)" },
            { icon: "📏", text: "Keep your face 30–50cm from the webcam" },
            { icon: "🧘", text: "Stay still and avoid sudden movements" },
            { icon: "👓", text: "Remove glasses or face coverings" },
            { icon: "📱", text: "Close other apps using the webcam" },
            { icon: "⏱️", text: "Allow 3-5 seconds for calibration" },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <span className="text-2xl">{tip.icon}</span>
              <span className="text-gray-300 text-sm">{tip.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
            className="w-4 h-4 rounded accent-purple-500"
          />
          <span className="text-gray-300">Don't show this again</span>
        </div>
        <button
          onClick={handleStart}
          className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
        >
          <Play className="w-5 h-5" />
          Start Detection
        </button>
      </div>
    </div>
  );
};

export default Instructions;