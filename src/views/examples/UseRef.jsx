import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

const merge = function(s1, s2) {
    return [...s1].map(function(el,indice){
        return `${el}${s2[indice] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    /* sempre que a variavael value1 for alterada, irá alterar
    o valor de count (current de useRef), mas isso não causa redenrização */
    useEffect(function () {
        count.current++
        myInput2.current.focus() //manda o foco pro input 2  sempre que o valor 1 for alterado
    }, [value1])
    
    // funcao acima porem com semantica arrow
    //useEffect( ef => count.current++, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus() // sempre que o valor2 for alterado joga o foco pro input 1
    }, [value2])

    /* desta forma atualiza sempre o valor de current em toda renderização do componente 
    count.current ++ 
    */   

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2} 
                    value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
