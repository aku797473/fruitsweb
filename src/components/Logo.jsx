import React from "react";
import Lottie from "lottie-react";
import logoAnimation from "../assets/animations/logo.json"; // correct path

export default function Logo() {
  return (
    <div className="w-12 h-12">
      <Lottie animationData={logoAnimation} loop={true} />
    </div>
  );
}
