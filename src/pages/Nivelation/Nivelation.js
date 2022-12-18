import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import useStyles from './useStyles';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import NivelationMuscle from '../../assets/images/NivelationMuscle';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

const Nivelation = () => {
	const { t } = useTranslation();
	const styles = useStyles();
	const navigation = useNavigate();

	const redirect = () => {
		navigation(`/${PATHS.NIVELATION_EXERCISE}`);
	}

	return (
		<MainContainer back col='11'>
			<div className={styles.Main} >
				<div className={styles.textContainer}>
					<Text
						text={t('user.nivelation.nivelation')}
						size='4'
						font='1'
						bold
					/>

					<Text
						text={t('user.nivelation.paragraph')}
						className={styles.paragraph}
					/>
				</div>
				<div className={styles.imageContainer}>
					<NivelationMuscle className={styles.muscleImage} />
				</div>

				<div className={styles.container}>
					<Button onClick={redirect} text={t('global.next')} size="5" />
				</div>
			</div>
		</MainContainer>
	);
};

export default Nivelation;
