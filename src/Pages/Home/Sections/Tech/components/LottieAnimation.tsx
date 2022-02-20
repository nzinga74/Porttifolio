import Lottie from "react-lottie";
import React from "react";
import animationData from "../../../../../assets/astrogrammer.json";
const LottieAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={450} height={450} />;
};
export default LottieAnimation;
