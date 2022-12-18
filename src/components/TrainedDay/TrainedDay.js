import useStyles from './useStyles';
import './TrainedDay.scss';
import Text from '../Text/Text';

const TrainedDay = ({ day, number, trained, today }) => {
	const styles = useStyles({ today });

	return (
		<div className={trained ? styles.trained : styles.notTrained}>
			<Text
				text={day}
				color={trained ? 5 : 6}
				size='1'
				underline
				bold={trained || today}
			/>
			<Text
				text={number}
				color={trained ? 5 : 6}
				size='1'
				underline
				bold={trained || today}
			/>
		</div>
	);
};

export default TrainedDay;
