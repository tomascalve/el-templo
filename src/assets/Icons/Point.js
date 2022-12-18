import React from 'react'

const Point = ({ active }) => {
    return (
        <div style={{backgroundColor: active ? 'green' : 'red', borderRadius: '100%', width: '15px', height: '15px'}}>
            
        </div>
    )
}

export default Point;
