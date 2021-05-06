/* eslint-disable */
import React from 'react'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <div style={{margin: '5px 0'}}>
                <input style={{border: hasError && "2px solid red"}} {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </>
    )
}


