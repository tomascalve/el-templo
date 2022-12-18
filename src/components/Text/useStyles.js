const useStyles = ({
	bold,
	underline,
	size,
	color,
	className,
	font,
	justify,
	cursorPointer
}) => {
	const fontSizes = {
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6'
	};

	const colors = {
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6',
		link: 'link',
		linkSelected: 'link-selected',
		error: 'error',
		done: 'done'
	};

	const fontFamilies = {
		1: 1,
		2: 2,
	};

	return {
		container: `text-${justify}`,
		text: `text__font--${fontFamilies[font]} 
        ${bold ? 'text--bold' : ''} 
        ${underline ? 'text--underline' : ''} 
        text__size--${fontSizes[size]} 
        text__color--${colors[color]} 
        m-0 p-0 
        ${className}
		${cursorPointer && 'cursor-pointer'}
        `,
	};
};

export default useStyles;
