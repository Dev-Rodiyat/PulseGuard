import { useState, useEffect } from 'react';
import { Heart, Camera, Zap, Shield, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: Camera,
            title: "No Devices Needed",
            description: "Just your webcam is enough. No smartwatches or chest straps required.",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            icon: Zap,
            title: "Real-time Analysis",
            description: "Get instant BPM readings and visual analytics right on your screen.",
            gradient: "from-purple-500 to-pink-400"
        },
        {
            icon: Shield,
            title: "Completely Free",
            description: "No signup or subscription required. Use it as much as you want.",
            gradient: "from-green-500 to-emerald-400"
        },
    ];

    const steps = [
        {
            step: "Allow Webcam Access",
            detail: "Grant camera permissions for heart rate detection"
        },
        {
            step: "Position Face Close to Camera",
            detail: "Ensure good lighting and proper positioning"
        },
        {
            step: "Start Detection & See Results",
            detail: "Watch real-time BPM analysis in action"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
            </div>

            <section className="relative min-h-screen flex items-center justify-center px-4">
                <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="mb-8 relative">
                        <div className="inline-block p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-2xl animate-pulse">
                            <Heart className="w-16 h-16 text-white" fill="currentColor" />
                        </div>
                        <div className="absolute inset-0 animate-ping">
                            <div className="inline-block p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-30">
                                <Heart className="w-16 h-16 text-transparent" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                        Your Heart Rate
                        <br />
                        <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                            In Real Time
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Revolutionary webcam-based heart rate monitoring.
                        <span className="text-white font-semibold"> No devices, no signup, no limits.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to='/detection'>
                            <button className="group bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 px-8 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 min-w-[200px]">
                                <Play className="w-5 h-5" />
                                Start Tracking
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link to='/about'>
                            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white py-4 px-8 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                                Learn How It Works
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent rounded-full"></div>
                </div>
            </section>

            <section className="relative py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Why Choose Our Tracker?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Experience the future of health monitoring with cutting-edge technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                                    <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {feature.description}
                                    </p>

                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-24 px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm"></div>

                <div className="relative max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                        Three simple steps to start monitoring your heart rate
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((stepItem, idx) => (
                            <div
                                key={idx}
                                className="relative group"
                            >
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent z-0"></div>
                                )}

                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 z-10">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl font-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-white">{stepItem.step}</h4>
                                    <p className="text-gray-400 leading-relaxed">{stepItem.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Ready to Begin?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Make sure you're in a well-lit space and let your webcam reveal the rhythm of your heart.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to='/detection'>
                            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                                <Heart className="w-6 h-6" fill="currentColor" />
                                View Instructions
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    );
};

export default Home;