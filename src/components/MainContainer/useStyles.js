const useStyles = ({ backgroundImg, scroll, col, banner, navbar, alignCenter }) => {
	return {
		container: `col-12 d-flex flex-column justify-content-between align-items-center ${backgroundImg ? 'backgroundImg backgroundImg--' + backgroundImg : ''
			} main-container--${scroll ? 'scroll' : 'no-scroll'}`,
		mainContainer: `col-12 h-100 d-flex flex-column align-items-center`,
		bodyContainer: `col-${col} d-flex flex-column justify-content-between ${alignCenter && 'align-items-center'} ${scroll ? '' : 'main-container__body'
			}${banner ? '--banner' : ''}`,
	};
};

export default useStyles;
