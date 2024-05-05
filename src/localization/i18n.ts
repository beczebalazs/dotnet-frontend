import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import auth from "./en/auth.json";

export const langs = {
    en: { nativeName: "English" },
    ro: { nativeName: "Romanian" },
};

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    auth,
                },
            },
        },
    });
