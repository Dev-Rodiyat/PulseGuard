const HeartbeatAnimation = ({ bpm }) => {
  const beatDuration = 60 / bpm;

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-24 h-24 bg-red-500 rounded-full"
        style={{
          animation: `heartbeat ${beatDuration}s infinite ease-in-out`,
        }}
      />
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeartbeatAnimation;