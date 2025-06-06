"use client";

import { useMemo } from "react";

export const PJScreen: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const getRandomPJMessage = () => {
    const messages = [
      "😎 PJ detected: liberdade vem com boletos!",
      "💼 Hora extra? Aqui a gente chama de 'empreendedorismo'.",
      "🧾 Sua CLT não chegou, mas a cobrança do contador sim.",
      "🚫 Cartão de ponto? A gente nem sabe o que é isso!",
      "📆 Segunda ou domingo... tudo é dia de projeto.",
      "☕ Você pode tirar um café... e voltar só quando quiser (ou não 😅).",
      "🕓 Horário flexível, humor instável.",
      "🎯 Produtividade = café + código + incertezas tributárias.",
      "😂 Quem precisa de RH quando se tem burnout personalizado?",
      "🧠 PJ: Pessoa Jurídica ou Pessoa Jatinha?",
    ];

    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  };

  const randomMessage = useMemo(() => getRandomPJMessage(), []);

  return (
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
        <p className="text-amber-800 font-medium">{randomMessage}</p>
      </div>

      <button
        onClick={onReset}
        className="cursor-pointer px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
      >
        Tentar com outro contrato 😉
      </button>
    </div>
  );
};
