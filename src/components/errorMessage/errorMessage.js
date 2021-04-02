import React from 'react'
import './errorMessage.css'

const ErrorMessage = () =>{
    return (
        <>
        <img src={process.env.PUBLIC_URL + '/img/errorImage.jpeg'} alt='error'/>
        <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage