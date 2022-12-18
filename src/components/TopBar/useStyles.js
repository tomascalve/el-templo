const useStyles = ({ bg, color, shadow, banner }) => {
	return {
		container: `col-12 d-flex ${banner ? 'flex-column justify-content-between' : 'align-items-center'}  topbar topbar__bg--${bg} ${shadow ? 'topbar__shadow' : ''
			}
		${banner ? 'topbar--banner' : ''
			}`,
		body: `d-flex align-items-center`,
		backArrowBtn: 'back-arrow-btn border-0',
		icon: `stroke__color--${color} pl-5`,
		textContainerWithArrow: 'text-container-with-arrow',
		textContainerNotArrow: 'text-container-not-arrow'

	};
};

export default useStyles;
