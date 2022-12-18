import Text from '../Text/Text';
import './ButtonPagination.scss';
import useStyles from './useStyles.js';

const ButtonPagination = ({
	onClick,
	disabled,
	type = 'button',
	direction = 'right', // Direction options: 'left', 'right'.
	textRight = false,
	textLeft = false,
	textSize = '2',
	textColor = '5',
	textBold,
}) => {
	const styles = useStyles();

	return (
		<div className={styles.btnPaginationMainContainer}>
			{textLeft && (
				<div className={styles.btnPaginationText}>
					<Text
						text={textLeft}
						size={textSize}
						bold={textBold}
						color={textColor}
					/>
				</div>
			)}

			<button
				disabled={disabled}
				className={
					disabled
						? styles.customDisabled
						: styles.customBtnPagination
				}
				onClick={onClick}
				type={type}
			>
				<div
					className={direction}
					
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						fill='white'
						className='bi bi-chevron-right'
					>
						<path
							fillRule='evenodd'
							d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
						/>
					</svg>
				</div>
			</button>

			{textRight && (
				<div className='m-2'>
					<Text
						text={textRight}
						size={textSize}
						bold={textBold}
						color={textColor}
					/>
				</div>
			)}
		</div>
	);
};

export default ButtonPagination;
