import './Text.scss';
import useStyles from './useStyles';
// sizes : 1, 2, 3, 4, 5
// if title is true, the font-family will change to the title
// colors: 1, 2, 3, 4, 5, 6, link, error
const Text = ({
	text,
	size = '3',
	bold,
	underline,
	color = 1,
	font = 1,
	className,
	justify = 'center',
	customStyles,
	cursorPointer,
	onClick = () => { },
}) => {
	const styles = useStyles({
		bold,
		underline,
		size,
		color,
		className,
		font,
		justify,
		cursorPointer
	});

	return (
		<div className={styles.container}>
			<p onClick={onClick} className={styles.text} styles={{ customStyles }}>
				{text}
			</p>
		</div>
	);
};

export default Text;
