import useStyles from './useStyles';
import './Exercise.scss';
import Text from '../Text/Text';
import DropDown from '../DropDown/DropDown';
import Chronometer from '../../components/Chronometer/Chronometer';
import ButtonPagination from '../../components/ButtonPagination/ButtonPagination';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../MainContainer/MainContainer';

const Exercise = ({ title, video, description, onNext, reps, times }) => {
	const { t } = useTranslation();

	const [totalTime, setTotalTime] = useState({ ms: 0, s: 0, m: 0 });

	const [showChronometer, setShowChronometer] = useState(true);
	const [btnNextIsDisabled, setBtnNextIsDisabled] = useState(true);
	const onStop = (time) => {
		const mili = time.ms;
		const sec = time.s;
		const min = time.m;
		if (time.s > 0) {
			setBtnNextIsDisabled(false);
		}
		setTotalTime({ ms: mili, s: sec, m: min });
	};

	const handleShowChronometer = () => {
		setShowChronometer(!showChronometer)
	};

	const styles = useStyles({ showChronometer });
	return (
		<MainContainer col='12' scroll>
			<div className={styles.exerciseContainer}>
				<div className={styles.titleContainer}>
					<div className={styles.titleText}>
						<div>
							<Text
								//  TODO Poner el numero de ejecicio del objeto
								text={title}
								bold
								size='4'
							/>
						</div>
					</div>
					{/* <div className={styles.totalTime}>
						<TotalTime totalTime={timeToShow} />
					</div> */}
				</div>

				<div className={styles.gifContainer}>
					<iframe src={video} className={styles.gif} frameBorder="0" allow="autoplay"></iframe>
				</div>
					<div className='d-flex col-12 justify-content-evenly'>
						<Text bold text={t('exercise.times', {times})}/>
						<Text bold text={t('exercise.reps', {reps})}/>
					</div>
				<div
					className={styles.dropDownContainer}
					onClick={handleShowChronometer}
				>
					<DropDown text={t('exercise.watchVideoDescription')} shadow>
						<Text
							text={description}
							size='2'
							justify='left'
						/>
					</DropDown>
				</div>

				<div className={styles.chronometerContainer}>
					<Chronometer
						onStop={onStop}
						// Value mantiene el tiempo si el componente desaparece y reaparece.
						value={{
							ms: totalTime.ms,
							s: totalTime.s,
							m: totalTime.m,
						}}
					/>
				</div>

				<div className={styles.btnNextContainer}>
					<ButtonPagination
						textLeft={t('exercise.nextExercise')}
						textBold
						disabled={btnNextIsDisabled}
						onClick={onNext}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default Exercise;
