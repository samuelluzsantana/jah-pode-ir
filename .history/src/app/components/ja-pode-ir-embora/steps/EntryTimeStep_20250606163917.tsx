import { Clock } from "lucide-react";
import { StepCard } from "../StepCard";

// Step 2: Horário de Entrada
export const EntryTimeStep: React.FC<{
  value: string;
  onChange: (time: string) => void;
}> = ({ value, onChange }) => (
  <StepCard className="animate-fade-in">
    <div className="text-center mb-8 w-full flex justify-center">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center">
          <Clock className="w-8 h-8 text-white" />
        </div>

        <div className="flex flex-col items-start ml-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Horário de Entrada
          </h2>
          <p className="text-gray-600">
            Que horas você chegou no trabalho hoje?
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
          text-gray-800 placeholder-gray-400
            w-[17em] px-[5em] h-16 text-2xl text-center font-mono
            border-2 border-gray-200 rounded-2xl
            focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-100
            transition-all duration-300
            bg-white/50 backdrop-blur-sm
          "
          required
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <span className="text-sm text-gray-400">Formato 24h</span>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-100">
        <p className="text-teal-700 text-sm text-center">
          <Clock className="w-4 h-4 inline mr-1" />
          Use o formato de 24 horas (ex: 08:30 para 8:30 da manhã)
        </p>
      </div>
    </div>
  </StepCard>
);
