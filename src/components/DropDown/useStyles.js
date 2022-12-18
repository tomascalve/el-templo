const useStyles = ({ shadow }) => {
	return {
		dropDownMainContainer:
			'dropDown__mainContainer d-flex flex-column justify-content-between align-items-center col-12',
		bar: 'bar d-flex justify-content-between align-items-center col-12',
		arrowDown: 'arrow',
		arrowUp: 'arrow__unfolded',
		contentParent: `content-parent content-parent--${shadow && 'shadow'}`,
		content: 'content',
	};
};

export default useStyles;
