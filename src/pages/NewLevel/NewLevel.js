import React from 'react';
import './NewLevel.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { PATHS } from '../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './useStyles';

const NewLevel = () => {
	const styles = useStyles();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`${PATHS.TRAINING}`);
	};
	return (
		<MainContainer col='12' back>
			<div className={styles.mainContainer}>
				<div className={styles.textContainer}>
					<Text text={t('user.newLevel.title')} font='2' size='5' />
					<Text
						text={t('user.newLevel.subtitle')}
						font='1'
						size='3'
						bold
					/>
				</div>
				<div>
					<div className={styles.animatedBox}>
						<Text
							className={styles.animatedLevel}
							text='3'
							color='5'
							bold
							font='2'
							size='5'
						/>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<Button
						text={t('user.newLevel.button')}
						onClick={handleNavigate}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default NewLevel;
