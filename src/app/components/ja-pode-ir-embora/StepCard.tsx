interface StepCardProps {
  children: React.ReactNode;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`
    bg-white/80 backdrop-blur-sm rounded-3xl p-8  border border-white/20
    transform transition-all duration-500 ease-out
    ${className}
  `}
  >
    {children}
  </div>
);
