import { Heart, X, Zap } from "lucide-react";
import NavLink from "./NavLink";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
    <div className={`absolute top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
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
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              PulseGuard
            </span>
          </div>
          <button onClick={onClose} className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2 mb-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} mobile>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-4">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Start Detection
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;