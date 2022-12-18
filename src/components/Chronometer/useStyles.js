const useStyles = () => {
	return {
		chronoContainer: 'chronoContainer col-12',
		notRunning:
			'notRunning d-flex flex-column align-items-center justify-content-between col-12',
		notRunningPlay: 'notRunning__play',
		notRunningTimer: 'notRunning__timer d-flex align-items-center',
		notRunningClock: 'notRunning__clock',
		// ---------------------------
		running:
			'running d-flex flex-column align-items-center justify-content-between col-12',
		runningStop: 'running__stop',
		runningTimer: 'running__timer d-flex align-items-center',
		runningClock: 'running__clock',
	};
};

export default useStyles;
