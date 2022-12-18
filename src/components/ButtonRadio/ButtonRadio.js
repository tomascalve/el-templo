import './ButtonRadio.scss';
import useStyles from './useStyles';

const ButtonRadio = ({
	type,
	name,
	id,
	value,
	checked,
	label,
	htmlFor,
	className,
	stylesButtonRadio,
	onChange,
}) => {
	const styles = useStyles({ className, stylesButtonRadio });

	return (
		<div className={styles.containerInput}>
			<input
				className={styles.button}
				onChange={onChange}
				type={type}
				name={name}
				id={id}
				value={value}
				checked={checked}
			/>
			<label className={styles.label} htmlFor={htmlFor}>
				{label}
			</label>
		</div>
	);
};

export default ButtonRadio;
