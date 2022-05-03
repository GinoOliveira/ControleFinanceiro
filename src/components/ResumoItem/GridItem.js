import styled from "styled-components"
import './GridItem.css'
import {FaRegArrowAltCircleUp, 
    FaRegArrowAltCircleDown, 
    FaTrash} from 'react-icons/fa'

    const GridItem = ({ item, onDelete }) => {
        return (
            <tr className="griditem">
                <td>{item.desc}</td>
                <td>{item.amount}</td>
                <td alignCenter>
                    {item.expense ? (
                        <FaRegArrowAltCircleDown color="red"/>
                    ) : (
                        <FaRegArrowAltCircleUp color="green"/>
                    )}
                </td>
                <td alignCenter> 
                <FaTrash onClick={() => onDelete(item.id)} />
                </td>
            </tr>
        )
    }

    export default GridItem