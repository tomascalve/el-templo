import React from 'react'
import Text from '../Text/Text'
import useStyles from './useStyles'
import './Tag.scss'

const Tag = ({ text, onClick = () => {}, type = 1, color = 2 }) => {
    const styles = useStyles({type})
    return (
        <div
            className={styles.tagContainer}
            onClick={onClick}
        >
            <Text text={text} color={color} bold={type===2} />
        </div>
    )
}

export default Tag