'use client'

import LanguageSelector from "./components/LanguageSelector"
import {useTranslation} from "react-i18next"

export default function Home() {
  const {t} = useTranslation();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative flex flex-col items-center justify-center p-8">
      {/* Dil Seçici - Sağ Üst Köşe */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-lg">
            {t("description")}
          </p>
        </div>

        <a 
          href="https://github.com/slow3rxqs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200 inline-block"
        >
          {t("getStarted")}
        </a>
      </div>

      <div className="absolute bottom-6 w-full flex flex-col items-center gap-4">
        <div className="w-[1875px] h-[1px] bg-gray-800"></div>
        <div className="text-gray-500 text-sm">
          <span className="text-white font-semibold"><a target="_blank" href="https://github.com/slow3rxqs">slow3rxq</a></span> {t("footer")}
        </div>
      </div>
    </main>
  );
}
