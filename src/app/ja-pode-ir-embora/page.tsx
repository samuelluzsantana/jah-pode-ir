"use client";
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

// Tipos
type UserType = "estagiario" | "clt" | "pj" | null;
type Step = "welcome" | "userType" | "entryTime" | "breakTime" | "result";

// Utilitários de tempo
const timeUtils = {
  parseTime: (timeString: string): number => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  },

  formatTime: (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  },

  addMinutes: (timeString: string, minutesToAdd: number): string => {
    const totalMinutes = timeUtils.parseTime(timeString) + minutesToAdd;
    return timeUtils.formatTime(totalMinutes);
  },

  getCurrentTime: (): string => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  },

  isTimeReached: (targetTime: string): boolean => {
    const current = timeUtils.parseTime(timeUtils.getCurrentTime());
    const target = timeUtils.parseTime(targetTime);
    return current >= target;
  },

  getTimeDifference: (targetTime: string): number => {
    const current = timeUtils.parseTime(timeUtils.getCurrentTime());
    const target = timeUtils.parseTime(targetTime);
    return target - current;
  },
};

// Progress Stepper Component
const ProgressStepper: React.FC<{
  currentStep: number;
  totalSteps: number;
}> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              index < currentStep
                ? "bg-emerald-500 border-emerald-500 text-white"
                : index === currentStep
                ? "bg-emerald-100 border-emerald-500 text-emerald-700"
                : "bg-gray-100 border-gray-300 text-gray-400"
            }`}
          >
            {index < currentStep ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <span className="text-sm font-semibold">{index + 1}</span>
            )}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                index < currentStep ? "bg-emerald-500" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Hover Card Component (Simplified version of shadcn)
const HoverCard: React.FC<{
  trigger: React.ReactNode;
  content: React.ReactNode;
}> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {content}
        </div>
      )}
    </div>
  );
};

// Welcome Screen
const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="text-center space-y-8 py-8">
    <div className="space-y-4">
      <div className="text-6xl mb-6">⏰</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Já pode ir embora?
      </h1>
      <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
        Descubra se você já completou sua jornada de trabalho!
      </p>
    </div>

    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
      <p className="text-gray-700 mb-4">
        ✨ Calculamos sua jornada baseada no seu tipo de contrato
      </p>
      <p className="text-gray-700">🎯 Resultado instantâneo e divertido</p>
    </div>

    <button
      onClick={onStart}
      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
    >
      Vamos lá! 🚀
    </button>
  </div>
);

// PJ Rick Roll Screen
const PJScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => (
  <div className="text-center space-y-6">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Opa, detectamos um PJ! 👀
      </h2>
      <p className="text-gray-600 text-lg">
        Você não tem horário fixo, né? Mas já que chegou até aqui...
      </p>
    </div>

    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=0"
        title="Never Gonna Give You Up"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full"
      ></iframe>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <p className="text-amber-800 font-medium">
        😄 Como PJ, você define seus próprios horários. Trabalhe com
        responsabilidade!
      </p>
    </div>

    <button
      onClick={onReset}
      className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
    >
      Tentar com outro contrato 😉
    </button>
  </div>
);

// User Type Selector
const UserTypeSelector: React.FC<{
  onSelect: (type: UserType) => void;
  selected: UserType;
  onNext: () => void;
}> = ({ onSelect, selected, onNext }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Qual é o seu tipo de contrato?
    </h2>

    <div className="grid gap-4">
      <button
        onClick={() => onSelect("estagiario")}
        className={`p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
          selected === "estagiario"
            ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md"
            : "border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="text-2xl">🎓</div>
          <div className="text-left">
            <div className="font-semibold text-lg">Estagiário</div>
            <div className="text-sm opacity-75">Jornada de 6 horas diárias</div>
          </div>
        </div>
      </button>

      <button
        onClick={() => onSelect("clt")}
        className={`p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
          selected === "clt"
            ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md"
            : "border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="text-2xl">💼</div>
          <div className="text-left">
            <div className="font-semibold text-lg">CLT</div>
            <div className="text-sm opacity-75">Jornada de 8 horas diárias</div>
          </div>
        </div>
      </button>

      <button
        onClick={() => onSelect("pj")}
        className={`p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
          selected === "pj"
            ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md"
            : "border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="text-2xl">⚡</div>
          <div className="text-left">
            <div className="font-semibold text-lg">PJ (Pessoa Jurídica)</div>
            <div className="text-sm opacity-75">Horário flexível</div>
          </div>
        </div>
      </button>
    </div>

    {selected && selected !== "pj" && (
      <button
        onClick={onNext}
        className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-semibold"
      >
        Continuar →
      </button>
    )}
  </div>
);

