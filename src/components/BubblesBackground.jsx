import { useEffect, useRef, useState } from "react";

const BubblesBackground = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbles = [];
    const bubbleCount = 60;

    for (let i = 0; i < bubbleCount; i++) {
      const bubbleWrapper = document.createElement("div");

      const size = Math.random() * 20 + 10;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const emoji = [
        "🔫", "💣", "🧨", "💥", "💀", "☠️", "🗡️",
        "🎯", "🎖️", "🚁", "🛩️", "🧰", "🔥", "📡"
      ][Math.floor(Math.random() * 14)];

      bubbleWrapper.innerHTML = `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          font-size: ${size - 6}px;
          color: white;
          mix-blend-mode: screen;
        ">${emoji}</div>`;

      Object.assign(bubbleWrapper.style, {
        position: "absolute",
        top: `${startY}px`,
        left: `${startX}px`,
        pointerEvents: "none",
      });

      container.appendChild(bubbleWrapper);

      bubbles.push({
        el: bubbleWrapper,
        x: startX,
        y: startY,
        speedX: isMobile ? 0 : (Math.random() - 0.5) * 1.2,
        speedY: isMobile ? 0 : (Math.random() - 0.5) * 1.2,
      });
    }

    let mouseX = 0.5;
    let mouseY = 0.5;

    const handleMouseMove = (e) => {
      if (!isMobile) {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!isMobile) {
        bubbles.forEach((bubble) => {
          bubble.x += bubble.speedX + mouseX * 0.75;
          bubble.y += bubble.speedY + mouseY * 0.75;

          if (bubble.x < 0) bubble.x = window.innerWidth;
          if (bubble.x > window.innerWidth) bubble.x = 0;
          if (bubble.y < 0) bubble.y = window.innerHeight;
          if (bubble.y > window.innerHeight) bubble.y = 0;

          bubble.el.style.left = `${bubble.x}px`;
          bubble.el.style.top = `${bubble.y}px`;
        });
        requestAnimationFrame(animate);
      }
    };

    if (!isMobile) animate(); // ✅ Only animate on non-mobile

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      bubbles.forEach((bubble) => container.removeChild(bubble.el));
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      style={{ overflow: "hidden", backgroundColor: "#000000" }}
    />
  );
};

export default BubblesBackground;
