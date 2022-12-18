const useStyles = ({ today }) => {
	return {
		notTrained: `pillContainer pillContainer--${
			today && 'today'
		} d-flex flex-column justify-content-between`,
		trained: 'trained d-flex flex-column justify-content-between',
		today: 'today d-flex flex-column justify-content-between',
	};
};

export default useStyles;
