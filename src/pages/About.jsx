import { useState, useEffect } from "react";
import { Heart, Target, Users, Shield, Brain, Zap, ChevronDown, ChevronUp, CheckCircle, Globe, Lock, Smartphone } from "lucide-react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "Is this accurate compared to wearables?",
      answer: "While not as precise as medical devices, our webcam-based detection offers a reliable estimation under proper conditions. We achieve 85-95% accuracy in optimal lighting conditions.",
      icon: Target
    },
    {
      question: "Do I need to install anything?",
      answer: "Nope! It's fully browser-based using cutting-edge WebRTC and computer vision APIs. Just allow webcam access and you're ready to go.",
      icon: Globe
    },
    {
      question: "Is my video data stored or shared?",
      answer: "Absolutely not. All processing happens locally in your browser using client-side algorithms. We never save, store, or transmit your video data anywhere.",
      icon: Lock
    },
    {
      question: "Can I use this on mobile?",
      answer: "It works best on desktop or laptop devices with a front-facing webcam. Mobile support is available but may have reduced accuracy due to smaller cameras.",
      icon: Smartphone
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Health for Everyone",
      description: "Making vital health insights accessible to anyone with a webcam, removing barriers to personal health monitoring."
    },
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Leveraging computer vision and machine learning to detect subtle physiological changes in real-time."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Zero data collection, zero cloud processing. Your privacy is protected by design, not by policy."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative px-4 py-12 max-w-7xl mx-auto">

        <section className={`mb-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-2xl">
              <Heart className="w-12 h-12 text-white" fill="currentColor" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            About PulseGuard
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe health insights should be <span className="text-white font-semibold">accessible to everyone.</span> 
            <br />Our mission is to provide instant heart rate monitoring - no gadgets, no hassle, no compromise on privacy.
          </p>
        </section>

        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div key={idx} className="text-center group">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We harness the power of <span className="text-white font-semibold">real-time facial analysis</span> to detect 
                subtle color changes caused by blood flow beneath your skin.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our advanced algorithms process this data using computer vision and machine learning, 
                estimating your BPM with remarkable accuracy - all directly in your browser using your webcam feed.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Real-time computer vision processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Advanced signal processing algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Client-side machine learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Zero data transmission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know about our heart rate tracker</p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="pl-14 pt-2 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed mt-4">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Health-Conscious Users
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">85-95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pink-400 mb-2">0%</div>
                <div className="text-gray-300">Data Stored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">Browser-Based</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;