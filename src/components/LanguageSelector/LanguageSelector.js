import { useEffect, useState } from 'react';
import IconFlagEEUU from '../../assets/Icons/IconFlagEEUU';
import IconFlagSpain from '../../assets/Icons/IconFlagSpain';

import { setNewLangToLocalStore } from '../../i18n-lang-conf';
import Text from '../Text/Text';
import useStyles from './useStyles';

export const LanguageSelector = () => {
	const style = useStyles()

	const [currentLang, setCurrentLang] = useState()
	const [showDropdown, setShowDropdown] = useState(false)
	const [languages] = useState({
		es: {
			render: (
				<div className={style.langOption}>
					<IconFlagSpain />
					<Text text='ES' size='1' />
				</div>
			)
		},
		en: {
			render: (
				<div className={style.langOption}>
					<IconFlagEEUU />
					<Text text='EN' size='1' />
				</div>
			)
		},
	})
	useEffect(() => {
		const currentLang = window.localStorage.getItem('lang');
		setCurrentLang(currentLang)
	}, [showDropdown])


	const handleShowDropdown = () => setShowDropdown(true)

	const handleSelectLang = (lang) => {
		setShowDropdown(false)
		setNewLangToLocalStore(lang)

	}

	return (
		<div className={style.mainContainer}>
			{showDropdown ?
				<div>
					<div onClick={() => handleSelectLang('es')}>
						{languages.es.render}
					</div>
					<div onClick={() => handleSelectLang('en')}>
						{languages.en.render}
					</div>
				</div>
				:
				<div onClick={handleShowDropdown}>
					{languages[currentLang]?.render}
				</div>
			}

		</div>
	);
};
