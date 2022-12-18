const useStyles = ({ list, dividedTicket }) => {
	return {
		mainDiv1: `${list
			? 'd-flex justify-content-center ml-5 container1 '
			: `col-6 d-flex container1 container1--list`
			}`,
		divText1: `${list
			? ' col-2 text-1-container d-flex align-items-center justify-content-center'
			: ''
			} 
			${dividedTicket && 'divided-ticket-fix-left'}`,
		divText2: `${list ? 'd-flex col-12 ' : ' '}`,
		divText3: `${list ? '' : `col-6 d-flex justify-content-end ${dividedTicket && 'divided-ticket-fix-right'}`} `,
	};
};

export default useStyles;
