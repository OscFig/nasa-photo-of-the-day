import React from 'react';

export default function Text(props) {
    const {text} = props
    return (
        <div className='main-txt'>
            <p>{text}</p> 
        </div>
    )
}
