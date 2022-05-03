import React, {useState} from 'react'
import './Form.css'
import Grid from './ResumoItem/Grid'



const Form = ({handleAdd, transactionsList, setTransactionsList}) =>{

    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExprense, setExpense] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () =>{
        if(!desc || !amount) {
            alert("Informe a descrição e o valor!")
            return
        }else if(amount < 1){
            alert("O valor tem que ser positivo")
            return
        }else{
            alert("Itens inserido com sucesso!")
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExprense,
        }

        handleAdd (transaction)

        setDesc("")
        setAmount("")

    }

    return(
      <div>
        <div className='form'>
                <label>Descrição</label>
                <input placeholder='Compreas ou ganhos' className='input' value={desc} onChange={(e) => setDesc(e.target.value)}  />
                <label>Valor</label>
                <input placeholder='Valores entrada ou saida' className='input' type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  />

                <input  className='radiogroup' type='radio' id="rIcone"  name='grop1'
                onChange={() => setExpense(!isExprense)} />
                <label htmlFor='rIcone' >Saída</label>
                <input defaultChecked="true" className='radiogroup' type='radio' id="rExpenses" name='grop1'
                onChange={() => setExpense(!isExprense)} />
                <label htmlFor='rExpenses' >Entrada</label>
                <button onClick={handleSave} className='button'>Adicionar</button>  
        </div>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
      </div>
    )
}

export default Form