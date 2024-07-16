import { create } from 'zustand';
import i18n from 'i18next'; // ตรวจสอบให้แน่ใจว่าคุณได้ import i18n instance ที่ถูกต้อง

const useLanguageStore = create((set) => ({
    currentLanguage: i18n.language,
    changeLanguage: (lng) => {
        i18n.changeLanguage(lng);
        set({ currentLanguage: lng });
    },
}));

export default useLanguageStore;