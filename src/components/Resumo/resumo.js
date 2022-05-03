
import ResumoItem from '../ResumoItem/item'
import './style.css'
import {FaRegArrowAltCircleUp, 
        FaRegArrowAltCircleDown, 
        FaDollarSign} from 'react-icons/fa'

const Resumo = ({income, expense, total}) => {


    return(
        <div className='container-resumo'>
            
            <ResumoItem title="Entradas" Icon={FaRegArrowAltCircleUp} value= {income} />
            <ResumoItem title="Saidas" Icon={FaRegArrowAltCircleDown} value= {expense}/>
            <ResumoItem title="Total" Icon={FaDollarSign} value= {total}/>
            
        </div>
    )
}
export default Resumo