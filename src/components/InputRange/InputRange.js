import './InputRange.scss';

const InputRange = ({ id, defaultValue, min, max, step = '1', onChange }) => {
	return (
		<div className='form-group col-10'>
			<label htmlFor='level' className='form-label'></label>
			<input
				id={id}
				type='range'
				className='form-range inputRange'
				value={defaultValue}
				min={min}
				max={max}
				step={step}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputRange;
