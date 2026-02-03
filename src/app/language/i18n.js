"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      title: "React Language App",
      description: "Welcome. You can change the language using the menu in the upper right corner.",
      getStarted: "Other Projects Eid",
      footer: " Made by.",
    }
  },
  tr: {
    translation: {
      title: "React Dil Uygulaması",
      description: "Hoş geldiniz. Sağ üst köşedeki menüyü kullanarak dili değiştirebilirsiniz.",
      getStarted: "Başka Projeler Edin",
      footer: " Tarafından yapıldı.",
    }
  },
}


i18n.use(initReactI18next).init({
  resources,
  lng: "tr", //Ana dil'i değiştirebilirsiniz.
  interpolation: { escapeValue: false }
})

export default i18n
