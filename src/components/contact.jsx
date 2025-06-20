/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Loader from "./Loader";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_u473tdb",
        "template_v42h7hl",
        formRef.current,
        "8qBkFLCQV4VkyWouO"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatusMessage("❌ Something went wrong. Please try again later.");
          console.error(error);
        }
      )
      .finally(() => setIsSending(false));
  };

  const content = (
    <div className="max-w-3xl w-full text-center space-y-6 text-[10px] sm:text-sm md:text-base">
      <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-red-600 font-retro tracking-wider">
        📬 Contact Me
      </h2>

      <p>
        Want to collaborate, hire, or just say hi? You can reach me on any of these platforms — I'm always open to connect with gamers and developers around the world. 🌍
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-4 text-lg sm:text-2xl">
        <a href="https://discord.gg/QH9sGSgQ" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:drop-shadow-[0_0_8px_red] transition-all hover:scale-110"><FaDiscord /></a>
        <a href="https://www.facebook.com/profile.php?id=61575688432309" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:drop-shadow-[0_0_8px_red] transition-all hover:scale-110"><FaFacebook /></a>
        <a href="https://www.instagram.com/no.cheat_wz/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:drop-shadow-[0_0_8px_red] transition-all hover:scale-110"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@no.cheat.tn" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:drop-shadow-[0_0_8px_red] transition-all hover:scale-110"><FaTiktok /></a>
      </div>

      {/* Contact Form */}
      <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4 w-full text-left">
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-white">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            required
            className="w-full px-3 py-2 text-[10px] sm:text-sm text-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-white">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            required
            className="w-full px-3 py-2 text-[10px] sm:text-sm text-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-white">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full px-3 py-2 text-[10px] sm:text-sm text-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-red-600 text-white px-4 py-2 text-[11px] sm:text-sm rounded hover:bg-red-700 transition-all duration-300"
        >
          Send Message
        </button>
        {statusMessage && <p className="pt-2 text-green-400 text-xs sm:text-sm">{statusMessage}</p>}
      </form>
    </div>
  );

  return (
    <section
      id="contact"
      className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8 sm:py-16 text-white scroll-mt-20"
    >
      {isSending && <Loader />}
      {isMobile ? (
        content
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
        >
          {content}
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
