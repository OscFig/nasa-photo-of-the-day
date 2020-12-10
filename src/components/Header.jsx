import React from 'react'
import Image from './Image'

export default function Header(props) {
    const { data } = props;
    // console.log(props,'props')
    // console.log(data,'data')
    return (
        <div>
            <h1>{data.title}</h1>
            <i>{data.date}</i>
            <Image data={data} img={data.url}/>
        </div>
        
    )

}
