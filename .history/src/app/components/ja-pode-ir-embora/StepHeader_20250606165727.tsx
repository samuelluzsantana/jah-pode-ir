import { LucideIcon } from "lucide-react";

interface StepHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  bgGradient?: string;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
  gradientFrom = "from-teal-400",
  gradientTo = "to-emerald-500",
  bgGradient,
}) => {
  return (
    <div className="text-center mb-8 w-full flex justify-center">
      <div className="flex items-center">
        {" "}
        <div
          className={`w-16 h-16 bg-gradient-to-br ${
            bgGradient || `${gradientFrom} ${gradientTo}`
          } rounded-2xl flex items-center justify-center`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col items-start ml-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
