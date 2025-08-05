import { useEffect, useRef, useState } from "react";

const useHeartRateDetector = (isDetecting) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [bpm, setBPM] = useState(null);
  const [greenSignal, setGreenSignal] = useState([]);

  const frameBuffer = useRef([]);

  useEffect(() => {
    if (!isDetecting) return;

    let animationId;

    const processFrame = () => {
      if (!videoRef.current || !canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });
      const width = 100;
      const height = 100;

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      ctx.drawImage(videoRef.current, 0, 0, width, height);
      const frame = ctx.getImageData(0, 0, width, height);
      const pixels = frame.data;

      let sum = 0;
      for (let i = 0; i < pixels.length; i += 4) {
        sum += pixels[i + 1];
      }

      const avgGreen = sum / (pixels.length / 4);
      const now = performance.now();

      frameBuffer.current.push({ t: now, g: avgGreen });
      setGreenSignal(frameBuffer.current.map(p => p.g));

      frameBuffer.current = frameBuffer.current.filter(p => now - p.t < 5000);

      const bufferLength = frameBuffer.current.length;
      const startTime = frameBuffer.current[0]?.t || now;
      const endTime = frameBuffer.current.at(-1)?.t || now;
      const duration = (endTime - startTime) / 1000;

      const signal = frameBuffer.current.map(p => p.g);
      const peaks = detectPeaks(signal);

      if (duration > 2 && peaks.length > 1) {
        const bpmEstimate = (peaks.length / duration) * 60;
        setBPM(Math.round(bpmEstimate));
      }

      animationId = requestAnimationFrame(processFrame);
    };

    animationId = requestAnimationFrame(processFrame);
    return () => cancelAnimationFrame(animationId);
  }, [isDetecting]);

return { bpm, videoRef, canvasRef, greenSignal };
};

function detectPeaks(data) {
  const peaks = [];
  for (let i = 1; i < data.length - 1; i++) {
    if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
}

export default useHeartRateDetector;
