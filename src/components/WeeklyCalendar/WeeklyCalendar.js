import Text from '../Text/Text';
import useStyles from './useStyles';
import './WeeklyCalendar.scss';
import { MONTHS } from '../../constants/months';
import { useTranslation } from 'react-i18next';
import TrainedDay from '../TrainedDay/TrainedDay';

const WeeklyCalendar = ({ data }) => {
	const styles = useStyles();
	const { t } = useTranslation();

	const date = new Date();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.titleContainer}>
				<Text
					text={`${t(
						`month.${MONTHS[date.getMonth()]}`
					)} ${date?.getFullYear()}`}
					color={2}
					size='3'
					bold
				/>
			</div>
			<div className={styles.daysContainer}>
				{data?.trainedDays?.map(({ day, number, trained }) => (
					<TrainedDay
						key={number}
						day={t(`daysShort.${day}`)}
						number={number}
						trained={trained}
						today={number === date.getDate()}
					/>
				))}
			</div>
		</div>
	);
};

export default WeeklyCalendar;
