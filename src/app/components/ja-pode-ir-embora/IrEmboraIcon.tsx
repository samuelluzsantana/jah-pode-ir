"use client";

import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import useSound from "use-sound";
import clockAnimation from "../../assets/wired-outline-45-clock-time-hover-pinch.json";

type IrEmboraIconProps = {
  size?: number;
};

export default function IrEmboraIcon({ size = 80 }: IrEmboraIconProps) {
  const [play] = useSound("/audio/ta-na-hora-do-jair-ja-ir-embora.mp3", {
    volume: 0.7,
  });

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = () => {
    play();
    // Reproduz a animação quando clicado
    lottieRef.current?.play();
  };

  const handleMouseEnter = () => {
    // Inicia a animação no hover
    lottieRef.current?.play();
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className="cursor-pointer w-full h-full bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 hover:from-teal-500 hover:to-emerald-600 shadow-lg hover:shadow-xl"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={clockAnimation}
        loop={false}
        autoplay={false}
        style={{
          width: size,
          height: size,
          filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
        }}
      />
    </div>
  );
}
