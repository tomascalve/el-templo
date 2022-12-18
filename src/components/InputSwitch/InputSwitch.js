import React from 'react';

const InputSwitch = ({label, className, id, onClick, onChange, checked}) => {
	return (
		<div className='form-check form-switch'>
			<input
				className={`form-check-input ${className}`}
				type='checkbox'
				id={id}
				onClick={onClick}
				onChange={onChange}
				checked={checked}
			/>
			<label className='form-check-label' htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default InputSwitch;
