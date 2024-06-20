import React, { Component } from 'react'
import loader from './loader.gif'
export default function Spinner() {
    return (
      <div className='text-center'>
        <img src={loader} alt='loading' style={{height:"60px",width:"60px"}}/>
      </div>
    )
}

