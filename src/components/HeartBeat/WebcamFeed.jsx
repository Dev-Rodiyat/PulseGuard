import { useEffect } from "react";

const WebcamFeed = ({ videoRef, canvasRef }) => {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Webcam access error:", err);
      });
  }, [videoRef]);

  return (
    <div className="relative w-full">
      <video ref={videoRef} autoPlay playsInline className="rounded shadow w-full" />
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default WebcamFeed;