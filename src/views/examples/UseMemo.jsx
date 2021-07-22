import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

/*
A ideia aqui é resolver um problema de delay que ocorre
em qualquer interação de componente, no caso o delay (a consulta)
só deveria afetar o input 1 e 2, e temos que isolar o input3 que
não está fazendo nenhuma interação de "consulta", como os demais
*/
function sum(a, b) {
    const future = Date.now() + 2000 //simulando um delay
    while(Date.now() < future) {} //espera...2s    
    return a + b
}

const UseMemo = (props) => {
    
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    // desta forma qualquer componente alterado irá provocar o delay    
    //const result = sum(n1, n2)

    //Usando o useMemo e isolando apenas os componentes/states que compoe o calculo [n1, n2]
    const result = useMemo( () => sum(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input" 
                    value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" 
                    value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" 
                    value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
