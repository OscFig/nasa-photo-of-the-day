import React from 'react';
import Text from './Text';

export default function Video(props){
    const { img, data } = props
    return (
        <div>
            <img src={img} alt='' />
            <Text text={data.explanation} />
        </div>
    )
}