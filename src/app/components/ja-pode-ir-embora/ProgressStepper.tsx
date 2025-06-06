import { Step } from "@/app/types";
import { CheckCircle } from "lucide-react";

export const ProgressStepper: React.FC<{
  currentStep: Step;
  totalSteps: number;
  onStepClick?: (step: Step) => void;
}> = ({ currentStep, totalSteps, onStepClick }) => {
  const steps = [
    {
      number: 1,
      title: "Tipo de Contrato",
      description: "Selecione seu vínculo",
    },
    {
      number: 2,
      title: "Horário de Entrada",
      description: "Informe quando chegou",
    },
    {
      number: 3,
      title: "Tempo de Intervalo",
      description: "Quanto tempo descansou",
    },
    { number: 4, title: "Resultado", description: "Veja se pode ir embora" },
  ];

  return (
    <div className="relative mb-12">
      <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-300 to-cyan-200 rounded-full opacity-30"></div>

      <div
        className="absolute top-8 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-700 ease-out"
        style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
      ></div>

      <div className="relative flex justify-between">
        {steps.map((step) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          const isUpcoming = currentStep < step.number;

          return (
            <div
              key={step.number}
              className="flex flex-col items-center"
              style={{ width: "25%" }}
            >
              {/* Step circle */}
              <div
                onClick={() =>
                  onStepClick &&
                  step.number < currentStep &&
                  onStepClick(step.number as Step)
                }
                className={`
                  relative w-16 h-16 rounded-full border-4 flex items-center justify-center
                  transition-all duration-500 ease-out transform
                  ${
                    isActive
                      ? "border-teal-400 bg-white shadow-lg scale-110"
                      : ""
                  }
                  ${isCompleted ? "border-emerald-500 bg-emerald-500" : ""}
                  ${isUpcoming ? "border-gray-200 bg-gray-50" : ""}
                  ${
                    step.number < currentStep
                      ? "cursor-pointer"
                      : "cursor-default"
                  }
                `}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span
                    className={`
                    font-bold text-lg
                    ${isActive ? "text-teal-600" : ""}
                    ${isUpcoming ? "text-gray-400" : ""}
                  `}
                  >
                    {step.number}
                  </span>
                )}

                {/* Active step glow effect */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-teal-400 opacity-20 animate-pulse"></div>
                )}
              </div>

              {/* Step info */}
              <div
                className={`
                mt-4 text-center transition-all duration-300
                ${isActive ? "transform -translate-y-1" : ""}
              `}
              >
                <div
                  className={`
                  font-semibold text-sm
                  ${isActive ? "text-teal-700" : ""}
                  ${isCompleted ? "text-emerald-600" : ""}
                  ${isUpcoming ? "text-gray-400" : ""}
                `}
                >
                  {step.title}
                </div>
                <div
                  className={`
                  text-xs mt-1
                  ${isActive ? "text-teal-500" : ""}
                  ${isCompleted ? "text-emerald-500" : ""}
                  ${isUpcoming ? "text-gray-300" : ""}
                `}
                >
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
