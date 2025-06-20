/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Portfollio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = (
    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
      {/* 🧠 Text Content */}
      <div className="space-y-3 sm:space-y-4 text-left text-[10px] sm:text-sm md:text-base leading-relaxed">
        <h2 className="text-[18px] sm:text-2xl md:text-3xl font-bold text-red-600 font-retro tracking-wider text-center lg:text-left">
          💼 Portfolio
        </h2>

        <p className="text-center lg:text-left">
          I'm <span className="text-red-500 font-semibold">Ahmed</span>, a full-stack developer, Warzone streamer, and cybersecurity student.
          Here's a glimpse of some work I've built using the MERN stack and other tools.
        </p>

        <ul className="space-y-2 list-disc pl-5">
          <li>
            <span className="text-red-500 font-semibold">E-Commerce Auction App:</span> Real-time bidding & payments (Compass IT).
          </li>
          <li>
            <span className="text-red-500 font-semibold">ESports Landing Page:</span> HTML/CSS/JS site for player recruitment.
          </li>
          <li>
            <span className="text-red-500 font-semibold">CyberVault:</span> Secure file storage with user authentication.
          </li>
          <li>
            <span className="text-red-500 font-semibold">Streamify Dashboard:</span> Admin panel with live chat + video preview.
          </li>
        </ul>

        <p className="text-[10px] sm:text-xs sm:pt-1 text-center lg:text-left">
          🔗 Want to see the code? Check out my GitHub:
          <a
            href="https://github.com/akrouty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline ml-1"
          >
            github.com/akrouty
          </a>
        </p>
      </div>

      {/* 📄 PDF Viewer or Mobile Message */}
      <div className="w-full h-[300px] sm:h-[420px] md:h-[450px] rounded-md overflow-hidden border-2 border-red-600 shadow-[0_0_20px_4px_rgba(220,38,38,0.5)] bg-black flex items-center justify-center text-white text-[10px] sm:text-sm">
        {isMobile ? (
          <div className="text-center px-4">
            ⚠️ PDF preview isn't supported on this screen.<br />
            👉{" "}
            <a
              href="/cv.pdf"
              className="underline text-red-400 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tap to open CV in new tab
            </a>
          </div>
        ) : (
          <embed
            src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
            type="application/pdf"
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );

  return (
    <section
      id="portfolio"
      className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8 sm:py-16 text-white scroll-mt-20"
    >
      {isMobile ? (
        content
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          {content}
        </motion.div>
      )}
    </section>
  );
};

export default Portfollio;
