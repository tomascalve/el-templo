import React from 'react'
import useStyles from './useStyles';
import './TextArea.scss'

// TODO revisar el margen interior del text area (que no existe y debería existir)
const TextArea = ({
    onBlur,
    onFocus,
    disabled,
    onChange,
    type = 'text',
    name,
    className,
    label,
    value,
    placeholder
}) => {
    const styles = useStyles()

    return (
        <div
            className={styles.container}
        >
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.textAreaContainer}>
                <textarea
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={disabled}
                    onChange={onChange}
                    type={type}
                    name={name}
                    className={styles.textArea}
                    value={value}
                    placeholder={placeholder}
                    rows={4}
                    maxLength='500'
                />
            </div>
        </div>
    )
}

export default TextArea