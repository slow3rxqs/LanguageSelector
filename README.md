# React Language App

Basit bir Next.js uygulamasında çok dillilik (i18n) desteği sağlar. Sağ üstteki dil seçici ile anında dil değiştirebilir, metinleri `react-i18next` ile yönetebilirsiniz.

## Özellikler

- Dil seçim menüsü (TR/EN) ve anında çeviri güncelleme
- Lucide ikonları ve bayrak göstergeleri
- Tailwind CSS v4 ile modern stil
- Koyu tema ve duyarlı düzen

## Teknolojiler

- Next.js 16 (React 19)
- Tailwind CSS v4
- i18next + react-i18next
- lucide-react, react-country-flag

## Kurulum

1. Gerekli yazılımlar: Node.js 18+
2. Bağımlılıkları kurun:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Üretim için derleyin ve çalıştırın:

```bash
npm run build
npm start
```

## Proje Yapısı

- Uygulama kökü: `src/app`
- Ana sayfa: `src/app/page.js`
- Kök layout: `src/app/layout.js`
- Küresel stiller: `src/app/globals.css`
- Dil seçici: `src/app/components/LanguageSelector.jsx`
- i18n ayarları: `src/app/language/i18n.js`

## i18n Kullanımı

- Çeviri kaynakları `src/app/language/i18n.js` içinde tanımlanır.
- Bileşenlerde metinler `useTranslation` ile alınır:

```js
import { useTranslation } from "react-i18next"
const { t } = useTranslation()
<h1>{t("title")}</h1>
```

- Dil değiştirme `LanguageSelector` içinden yapılır:

```js
i18n.changeLanguage("tr") // veya "en"
```

### Yeni Dil Ekleme

- `src/app/language/i18n.js` dosyasında `resources` içine yeni bir dil nesnesi ekleyin ve `code` alanını `LanguageSelector.jsx`'teki `languages` dizisine ekleyin.

## Dış Bağlantı Butonu

- Dış link için `<a>` etiketini kullanın (SEO ve erişilebilirlik için doğru yaklaşım):

```jsx
<a href="https://github.com/slow3rxqs" target="_blank" rel="noopener noreferrer">
  {t("getStarted")}
</a>
```

## Stil ve Düzen

- Tailwind v4 kullanımı için `globals.css` içinde `@import "tailwindcss";` bulunmaktadır.
- Footer çizgisi duyarlı tasarım için sabit genişlik yerine küçük bir bar olarak eklenmiştir.

## Komutlar

- Geliştirme: `npm run dev`
- Derleme: `npm run build`
- Üretim: `npm start`
- Kod kalitesi: `npm run lint`

## Bilinen Notlar

- Proje GitHub’a push için uygundur.
- npm’e paket olarak yayınlamak isterseniz `package.json` içindeki `name` alanını npm kurallarına uygun (kebab-case) hale getirmeniz gerekir.

## Lisans

Bu proje açık kaynaklıdır. İstediğiniz şekilde kullanabilir ve geliştirebilirsiniz.

