/* eslint-disable */

import React from 'react'

export const required = value => {
    if (value)  return undefined
    return <span style={{color: "red"}}>Please, fill in the field!</span>
}


export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? <span style={{color: "red"}}>Invalid email address!</span>
        : undefined


export const password = value =>
    value && value.length < 6
        ? <span style={{color: "red"}}>Password should contain at least 6 symbols!</span>
        : undefined
