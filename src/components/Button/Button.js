import useStyles from './useStyles';
import './Button.scss';
import Text from '../Text/Text';

const Button = ({
	text,
	size = 3,
	textSize = 1,
	className,
	onClick,
	type = 1,
	disabled,
	circle,
	secondary,
	textBold
}) => {
	const COLOR_TEXT = {
		1: '2',
		2: '5',
		3: '5',
	};

	const transformedText = type === 3 ? text.toUpperCase() : text;

	const styles = useStyles({ className, size, type, circle, disabled, secondary });

	return (
		<div className={styles.container}>
			<button
				disabled={disabled}
				className={styles.button}
				onClick={onClick}

			>
				<Text
					justify={type === 4 && 'start'}
					size={textSize}
					color={(type === 3 && disabled) ? 7 : secondary ? 4 : COLOR_TEXT[type]}
					bold={type === 3 || type === 4 || circle || textBold}
					text={transformedText}
					cursorPointer
				/>
			</button>
		</div>
	);
};

export default Button;
