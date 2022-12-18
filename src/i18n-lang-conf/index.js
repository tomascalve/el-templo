import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en/language';
import es from './languages/es/language';

const getLastLangFromLocalStorage = () => {
	let lang = localStorage.getItem('lang');
	if (!lang) {
		lang = 'es';
		localStorage.setItem('lang', 'es');
	}
	return lang
};

const setCurrentLangToLocalStorage = (lang) => {
	return window.localStorage.setItem('lang', lang);
};

const setNewLangToLocalStore = async (language) => {
	await i18n.changeLanguage(language);
	setCurrentLangToLocalStorage(language);
};

const defaultLang = getLastLangFromLocalStorage() || 'es';

const resources = {
	en: {
		translation: en,
	},
	es: {
		translation: es,
	},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: defaultLang,
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

const updateLang = async () => {
	const currentLang = getLastLangFromLocalStorage();
	if (!currentLang) {
		setCurrentLangToLocalStorage('es');
	}
};

updateLang();

export default i18n;
export { setNewLangToLocalStore };
