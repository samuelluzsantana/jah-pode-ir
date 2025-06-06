"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, House } from "lucide-react";

// Components
import WelcomeScreen from "./components/ja-pode-ir-embora/Home";
import { ProgressStepper } from "./components/ja-pode-ir-embora/ProgressStepper";
import BreakTimeStep from "./components/ja-pode-ir-embora/steps/BreakTimeStep";
import { EntryTimeStep } from "./components/ja-pode-ir-embora/steps/EntryTimeStep";
import ResultStep from "./components/ja-pode-ir-embora/steps/ResultStep";
import { UserTypeStep } from "./components/ja-pode-ir-embora/steps/UserTypeStep";
import Footer from "./components/ja-pode-ir-embora/Footer";
import IrEmboraIcon from "./components/ja-pode-ir-embora/IrEmboraIcon";
import { PJScreen } from "./components/ja-pode-ir-embora/steps/PJScreen";

// Types
import { Step, UserType } from "@/app/types";

export default function HomePage() {
  const [showStart, setShowStart] = useState(true);
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [userType, setUserType] = useState<UserType>(null);
  const [entryTime, setEntryTime] = useState("");
  const [breakMinutes, setBreakMinutes] = useState(0);

  const handleNext = () => {
    // Se for PJ no step 1, pula direto para a tela PJ
    if (currentStep === 1 && userType === "pj") {
      setCurrentStep(5 as Step); // Usar step 5 para identificar PJ screen
    } else if (currentStep < 4) {
      setCurrentStep((prev: Step) => (prev + 1) as Step);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev: Step) => (prev - 1) as Step);
    }

    if (currentStep === 1) {
      setShowStart(true);
      setUserType(null);
      setEntryTime("");
      setBreakMinutes(0);
    }
  };

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return userType !== null;
      case 2:
        return entryTime !== "";
      case 3:
        return breakMinutes > 0;
      default:
        return true;
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setUserType(null);
    setEntryTime("");
    setBreakMinutes(0);
  };

  // Se for PJ no step 5, mostra diretamente a tela PJ
  if (currentStep === 5 && userType === "pj" && !showStart) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                <IrEmboraIcon size={32} />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Já pode ir embora?
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Descubra se você já completou sua jornada de trabalho!
            </p>
          </div>

          <PJScreen onReset={handleReset} />

          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {showStart ? (
          <WelcomeScreen onStart={() => setShowStart(false)} />
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <IrEmboraIcon size={32} />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Já pode ir embora?
                </h1>
              </div>
              <p className="text-gray-600 text-lg">
                Descubra se você já completou sua jornada de trabalho!
              </p>
            </div>

            {/* Progress Stepper */}
            <ProgressStepper currentStep={currentStep} totalSteps={4} />

            {/* Step Content */}
            <div className="mb-8">
              {currentStep === 1 && (
                <UserTypeStep
                  selected={userType}
                  onSelect={handleUserTypeSelect}
                />
              )}
              {currentStep === 2 && (
                <EntryTimeStep value={entryTime} onChange={setEntryTime} />
              )}
              {currentStep === 3 && (
                <BreakTimeStep
                  value={breakMinutes}
                  onChange={setBreakMinutes}
                />
              )}
              {currentStep === 4 && (
                <ResultStep
                  userType={userType}
                  entryTime={entryTime}
                  breakMinutes={breakMinutes}
                  onReset={handleReset}
                />
              )}
            </div>

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between items-center max-w-md mx-auto">
                <button
                  onClick={handlePrev}
                  className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 font-medium disabled:opacity-40 disabled:cursor-not-allowed border-2 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:hover:border-gray-200 disabled:hover:bg-transparent"
                >
                  {showStart || currentStep !== 1 ? (
                    <ChevronLeft className="w-4 h-4" />
                  ) : (
                    <House className="w-4 h-4" />
                  )}

                  {showStart || currentStep !== 1 ? "Voltar" : "Inicio"}
                </button>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        step === currentStep ? "bg-teal-500 w-8" : ""
                      } ${step < currentStep ? "bg-emerald-400" : ""} ${
                        step > currentStep ? "bg-gray-200" : ""
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
                >
                  {currentStep === 3 ? "Ver Resultado" : "Continuar"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
