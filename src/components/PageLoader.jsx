import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageLoader({ onFinish }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onFinish(),
    });

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(barRef.current, {
        width: "0%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        delay: 0.2,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-red-500 via-orange-400 via-yellow-400 to-green-400 flex flex-col items-center justify-center"
    >
      {/* Brand */}
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-bold text-white tracking-wide mb-8"
      >
        🍎 FruitsHub
      </h1>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-white/30 rounded overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-white rounded"
          style={{ width: "100%" }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-white text-lg animate-pulse">
        Loading fresh fruits...
      </p>
    </div>
  );
}
