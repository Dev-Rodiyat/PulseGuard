import { useEffect, useState } from "react";
import { Heart, Play, Pause, Activity, Camera, TrendingUp, X, Lightbulb } from "lucide-react";
import useHeartRateDetector from "../hooks/useHeartRateDetector";
import WebcamFeed from "../components/HeartBeat/WebcamFeed";
import GreenSignalChart from "../components/HeartBeat/GreenSignalChart";
import BPMChart from "../components/HeartBeat/BPMChart";
import Instructions from "../components/Instructions";

function Detection() {
    const [isDetecting, setIsDetecting] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const { bpm, videoRef, canvasRef, greenSignal } = useHeartRateDetector(isDetecting);
    const [bpmHistory, setBpmHistory] = useState([]);
    const [isCalibrating, setIsCalibrating] = useState(false);

    useEffect(() => {
        if (!isDetecting) return;
        setIsCalibrating(true);
        const calibrationTimer = setTimeout(() => {
            setIsCalibrating(false);
        }, 3000);
        return () => clearTimeout(calibrationTimer);
    }, [isDetecting]);

    const toggleDetection = () => {
        setIsDetecting((prev) => !prev);
        if (!isDetecting) {
            setBpmHistory([]);
        }
    };

    useEffect(() => {
        const skipInstructions = localStorage.getItem("skipInstructions") === "true";
        if (skipInstructions) {
            setShowInstructions(false);
            setIsDetecting(true);
        }
    }, []);

    const handleStart = () => {
        if (dontShowAgain) {
            localStorage.setItem("skipInstructions", "true");
        }
        setShowInstructions(false);
        setIsDetecting(true);
    };

    useEffect(() => {
        if (!bpm || !isDetecting) return;
        setBpmHistory((prev) => {
            const time = new Date().toLocaleTimeString();
            const updated = [...prev, { time, bpm }];
            return updated.length > 30 ? updated.slice(1) : updated;
        });
    }, [bpm, isDetecting]);

    const getHeartRateStatus = (bpm) => {
        if (!bpm) return { status: "Detecting", color: "text-gray-400", bg: "bg-gray-500" };
        if (bpm < 60) return { status: "Low", color: "text-blue-400", bg: "bg-blue-500" };
        if (bpm > 100) return { status: "High", color: "text-red-400", bg: "bg-red-500" };
        return { status: "Normal", color: "text-green-400", bg: "bg-green-500" };
    };

    const heartRateStatus = getHeartRateStatus(bpm);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
            </div>

            <div className="relative p-4 pt-24">

                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="relative">
                            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-2xl">
                                <Heart className="w-8 h-8 text-white" fill="currentColor" />
                            </div>
                            <div className="absolute inset-0 animate-ping opacity-30">
                                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                                    <Heart className="w-8 h-8 text-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Live Heart Rate Detection
                    </h1>
                    <p className="text-gray-400 text-lg">Real-time cardiovascular monitoring using computer vision</p>
                </div>

                {showInstructions && (<Instructions handleStart={handleStart} setShowInstructions={setShowInstructions} dontShowAgain={dontShowAgain} setDontShowAgain={setDontShowAgain} />)}

                <div className={`transition-all duration-500 ${showInstructions ? "blur-sm pointer-events-none" : ""}`}>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                            <div className={`w-2 h-2 ${heartRateStatus.bg} rounded-full animate-pulse`}></div>
                            <span className="text-sm font-semibold">{heartRateStatus.status}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                            <Camera className="w-4 h-4 text-green-400" />
                            <span className="text-sm">Webcam Active</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                            <Activity className="w-4 h-4 text-blue-400" />
                            <span className="text-sm">{bpmHistory.length} Readings</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">Camera Feed</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-400">Live</span>
                                </div>
                            </div>
                            <WebcamFeed videoRef={videoRef} canvasRef={canvasRef} />
                        </div>

                        <div className="space-y-6">

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
                                <div className="mb-4">
                                    <div className="inline-block p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-4">
                                        <Heart className="w-12 h-12 text-white" fill="currentColor" />
                                    </div>
                                </div>
                                {isCalibrating ? (
                                    <div className="space-y-4">
                                        <div className="text-6xl font-black text-gray-400">--</div>
                                        <p className="text-xl text-gray-400">Calibrating...</p>
                                        <div className="w-32 h-2 bg-white/10 rounded-full mx-auto overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                ) : bpm ? (
                                    <div className="space-y-2">
                                        <div className={`text-6xl font-black ${heartRateStatus.color}`}>{bpm}</div>
                                        <p className="text-xl text-gray-300">BPM</p>
                                        <p className={`text-lg font-semibold ${heartRateStatus.color}`}>
                                            {heartRateStatus.status} Range
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <div className="text-6xl font-black text-gray-400">--</div>
                                        <p className="text-xl text-gray-400">Detecting...</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                                <h3 className="text-lg font-bold mb-4 text-white">Controls</h3>
                                <div className="flex gap-4">
                                    <button
                                        onClick={toggleDetection}
                                        className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 ${isDetecting
                                            ? "bg-red-600 hover:bg-red-700 text-white"
                                            : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                                            }`}
                                    >
                                        {isDetecting ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                        {isDetecting ? "Stop Detection" : "Start Detection"}
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center">
                                <h3 className="text-lg font-bold mb-4 text-white">Heart Animation</h3>
                                <div className="relative">
                                    <Heart
                                        className={`w-20 h-20 mx-auto text-red-500 ${bpm ? "animate-pulse" : ""}`}
                                        fill="currentColor"
                                        style={{
                                            animationDuration: bpm ? `${60000 / bpm}ms` : "1s",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-8 max-w-7xl mx-auto">

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">Signal Analysis</h3>
                                <div className="flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-green-400" />
                                    <span className="text-sm text-gray-400">Real-time</span>
                                </div>
                            </div>
                            <GreenSignalChart data={greenSignal} />
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">BPM History</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span className="text-sm text-gray-400">{bpmHistory.length} readings</span>
                                </div>
                            </div>
                            <BPMChart data={bpmHistory} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detection;