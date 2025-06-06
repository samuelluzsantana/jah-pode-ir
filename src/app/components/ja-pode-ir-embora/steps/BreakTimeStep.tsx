import { Coffee, CheckCircle } from "lucide-react";
import { useState } from "react";
import { StepCard } from "../StepCard";
import { StepHeader } from "../StepHeader";

// Step 3: Tempo de Intervalo
const BreakTimeStep: React.FC<{
  value: number;
  onChange: (minutes: number) => void;
}> = ({ value, onChange }) => {
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
    <StepCard className="animate-fade-in">
      <StepHeader
        icon={Coffee}
        title="Tempo de Intervalo"
        subtitle="Quanto tempo você descansou hoje?"
        bgGradient="from-amber-400 to-orange-500"
      />

      <div className="space-y-4">
        {[
          { minutes: 60, label: "1 hora", icon: "🍽️" },
          { minutes: 30, label: "30 minutos", icon: "☕" },
        ].map((option) => (
          <button
            key={option.minutes}
            onClick={() => handlePresetSelect(option.minutes)}
            className={` cursor-pointer
              w-full p-5 rounded-2xl border-2 transition-all duration-300 group
              ${
                value === option.minutes && !isCustom
                  ? "border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 transform scale-105 shadow-lg"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md hover:transform hover:scale-102"
              }
            `}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{option.icon}</div>
              <div className="text-left flex-1">
                <div className="font-semibold text-gray-800 text-lg">
                  {option.label}
                </div>
              </div>
              {value === option.minutes && !isCustom && (
                <CheckCircle className="w-6 h-6 text-amber-500" />
              )}
            </div>
          </button>
        ))}

        <button
          onClick={() => setIsCustom(true)}
          className={`cursor-pointer
            w-full p-5 rounded-2xl border-2 transition-all duration-300 group
            ${
              isCustom
                ? "border-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 transform scale-105 shadow-lg"
                : "border-gray-200 hover:border-gray-300 hover:shadow-md hover:transform hover:scale-102"
            }
          `}
        >
          <div className="flex items-center gap-4">
            <div className="text-2xl">⏱️</div>
            <div className="text-left flex-1">
              <div className="font-semibold text-gray-800 text-lg">
                Tempo personalizado
              </div>
            </div>
            {isCustom && <CheckCircle className="w-6 h-6 text-purple-500" />}
          </div>
        </button>

        {isCustom && (
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 animate-fade-in">
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Ex: 45"
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                className="flex-1 p-3 border border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
                min="0"
                max="480"
              />
              <button
                onClick={handleCustomSubmit}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                OK
              </button>
            </div>
            <p className="text-purple-600 text-xs mt-2">
              Informe o tempo em minutos
            </p>
          </div>
        )}
      </div>
    </StepCard>
  );
};

export default BreakTimeStep;
