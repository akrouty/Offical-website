import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaVideo,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "stream", label: "Stream", icon: <FaVideo /> },
    { id: "portfolio", label: "Portfolio", icon: <FaFolderOpen /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4 border-b border-red-700">
      {/* Logo */}
      <div className="text-white text-xs sm:text-base md:text-xl font-bold font-retro tracking-wider whitespace-nowrap">
  NoCheat_<span className="text-red-600">WZ</span>
</div>



      {/* Hamburger icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-red-600 text-xl sm:text-2xl lg:hidden"
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-4 md:space-x-6 text-white text-sm md:text-base font-mono">
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth
            spy
            offset={-80}
            duration={500}
            activeClass="text-white font-bold drop-shadow-[0_0_2px_red]"
            className="flex items-center gap-1 cursor-pointer hover:text-red-900 hover:drop-shadow-[0_0_5px_red] transition-all"
          >
            {item.icon} {item.label}
          </ScrollLink>
        ))}
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/60"
          />

          {/* Sidebar */}
          {/* Sidebar */}
<div className="fixed top-0 right-0 h-full w-[200px] xs:w-[260px] bg-black z-50 p-6 flex flex-col space-y-5 shadow-lg border-l border-red-700">
  {navItems.map((item) => (
    <ScrollLink
      key={item.id}
      to={item.id}
      smooth
      spy
      offset={-80}
      duration={500}
      onClick={() => setIsOpen(false)}
      activeClass="text-red-500 font-bold"
      className="text-white flex items-center gap-2 text-sm xs:text-base sm:text-[15px] cursor-pointer hover:text-red-400 transition-all"
    >
      {item.icon} {item.label}
    </ScrollLink>
  ))}
</div>

        </>
      )}
    </header>
  );
};

export default Navbar;
