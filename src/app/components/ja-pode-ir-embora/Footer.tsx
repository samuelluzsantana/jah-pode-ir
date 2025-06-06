/* eslint-disable @next/next/no-img-element */
import { Github, Heart, Atom } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ShineBorder } from "@/components/magicui/shine-border"; // ajuste o caminho se necessário

export default function Footer() {
  const [showCard, setShowCard] = useState(false);

  return (
    <footer className="text-black font-light text-center p-4 mt-8">
      <div>
        Feito com <Heart className="inline w-4 h-4 text-red-500" />
        <span className="mx-1">e</span>
        <Atom className="inline w-4 h-4 text-blue-500 mr-1" />
        por
        <span className="relative inline-block ml-1">
          <Link
            href="https://github.com/samuelluzsantana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-normal text-gray-800 transition-colors duration-200"
            onMouseEnter={() => setShowCard(true)}
            onMouseLeave={() => setShowCard(false)}
          >
            @sxwuell
          </Link>

          {/* Card de hover */}
          {showCard && (
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-white rounded-2xl  border border-gray-100 p-6 z-50 animate-in fade-in duration-200
          shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
            "
            >
              {/* Avatar com ShineBorder */}
              <div className="flex flex-col items-center">
                <div className="flex w-full justify-start">
                  <div className="relative w-16 h-16 rounded-full mb-1">
                    <ShineBorder
                      className="rounded-full"
                      shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    />
                    <img
                      src="https://avatars.githubusercontent.com/u/73195532?v=4"
                      alt="avatar do desenvolvedor"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Nome */}
                <div className="flex items-start flex-col w-full mt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Samuel Luz Santana
                  </h3>
                  <div className="flex items-center gap-1 text-white text-sm mb-2">
                    <div className="bg-gradient-to-br from-[#A07CFE] to-[#FE8FB5]   h-5 w-5 rounded-sm flex items-center justify-center">
                      <Github size={14} />
                    </div>
                    <span className="text-zinc-900">/samuelluzsantana</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-700 font-medium text-sm text-start mb-4 leading-relaxed">
                  Desenvolvedor Full Stack apaixonado por criar experiências
                  digitais incríveis
                </p>
              </div>

              {/* Seta do tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -mt-1.5"></div>
            </div>
          )}
        </span>
      </div>
    </footer>
  );
}
