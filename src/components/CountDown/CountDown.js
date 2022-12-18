import useStyles from './useStyles';

import Text from '../../components/Text/Text';
import ImgCountDown1 from '../../assets/images/ImgCountDown1';
import ImgCountDown2 from '../../assets/images/ImgCountDown2';
import ImgCountDown3 from '../../assets/images/ImgCountDown3';

import './CountDown.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CountDown = ({ callback = () => {} }) => {
	const styles = useStyles();
	const { t } = useTranslation();

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		if (timer < 3) {
			setTimeout(() => {
				setTimer(timer + 1);
			}, 1000);
		}
		if (timer >= 3) {
			callback();
		}
	});

	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<Text text={t('training.countDown.getReady')} size='4' bold />
			</div>
			{timer == 0 && <ImgCountDown3 />}
			{timer == 1 && <ImgCountDown2 />}
			{timer >= 2 && <ImgCountDown1 />}
		</div>
	);
};

export default CountDown;
