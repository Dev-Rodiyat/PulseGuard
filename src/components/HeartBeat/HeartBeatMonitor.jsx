import React, { useEffect, useRef, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function HeartBeatMonitor() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [bpm, setBpm] = useState(null);
  const [buffer, setBuffer] = useState([]);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("heartTheme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("heartTheme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });

    const interval = setInterval(() => {
      if (!canvasRef.current || !videoRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, 100, 100);
      const frame = ctx.getImageData(0, 0, 100, 100);
      const green = averageGreen(frame.data);
      const smoothed = smoothSignal([...buffer, green]);
      setBuffer(smoothed.slice(-100));
      setHistory(prev => [...prev.slice(-500), { time: Date.now(), value: green }]);
    }, 100);

    return () => clearInterval(interval);
  }, [buffer]);

  useEffect(() => {
    if (buffer.length < 20) return;
    const peaks = detectPeaks(buffer);
    const seconds = (buffer.length * 0.1);
    const rate = (peaks.length / seconds) * 60;
    setBpm(Math.round(rate));
  }, [buffer]);

  const downloadCSV = () => {
    const csvContent = ["time,value", ...history.map(d => `${d.time},${d.value}`)].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "heartbeat_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Heartbeat Monitor</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <video ref={videoRef} autoPlay className="w-48 h-36 rounded shadow" />
      <canvas ref={canvasRef} width="100" height="100" className="hidden" />
      <div className="text-lg font-mono text-rose-600 dark:text-rose-400">
        {bpm ? `Estimated BPM: ${bpm}` : "Measuring..."}
      </div>

      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history.map((d, i) => ({ name: i, value: d.value }))}>
            <XAxis dataKey="name" hide />
            <YAxis domain={[0, 255]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#ef4444" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={downloadCSV}
        className="mt-2 text-sm bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Export CSV
      </button>
    </div>
  );
}

function averageGreen(data) {
  let sum = 0, count = 0;
  for (let i = 0; i < data.length; i += 4) {
    sum += data[i + 1];
    count++;
  }
  return sum / count;
}

function smoothSignal(data, windowSize = 5) {
  if (data.length < windowSize) return data;
  const smoothed = [];
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - Math.floor(windowSize / 2));
    const end = Math.min(data.length, i + Math.ceil(windowSize / 2));
    const avg = data.slice(start, end).reduce((a, b) => a + b, 0) / (end - start);
    smoothed.push(avg);
  }
  return smoothed;
}

function detectPeaks(data) {
  const threshold = 1.5;
  const avg = average(data);
  const peaks = [];
  for (let i = 1; i < data.length - 1; i++) {
    if (data[i] > data[i - 1] && data[i] > data[i + 1] && data[i] > avg + threshold) {
      peaks.push(i);
    }
  }
  return peaks;
}

function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}