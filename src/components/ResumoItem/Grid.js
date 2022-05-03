import React from 'react'
import './Grid.css'
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
        <div className='grid'>
            <thead className=''>
                <tr className='' >
                    <th >Descrição </th>
                    <th > Valor</th>
                   
                </tr>
            </thead>
            <tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </tbody>
        </div>
    )
}

export default Grid