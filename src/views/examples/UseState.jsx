import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Inicial...")
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <buton className="btn"
                    onClick={() => setCount(count -1)}>-1</buton>
                    <buton className="btn"
                    onClick={() => setCount(count +1)}>+1</buton>
                    <buton className="btn"
                    onClick={() => setCount(100)}>100</buton>
                    <buton className="btn"
                    onClick={() => setCount(atual => atual + 1000)}>+1000</buton>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <input type="text" className="input" 
            value={name} onChange={e => setName(e.target.value)}/>
        </div>
    )
}

export default UseState