// Entry Time Input
const EntryTimeInput: React.FC<{
  value: string;
  onChange: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}> = ({ value, onChange, onNext, onBack }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Que horas você chegou hoje?
    </h2>

    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <div className="text-4xl mb-4">🕐</div>
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-56 p-4 text-2xl text-center border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all"
          required
        />
      </div>
      <p className="text-sm text-gray-500 text-center">
        Digite o horário de entrada no formato 24h
      </p>
    </div>

    <div className="flex gap-3">
      <button
        onClick={onBack}
        className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
      >
        ← Voltar
      </button>
      <button
        onClick={onNext}
        disabled={!value}
        className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
      >
        Continuar →
      </button>
    </div>
  </div>
);

// Break Input
const BreakInput: React.FC<{
  value: number;
  onChange: (minutes: number) => void;
  onNext: () => void;
  onBack: () => void;
}> = ({ value, onChange, onNext, onBack }) => {
  const [customValue, setCustomValue] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handlePresetSelect = (minutes: number) => {
    setIsCustom(false);
    onChange(minutes);
  };

  const handleCustomSubmit = () => {
    const minutes = parseInt(customValue);
    if (minutes > 0 && minutes <= 480) {
      onChange(minutes);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Quanto tempo de intervalo você fez?
      </h2>

      <div className="text-center text-4xl mb-6">☕</div>

      <div className="grid gap-3">
        <button
          onClick={() => handlePresetSelect(60)}
          className={`p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
            value === 60 && !isCustom
              ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm"
          }`}
        >
          <div className="flex items-center gap-3 justify-center">
            <span className="text-xl">🍽️</span>
            <span className="font-semibold">1 hora (almoço)</span>
          </div>
        </button>

        <button
          onClick={() => handlePresetSelect(30)}
          className={`p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
            value === 30 && !isCustom
              ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm"
          }`}
        >
          <div className="flex items-center gap-3 justify-center">
            <span className="text-xl">☕</span>
            <span className="font-semibold">30 minutos</span>
          </div>
        </button>

        <button
          onClick={() => setIsCustom(true)}
          className={`p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
            isCustom
              ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md"
              : "border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm"
          }`}
        >
          <div className="flex items-center gap-3 justify-center">
            <span className="text-xl">⏱️</span>
            <span className="font-semibold">Outro tempo</span>
          </div>
        </button>

        {isCustom && (
          <div className="flex gap-2 mt-4 p-4 bg-gray-50 rounded-xl">
            <input
              type="number"
              placeholder="Minutos"
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
              min="0"
              max="480"
            />
            <button
              onClick={handleCustomSubmit}
              className="px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              OK
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
        >
          ← Voltar
        </button>
        <button
          onClick={onNext}
          disabled={value === 0}
          className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
        >
          Ver resultado →
        </button>
      </div>
    </div>
  );
};

// Result Display with Sliders
const ResultDisplay: React.FC<{
  userType: UserType;
  entryTime: string;
  breakMinutes: number;
  onReset: () => void;
  onEntryTimeChange: (time: string) => void;
  onBreakTimeChange: (minutes: number) => void;
}> = ({
  userType,
  entryTime,
  breakMinutes,
  onReset,
  onEntryTimeChange,
  onBreakTimeChange,
}) => {
  const [showAdjustments, setShowAdjustments] = useState(false);

  const workHours = userType === "estagiario" ? 6 * 60 : 8 * 60;
  const endTime = timeUtils.addMinutes(entryTime, workHours + breakMinutes);
  const canLeave = timeUtils.isTimeReached(endTime);
  const timeDiff = timeUtils.getTimeDifference(endTime);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-6">
        {canLeave ? (
          <>
            <div className="text-8xl animate-bounce">🎉</div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-emerald-600 flex items-center justify-center gap-3">
                <span>✅</span>
                Já pode ir embora!
              </h2>
              <p className="text-xl text-gray-600">
                Você completou sua jornada às{" "}
                <span className="font-bold text-emerald-600">{endTime}</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
              <p className="text-emerald-800 font-semibold text-lg">
                🎊 Parabéns! Você cumpriu suas {workHours / 60} horas de
                trabalho!
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-8xl">😢</div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-amber-600 flex items-center justify-center gap-3">
                <span>⏳</span>
                Ainda não!
              </h2>
              <p className="text-xl text-gray-600">
                Você poderá sair às{" "}
                <span className="font-bold text-amber-600">{endTime}</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 font-semibold text-lg">
                ⏰ Faltam {Math.floor(timeDiff / 60)}h {timeDiff % 60}min para o
                fim do expediente
              </p>
            </div>
          </>
        )}

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 text-lg">
            📋 Resumo da Jornada:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-gray-600">
              <span className="font-semibold">🕐 Entrada:</span> {entryTime}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">👤 Tipo:</span>{" "}
              {userType === "estagiario" ? "Estagiário (6h)" : "CLT (8h)"}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">☕ Intervalo:</span>{" "}
              {breakMinutes} min
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">🚪 Saída:</span> {endTime}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setShowAdjustments(!showAdjustments)}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          >
            {showAdjustments ? "🔼 Ocultar" : "🔽 Ajustar horários"}
          </button>

          {showAdjustments && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-6">
              <h4 className="font-bold text-blue-800 text-lg">
                ⚙️ Ajuste seus horários:
              </h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-700 mb-2">
                    🕐 Horário de entrada: {entryTime}
                  </label>
                  <input
                    type="time"
                    value={entryTime}
                    onChange={(e) => onEntryTimeChange(e.target.value)}
                    className="w-full p-3 border border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-700 mb-2">
                    ☕ Intervalo: {breakMinutes} minutos
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="15"
                    value={breakMinutes}
                    onChange={(e) =>
                      onBreakTimeChange(parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-blue-600 mt-1">
                    <span>0 min</span>
                    <span>60 min</span>
                    <span>120 min</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={onReset}
            className="w-full px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors font-semibold"
          >
            🔄 Calcular novamente
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [step, setStep] = useState<Step>("welcome");
  const [userType, setUserType] = useState<UserType>(null);
  const [entryTime, setEntryTime] = useState("08:00");
  const [breakMinutes, setBreakMinutes] = useState(60);

  const getStepNumber = () => {
    const stepMap = {
      welcome: 0,
      userType: 1,
      entryTime: 2,
      breakTime: 3,
      result: 4,
    };
    return stepMap[step] || 0;
  };

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    if (type === "pj") {
      setStep("result");
    }
  };

  const handleReset = () => {
    setStep("welcome");
    setUserType(null);
    setEntryTime("08:00");
    setBreakMinutes(60);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
          {step !== "welcome" && step !== "result" && (
            <ProgressStepper currentStep={getStepNumber() - 1} totalSteps={3} />
          )}

          {step === "welcome" && (
            <WelcomeScreen onStart={() => setStep("userType")} />
          )}

          {step === "userType" && (
            <UserTypeSelector
              onSelect={handleUserTypeSelect}
              selected={userType}
              onNext={() => setStep("entryTime")}
            />
          )}

          {step === "entryTime" && (
            <EntryTimeInput
              value={entryTime}
              onChange={setEntryTime}
              onNext={() => setStep("breakTime")}
              onBack={() => setStep("userType")}
            />
          )}

          {step === "breakTime" && (
            <BreakInput
              value={breakMinutes}
              onChange={setBreakMinutes}
              onNext={() => setStep("result")}
              onBack={() => setStep("entryTime")}
            />
          )}

          {step === "result" && userType === "pj" && (
            <PJScreen onReset={handleReset} />
          )}

          {step === "result" && userType !== "pj" && (
            <ResultDisplay
              userType={userType}
              entryTime={entryTime}
              breakMinutes={breakMinutes}
              onReset={handleReset}
              onEntryTimeChange={setEntryTime}
              onBreakTimeChange={setBreakMinutes}
            />
          )}
        </div>

        <footer className="text-center mt-8">
          <HoverCard
            trigger={
              <span className="text-gray-500 text-sm cursor-pointer hover:text-gray-700 transition-colors">
                Feito com ❤️ por @sxwuell
              </span>
            }
            content={
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl text-white">👨‍💻</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Samuel Luz</h3>
                  <p className="text-sm text-gray-600">
                    Desenvolvedor Full Stack
                  </p>
                </div>
                <a
                  href="https://github.com/samuelluzsantana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Ver GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            }
          />
        </footer>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default App;
