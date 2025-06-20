import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaKickstarterK } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 text-red-600"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
          <p className="text-[10px] sm:text-base md:text-lg text-white">
            Welcome to <span className="font-bold text-red-700">NoCheat_WZ</span>, Your Safe Gaming Haven
          </p>

          <p className="text-[10px] sm:text-base md:text-lg leading-relaxed text-white">
            <Typewriter
              words={[
                isMobile
                  ? "⚙️ I'm building this as a safe place for gamers. Join the team, aim high, and play fair."
                  : `⚙️ I'm building this as a safe place for gamers. Join the team, aim high, and play fair.`,
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={isMobile ? 30 : 45}
              deleteSpeed={isMobile ? 15 : 25}
              delaySpeed={1500}
            />
          </p>

          <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
            <a
              href="https://kick.com/nocheat-wz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-red-600 text-white rounded hover:scale-105 hover:bg-red-700 transition-all duration-300 text-[10px] sm:text-base"
            >
              <FaKickstarterK /> Kick
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61575688432309"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-white text-black rounded hover:scale-105 hover:bg-gray-300 transition-all duration-300 text-[10px] sm:text-base"
            >
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>

        {/* Right Side — Logo */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="NoCheat_WZ Logo"
            className={`w-40 sm:w-52 md:w-72 h-auto rounded-full border-4 border-red-600 shadow-xl shadow-red-700 ${
              isMobile ? "animate-none" : "animate-pulse"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
