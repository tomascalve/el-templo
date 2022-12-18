import React from 'react';

const Cross = () => {
	return (
		<svg
			width='9'
			height='9'
			viewBox='0 0 9 9'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 1L8 8'
				stroke='#2E4F77'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1 8L8 1'
				stroke='#2E4F77'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default Cross;
