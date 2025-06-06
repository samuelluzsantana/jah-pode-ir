import IrEmboraIcon from "./IrEmboraIcon";
import { RetroGrid } from "@/components/magicui/retro-grid"; // Caminho pode variar conforme seu setup
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface HomeProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: HomeProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[75vh] gap-8 animate-fade-in overflow-hidden">
      {/* RetroGrid como fundo ocupando a tela inteira */}
      <RetroGrid className="absolute inset-0 w-full h-full z-0 opacity-50" />

      <div className="relative z-10 w-[5em] h-[5em]">
        <IrEmboraIcon size={55} />
      </div>

      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Jah pode ir embora?
      </span>

      <div className="w-[65%]">
        <h1 className="relative z-10 text-4xl font-medium text-gray-800 text-center">
          <TextAnimate animation="slideUp" by="word" duration={0.9} delay={0.5}>
            Descubra se você já completou sua jornada de trabalho!
          </TextAnimate>
        </h1>
      </div>

      <InteractiveHoverButton
        onClick={onStart}
        className="relative z-10 flex cursor-pointer items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
      >
        Vamos lá
      </InteractiveHoverButton>
    </div>
  );
}

// https://magicui.design/docs/components/animated-list
// https://magicui.design/docs/components/animated-circular-progress-bar
// https://magicui.design/docs/components/meteors
