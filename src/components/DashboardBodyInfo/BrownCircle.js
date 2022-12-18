import React from 'react'
import Text from '../Text/Text'

export const BrownCircle = ({ value }) => {
    return (
        <div style={{
            backgroundColor: '#2e4f77',
            height: '55px',
            width: '55px',
            borderRadius: '100%',
            boxShadow: '3px 3px 10px rgba(0,0,0,.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '8px'
        }}>
            <Text text={value + '%'} bold color={2} />
        </div>
    )
}
