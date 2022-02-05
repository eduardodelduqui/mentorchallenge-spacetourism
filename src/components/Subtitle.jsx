import React from 'react';

export default function Subtitle (props) {
    return (
        <p className={`flex justify-center gap-4 font-barlowCondensed text-white uppercase pb-8 sm:text-xl sm:justify-start sm:pb-[60px] ${props.className}`}>
            <span className="opacity-25 font-bold">{props.number}</span>
            {props.text}
        </p>
    )
}