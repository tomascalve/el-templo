import useStyles from './useStyles';
import './Chronometer.scss';
import IconChronoPlay from '../../assets/Icons/IconChronoPlay';
import IconChronoStop from '../../assets/Icons/IconChronoStop';
import IconChronoBigClock from '../../assets/Icons/IconChronoBigClock';
import IconChronoSmallClock from '../../assets/Icons/IconChronoSmallClock';
import Text from '../../components/Text/Text';
import { useEffect, useState } from 'react';

const Chronometer = ({ onStop = () => {}, value = { ms: 0, s: 0, m: 0 } }) => {
	const styles = useStyles();

	const [isRunning, setIsRunning] = useState(false);

	const [timer, setTimer] = useState({
		ms: value.ms,
		s: value.s,
		m: value.m,
	});
	const [interv, setInterv] = useState();
	const showTime = `${timer.m >= 10 ? '' : '0'}${timer.m}:${
		timer.s >= 10 ? '' : '0'
	}${timer.s}`;

	const start = () => {
		setIsRunning(true);
		setInterv(setInterval(run, 100));
	};

	let updatedMs = timer.ms,
		updatedS = timer.s,
		updatedM = timer.m;

	const run = () => {
		if (updatedS >= 60) {
			updatedM++;
			updatedS = 0;
		}
		if (updatedMs >= 95) {
			updatedS++;
			updatedMs = 0;
		}
		updatedMs = updatedMs + 10;
		return setTimer({
			ms: updatedMs,
			s: updatedS,
			m: updatedM,
		});
	};

	const stop = () => {
		clearInterval(interv);
		if (timer.m < 60) {
			// If minute is over 60 when Stop, can't run again.
			setIsRunning(false);
		}
		onStop(timer);
	};

	useEffect(() => {
		if (timer.m >= 60) {
			// If minutes get to 60, auto Stops.
			stop();
		}
	}, [timer.m]);

	return (
		<div
			className={styles.chronoContainer}
			onClick={isRunning ? stop : start}
		>
			{isRunning ? (
				<div className={styles.running}>
					<div className={styles.runningTimer}>
						<div className={styles.runningClock}>
							<IconChronoBigClock />
						</div>
						<Text
							text={showTime}
							font={2}
							size='5'
							color={timer.m >= 60 && 'error'}
						/>
					</div>
					<div className={styles.runningStop}>
						<IconChronoStop />
					</div>
				</div>
			) : (
				<div className={styles.notRunning}>
					<div className={styles.notRunningPlay}>
						<IconChronoPlay />
					</div>
					<div className={styles.notRunningTimer}>
						<div className={styles.notRunningClock}>
							<IconChronoSmallClock />
						</div>
						<Text
							text={showTime}
							font={2}
							size='4'
							color={timer.m >= 60 && 'error'}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chronometer;
