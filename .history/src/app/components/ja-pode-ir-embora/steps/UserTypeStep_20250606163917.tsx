import { UserType } from "@/app/types";
import { Calendar, Clock, Sparkles, CheckCircle } from "lucide-react";
import { StepCard } from "../StepCard";
import { AnimatedList } from "@/components/magicui/animated-list";

export const UserTypeStep: React.FC<{
  selected: UserType;
  onSelect: (type: UserType) => void;
}> = ({ selected, onSelect }) => (
  <StepCard className="animate-fade-in">
    <div className="text-center mb-8 w-full flex justify-center">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center">
          <Calendar className="w-8 h-8 text-white" />
        </div>

        <div className="flex flex-col items-start ml-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Tipo de Contrato
          </h2>
          <p className="text-gray-600">
            Selecione qual é o seu vínculo empregatício
          </p>
        </div>
      </div>
    </div>

    <AnimatedList className="space-y-1">
      {[
        {
          type: "pj",
          icon: Sparkles,
          title: "PJ",
          subtitle: "Horário flexível",
          color: "from-purple-400 to-purple-500",
        },
        {
          type: "clt",
          icon: Clock,
          title: "CLT",
          subtitle: "Jornada de 8 horas",
          color: "from-emerald-400 to-emerald-500",
        },
        {
          type: "estagiario",
          icon: Calendar,
          title: "Estagiário",
          subtitle: "Jornada de 6 horas",
          color: "from-blue-400 to-blue-500",
        },
      ].map((option) => (
        <button
          key={option.type}
          onClick={() => onSelect(option.type as UserType)}
          className={`cursor-pointer w-full p-5 rounded-2xl border-2 transition-all duration-300 group
            ${
              selected === option.type
                ? "border-teal-400 bg-gradient-to-r from-teal-50 to-emerald-50 transform scale-105 shadow-lg"
                : "border-gray-200 hover:border-gray-300 hover:shadow-md hover:transform hover:scale-102"
            }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
            >
              <option.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-left flex-1">
              <div className="font-semibold text-gray-800 text-lg">
                {option.title}
              </div>
              <div className="text-gray-500 text-sm">{option.subtitle}</div>
            </div>
            {selected === option.type && (
              <CheckCircle className="w-6 h-6 text-teal-500" />
            )}
          </div>
        </button>
      ))}
    </AnimatedList>
  </StepCard>
);
