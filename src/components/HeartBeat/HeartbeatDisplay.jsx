const HeartbeatDisplay = ({ bpm }) => (
  <div className="text-center">
    <p className="text-3xl font-bold">{bpm} BPM</p>
    <p className="text-gray-500 text-sm">Simulated</p>
  </div>
);

export default HeartbeatDisplay;