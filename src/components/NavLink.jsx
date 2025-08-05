import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ to, children, mobile = false }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `relative group transition-all duration-300 ${
        mobile
          ? `block py-3 px-4 text-lg font-medium rounded-xl transition-all duration-300 ${
              isActive
                ? "text-white bg-white/10 border-l-4 border-purple-400"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`
          : `font-medium ${
              isActive ? "text-white" : "text-white/80 hover:text-white"
            }`
      }`
    }
    onClick={() => mobile && typeof window !== "undefined" && window.customMobileMenuClose?.()}
  >
    {({ isActive }) => (
      <>
        {children}
        {!mobile && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        )}
      </>
    )}
  </RouterNavLink>
);

export default NavLink;