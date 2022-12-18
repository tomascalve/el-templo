const useStyles = ({showChronometer}) => {
	return {
		exerciseContainer:
			'exercise__container d-flex flex-column align-items-center  col-12',
		titleContainer:
			'title__container col-12 d-flex justify-content-between align-items-center mt-3 mb-3',
		titleText:
			'',
		exerciseName: 'exerciseName',
		totalTime: 'totalTime',
		gifContainer: 'col-12 video-container',
		gif: 'video-iframe',
		dropDownContainer: 'dropDownContainer col-12',
		chronometerContainer: `chronometerContainer mt-5 ${showChronometer ? '' : 'd-none'}`,
		btnNextContainer:
			'btnNext__container d-flex align-items-center justify-content-end col-12',
		btnNextText: 'btnNext__text',
	};
};

export default useStyles;
