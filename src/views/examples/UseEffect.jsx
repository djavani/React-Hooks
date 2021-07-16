import React, { useState } from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';


function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

    // Ex #01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)    

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    
    useEffect(function () {
        document.title = fatorial > 10000000 ? 'Eita Doido!' : 'Tá de  Boa'
    }, [fatorial])

    // Ex #02
    const [status, setStatus] = useState("Impar")

    useEffect(function () {
        setStatus(number % 2 === 0 ? "PAR" : "IMPAR")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercicio #1"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Nao existe' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #2" />
            <div className="center">
                <div>
                   <span className="text">Status:</span> 
                   <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
