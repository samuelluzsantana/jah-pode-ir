import { UserType } from "@/app/types";
import { timeUtils } from "@/app/utils/timeUtils";
import { CheckCircle, XCircle } from "lucide-react";
import { StepCard } from "../StepCard";
import { Happyemoji, Timer1 } from "iconsax-react";
import { Confetti, ConfettiRef } from "@/components/magicui/confetti";
import { useRef } from "react";
import useSound from "use-sound";
import { useEffect } from "react";

// Step 4: Resultado
const ResultStep: React.FC<{
  userType: UserType;
  entryTime: string;
  breakMinutes: number;
  onReset: () => void;
}> = ({ userType, entryTime, breakMinutes, onReset }) => {
  const confettiRef = useRef<ConfettiRef>(null);

  const [playAcabou] = useSound("/audio/acabou.mp3", { volume: 0.75 });
  const [playAindaNao] = useSound("/audio/ainda-nao.mp3", { volume: 0.75 });
  const [playSextaFeira] = useSound("/audio/sexta.mp3", { volume: 1 });

  const workHours = userType === "estagiario" ? 6 * 60 : 8 * 60;
  const endTime = timeUtils.addMinutes(entryTime, workHours + breakMinutes);
  const canLeave = timeUtils.isTimeReached(endTime);
  const timeDiff = timeUtils.getTimeDifference(endTime);

  const isFriday = timeUtils.isFriday();

  useEffect(() => {
    if (canLeave && !isFriday) {
      playAcabou();
    }

    if (canLeave && isFriday) {
      playSextaFeira();
    }

    if (!canLeave) {
      playAindaNao();
    }
  }, [canLeave, isFriday, playAcabou, playAindaNao, playSextaFeira]);

  if (userType === "pj") {
    return (
      <StepCard className="animate-fade-in text-center">
        <div className="flex flex-col items-center gap-4">
          <Happyemoji
            size={64}
            variant="Bold"
            className="mx-auto text-purple-500"
          />
          <h2 className="text-3xl font-bold text-purple-700 mb-2">
            Liberdade total! 😎
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Como PJ, você não tem horário fixo...
            <br />
            Mas não se esqueça: <b>responsabilidade é tudo!</b>
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg border border-purple-200 mb-2">
            <iframe
              width="320"
              height="180"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
              title="Never Gonna Give You Up"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-purple-800 font-medium">
            <Timer1 className="inline mr-2 align-middle" size={20} />
            Você foi <b>Rickrolled</b>! Aproveite sua flexibilidade! 😂
          </div>
          <button
            onClick={onReset}
            className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Tentar outro contrato
          </button>
        </div>
      </StepCard>
    );
  }

  return (
    <StepCard className="animate-fade-in text-center">
      {canLeave ? (
        <>
          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
            onMouseEnter={() => {
              confettiRef.current?.fire({});
            }}
          />
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-3xl font-bold text-emerald-600 mb-4 flex items-center justify-center gap-3">
            <CheckCircle className="w-10 h-10" />
            Já pode ir embora!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Você completou sua jornada às{" "}
            <span className="font-bold text-emerald-600">{endTime}</span>
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 mb-8">
            <p className="text-emerald-800 font-semibold text-lg">
              🎊 Parabéns! Você cumpriu suas {workHours / 60} horas de trabalho!
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="text-8xl mb-6">😢</div>
          <h2 className="text-3xl font-bold text-amber-600 mb-4 flex items-center justify-center gap-3">
            <XCircle className="w-10 h-10" />
            Ainda não!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Você poderá sair às{" "}
            <span className="font-bold text-amber-600">{endTime}</span>
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 mb-8">
            <p className="text-amber-800 font-semibold text-lg">
              ⏰ Faltam {Math.floor(timeDiff / 60)}h {timeDiff % 60}min para o
              fim do expediente
            </p>
          </div>
        </>
      )}

      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 mb-8 text-left">
        <h3 className="font-bold text-gray-800 mb-4 text-center text-lg">
          📋 Resumo da Jornada
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">🕐 Entrada:</span>
            <span className="font-semibold text-gray-800">{entryTime}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">👤 Tipo:</span>
            <span className="font-semibold text-gray-800">
              {userType === "estagiario" ? "Estagiário (6h)" : "CLT (8h)"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">☕ Intervalo:</span>
            <span className="font-semibold text-gray-800">
              {breakMinutes} min
            </span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">🏃 Saída:</span>
              <span className="font-bold text-teal-600 text-lg">{endTime}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="cursor-pointer relative z-1 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-2xl hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Calcular novamente
      </button>
    </StepCard>
  );
};

export default ResultStep;
