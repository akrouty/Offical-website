/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaKickstarterK, FaUserPlus } from "react-icons/fa6";

const Stream = () => {
  return (
    <section
      id="stream"
      className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 pb-8 sm:pb-20 text-white scroll-mt-14 sm:scroll-mt-20"
    >
      <motion.div
        className="max-w-5xl w-full text-center space-y-5 sm:space-y-8 mt-[-10px] sm:mt-[-40px]"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[18px] sm:text-3xl md:text-4xl font-bold text-red-600 font-retro tracking-wider">
          🎥 Live Stream
        </h2>

        <p className="text-[10px] sm:text-base md:text-lg text-white px-2 sm:px-8 leading-relaxed">
          Catch me live on{" "}
          <a
            href="https://kick.com/nocheat-wz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 font-semibold inline-flex items-center gap-1 hover:underline"
          >
            <FaKickstarterK className="text-green-500" />
            Kick
          </a>{" "}
          — join the squad,{" "}
          <a
            href="https://kick.com/nocheat-wz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-semibold inline-flex items-center gap-1 hover:underline"
          >
            <FaUserPlus className="text-red-500" />
            follow
          </a>
          , and watch how real Warzone is played. No cheats, just pure skill. 🔥
        </p>

        <div className=" h-[55vh] aspect-video w-full max-w-4xl mx-auto border-4 border-red-600 rounded-lg shadow-[0_0_20px_4px_rgba(220,38,38,0.7)] overflow-hidden">
          <iframe
            src="https://player.kick.com/nocheat-wz?autoplay=false&muted=true"
            allowFullScreen
            allow="autoplay"
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Stream;
