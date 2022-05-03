import React from 'react'
import HeaderItem from './Header'
import './item.css'

const ResumoItem = ({title, Icon, value}) =>{
    return(
        <div className='container-item'>
            <HeaderItem title={title}/> 
             <Icon />
            <h1>{value}</h1>
            
            
             
        </div>
    )
}

export default ResumoItem