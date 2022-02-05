import React from 'react';

export default function Description (props) {
    return (
        <p className="text-light-blue text-center sm:text-base lg:text-left">
            {props.text}
        </p>
    )
}