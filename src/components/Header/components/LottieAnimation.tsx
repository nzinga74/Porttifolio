import Lottie from "react-lottie";
import React from "react";
import animationData from "../../../assets/moonwalk.json";
const LottieAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={450} />;
};
export default LottieAnimation;
