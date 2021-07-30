import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    // DataContext irá carregar todos os dados do objeto da "api" DataContext.js
    const context = useContext(DataContext)

    function addNumber(delta) {
        context.setState({
            ...context.state, // spread para importar todos os valores do objeto e alterar apenas a propriedade que quero "number", senao iria alterar todo o objeto
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"/>
            
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            </div>
            <div>
                <button className="btn"
                    onClick={() => addNumber(-1)}>-1</button>
                <button className="btn"
                    onClick={() => addNumber(+1)}>+1</button>
            </div>
        </div>
    )
}

export default UseContext
