// src/components/Loader.jsx
import gifLoader from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="w-36 h-36 sm:w-44 sm:h-44 border-4 border-red-600 rounded-full flex items-center justify-center animate-ping-slow shadow-[0_0_30px_5px_rgba(220,38,38,0.5)] transition-all duration-700">
        <img
          src={gifLoader}
          alt="Loading..."
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain animate-grow"
        />
      </div>
    </div>
  );
};

export default Loader;
