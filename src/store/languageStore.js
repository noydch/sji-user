import { create } from 'zustand';
import i18n from 'i18next';

const useLanguageStore = create((set) => ({
    currentLanguage: i18n.language,
    changeLanguage: (lng) => {
        i18n.changeLanguage(lng);
        set({ currentLanguage: lng });

        // Change font family to Arial when language is English
        if (lng === 'en') {
            document.body.style.fontFamily = 'Arial, sans-serif';
        } else {
            // Reset to default font family for other languages
            document.body.style.fontFamily = 'Noto sans Lao';
        }
    },
}));

export default useLanguageStore;