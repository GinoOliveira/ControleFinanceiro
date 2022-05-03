import React from 'react'
import './Header.css'

const HeaderItem = ({title}) =>{
    return(
      <>
        <div className='header'>
          <h4>{title}</h4>
          
        </div>
      </>
    )
}

export default HeaderItem