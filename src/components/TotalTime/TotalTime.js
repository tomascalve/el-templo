import useStyles from './useStyles';
import './TotalTime.scss';
import Text from '../Text/Text';
import { useTranslation } from 'react-i18next';

const TotalTime = ({ totalTime = '0:00' }) => {
	const styles = useStyles();
	const { t } = useTranslation();

	const currentLang = window.localStorage.getItem('lang');

	return (
		<div className={styles.container}>
			<div className={styles.firstText}>
				<Text
					text={
						(currentLang === 'es' && t('global.time')) ||
						(currentLang === 'en' && t('global.total'))
					}
					size='2'
				/>
			</div>
			<div>
				<Text
					text={
						(currentLang === 'es' && t('global.total')) ||
						(currentLang === 'en' && t('global.time'))
					}
					size='2'
				/>
			</div>
			<div className={styles.numberText}>
				<Text text={totalTime} size='2' />
			</div>
		</div>
	);
};

export default TotalTime;
