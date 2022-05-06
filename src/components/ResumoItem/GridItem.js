
import './GridItem.css'
import {FaRegArrowAltCircleUp, 
    FaRegArrowAltCircleDown, 
    FaTrash} from 'react-icons/fa'

    const GridItem = ({ item, onDelete }) => {
        return (
            <tr className="griditem">
                <td className='td'>{item.desc}</td>
                <td className='td'>{item.amount}</td>
                <td className='td'>
                    {item.expense ? (
                        <FaRegArrowAltCircleDown color="red"/>
                    ) : (
                        <FaRegArrowAltCircleUp color="green"/>
                    )}
                </td>
                <td > 
                <FaTrash onClick={() => onDelete(item.id)} />
                </td>
            </tr>
        )
    }

    export default GridItem