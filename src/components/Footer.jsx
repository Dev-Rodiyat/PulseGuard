import { Heart, Github, Twitter, Mail, Shield, Zap, Users } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const quickLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#" }
  ];

  const features = [
    { icon: Shield, text: "100% Private" },
    { icon: Zap, text: "Real-time Detection" },
    { icon: Users, text: "No Registration" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div className="absolute inset-0 animate-ping opacity-30">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
                    <Heart className="w-6 h-6 text-transparent" />
                  </div>
                </div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PulseGuard
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Democratizing health monitoring through advanced computer vision. 
              Monitor your heart rate instantly with just your webcam.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 mb-6">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                    <IconComponent className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 group"
                    aria-label={social.label}
                    onClick={(e) => e.preventDefault()}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get notified about new features and updates.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-r-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-500">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PulseGuard. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                All systems operational
              </span>
              <span>Made with ❤️ for health</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;