import { useState, useEffect } from "react";
import { Heart, Menu, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    window.customMobileMenuClose = () => setIsMobileOpen(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      delete window.customMobileMenuClose;
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
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
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/detection">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Start Now
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <div className="h-16"></div>
    </>
  );
};

export default Header;