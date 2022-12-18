import useStyles from './useStyles';
import './Input.scss';
import IconEye from '../../assets/Icons/IconEye';
import IconCheck from '../../assets/Icons/IconCheck';
import Text from '../Text/Text';
import IconDate from '../../assets/Icons/IconDate';
import { useTranslation } from 'react-i18next';

const ICON = ({ transparent }) => {
	const ICONS = {
		eye: <IconEye light={transparent} />,
		check: <IconCheck />,
		date: <IconDate />,
	};
	return ICONS;
};

const Input = ({
	required,
	label,
	value,
	onChange,
	type = 'text',
	placeholder,
	isInvalid,
	isValid,
	invalidText,
	feedback,
	transparent,
	icon,
	name,
	className,
	disabled,
	max,
	cursorPointer,
	marginFix,
	id,
	onBlur = () => { },
	onFocus = () => { },
	onClickIcon = () => { },
}) => {
	const { t } = useTranslation()
	const feedbackColorType = (isInvalid && 'error') || (transparent && 2);
	const styles = useStyles({
		isValid,
		isInvalid,
		transparent,
		className,
		icon,
		type
	});

	const handleChangeInput = (e) => {
		if (type === 'number') {
			e.target.value = e.target.value.replace(/[^0-9]/g, '');
		}
		onChange(e);
	}

	return (
		<div className={styles.container} >
			{label &&
				<label className={styles.label}>
					<Text text={label} size={1} />
				</label>
			}
			<div
				className={styles.inputContent}
				style={{ margin: `${marginFix === true ? '6px 0px' : marginFix}` }}
			>
				<input
					required={required}
					id={id}
					style={{ cursor: `${cursorPointer ? 'pointer' : 'text'}` }}
					max={max}
					onBlur={onBlur}
					onFocus={onFocus}
					disabled={disabled}
					onChange={handleChangeInput}
					type={type === 'number' ? 'text' : type}
					name={name}
					className={styles.input}
					value={value}
					placeholder={placeholder}
				/>

				{(icon || isValid) && (
					<div className={styles.iconContainer}>
						<span onClick={onClickIcon}>
							{isValid ? ICON().check : ICON({ transparent })?.[icon]}
						</span>
					</div>
				)}
			</div>
			{feedback && (
				<Text
					color={feedbackColorType}
					size={1}
					justify='end'
					text={feedback}
				/>
			)}
			{isInvalid && (
				<Text color='error' size={1} justify='end' text={invalidText} />
			)}
		</div>
	);
};

export default Input;
