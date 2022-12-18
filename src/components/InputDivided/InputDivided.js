import React from 'react';

import './InputDivided.scss';

import Text from '../Text/Text';
const InputDivided = ({
	text1,
	text2,
	onKeyPress,
	onChange,
	type,
	id,
	name,
	min,
	max,
	defaultValue,
	value,
	maxLength,
	placeholder,
}) => {
	return (
		<div className='input__divided d-flex justify-content-between align-items-center col-11 m-0 p-0'>
			<div className='d-flex justify-content-between align-items-center col-6'>
				<label className='input__divided--label mb-1' htmlFor={id}>
					<Text text={text1} size='3' />
				</label>
			</div>
			<div>
				<div className='input__divided--centerLine'>
					<span style={{ opacity: '0' }}>.</span>
				</div>
			</div>

			<div className='input__divided--auxTextContainer d-flex col-6'>
				<input
					className='input__divided--input d-flex justify-content-center'
					onKeyPress={onKeyPress}
					onChange={onChange}
					type={type}
					id={id}
					name={name}
					min={min}
					max={max}
					defaultValue={defaultValue}
					value={value}
					maxLength={maxLength}
					placeholder={placeholder}
				></input>
				<div className='input__divided--auxText d-flex justify-content-end m-0'>
					<Text text={text2} size='3' />
				</div>
			</div>
		</div>
	);
};

export default InputDivided;
