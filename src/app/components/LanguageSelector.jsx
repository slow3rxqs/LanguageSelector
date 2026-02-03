"use client"
import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import "../language/i18n"
import { Globe, ChevronDown } from "lucide-react"
import ReactCountryFlag from "react-country-flag"

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const [openLang, setOpenLang] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLang(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const languages = [
    {
      code: "en", label: "English", flag: <ReactCountryFlag
        countryCode="US"
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title="US"
      />
    },
    {
      code: "tr", label: "Türkçe", flag: <ReactCountryFlag
        countryCode="TR"
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title="TR"
      />
    },
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setOpenLang(!openLang)}
        className="flex items-center space-x-2 text-white hover:text-white cursor-pointer transition-colors duration-200 group px-3 py-2 rounded-lg bg-white/10"
      >
        <Globe size={16} className="group-hover:scale-110 transition-transform duration-200" />
        <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${openLang ? "rotate-180" : ""}`}
        />
      </div>
      {openLang && (
        <div className="absolute right-0 mt-2 w-48 bg-[#171717] backdrop-blur-md border border-[#202020] rounded-lg shadow-lg overflow-hidden animate-in fade-in duration-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                setOpenLang(false)
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 text-sm ${i18n.language === lang.code ? "bg-[#252525] text-gray-400" : "text-gray-300"
                } hover:bg-[#252525] transition-colors duration-200`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
