const Footer = () => {
  return (
    <footer className="w-full text-white text-center py-6 border-t border-red-800 px-4 sm:px-6 lg:px-10">
      <p className="text-sm sm:text-base font-mono tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-600 font-semibold">NoCheat_WZ</span> — All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;
