/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
   <section
  id="about"
  ref={sectionRef}
  className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-6 sm:py-16 lg:py-20 text-white scroll-mt-14 sm:scroll-mt-20 pb-10"
>
      <motion.div
        className="max-w-4xl w-full space-y-4 sm:space-y-6 text-center lg:text-left text-[10px] sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, x: 100 }}
        animate={visible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-red-600 font-retro tracking-wider">
          🎮 About Me
        </h2>

        <p>
          I’m <span className="text-red-500 font-bold">Ahmed</span>, also known as{" "}
          <span className="text-red-500 font-bold">NoCheat_WZ</span> — a dedicated{" "}
          <span className="text-red-500">Call of Duty: Warzone</span> soldier and content creator.
        </p>

        <p>
          As a <span className="text-red-500">streamer</span> and proud{" "}
          <span className="text-red-500">keyboard & mouse warrior</span>, I believe in playing fair,
          clean, and smart — no cheats, no hacks. Just skill. Just passion. Just honor. 💪
        </p>

        <p>
          I’m also a <span className="text-red-500">cybersecurity master's student</span> on my path
          to becoming a software engineer, building real stuff and defending real systems. 🛡️
        </p>

        <p>
          If you love gaming with integrity, you're in the right place.{" "}
          <span className="text-red-500 font-semibold">Follow</span>,{" "}
          <span className="text-red-500 font-semibold">subscribe</span>, and{" "}
          <span className="text-red-500 font-semibold">join the community</span> — let’s rise
          together, no cheat style. 🚀
        </p>
      </motion.div>
    </section>
  );
};

export default About;
