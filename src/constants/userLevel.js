import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const UserTrainingLevel = () => {
	const { t } = useTranslation();
	const { trainingLevel } = useSelector((store) => store.user);
	let level = trainingLevel;

	const levels = {
		1: t('user.trainingLevels.beginner'),
		2: t('user.trainingLevels.amateur'),
		3: t('user.trainingLevels.intermediate'),
		4: t('user.trainingLevels.advanced'),
		5: t('user.trainingLevels.expert'),
	};
	const user_trainingLevel = levels[level];

	return user_trainingLevel;
};
