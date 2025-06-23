import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function BtnEffect({ title }) {
  const containerRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(
      topTextRef.current,
      {
        y: "-100%",
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );
    tl.to(
      bottomTextRef.current,
      {
        y: "-100%",
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    const container = containerRef.current;
    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      tl.kill();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className={`group relative inline-block overflow-hidden`}
    >
      <span ref={topTextRef} className="block">
        {title}
      </span>
      <span ref={bottomTextRef} className="absolute left-0 top-full block">
        {title}
      </span>
    </span>
  );
}
