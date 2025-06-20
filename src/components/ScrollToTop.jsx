import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Loader from "./Loader"; // Assuming you have a Loader component

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate loader delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loader screen
  if (isLoading) {
  return <Loader />;
}

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className=" cursor-pointer fixed bottom-2 right-2 z-[9999] p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all "
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
