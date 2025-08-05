import { useEffect, useState } from "react";

export default function useSimulatedBPM() {
  const [bpm, setBPM] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBPM = Math.floor(Math.random() * 30) + 60;
      setBPM(newBPM);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return bpm;
}
