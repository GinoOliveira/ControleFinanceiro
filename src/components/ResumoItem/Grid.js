import React from 'react'
import './GridStyle.css'
import './GridItem'
import GridItem from './GridItem'
import Tabela from './Tabela'


const Grid = ({ itens, setItens}) =>{
    const onDelete = (ID) => { 
    const newArray = itens.filter((transaction) => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
    }
    return(

        <div className="grid-container" > 
        
        <thead>
          <tr>
            
            <th className='th' >Descrição</th>
            
            
          </tr>
        </thead>
        <tbody>
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </tbody>
      
      </div>
    )
}

export default Grid