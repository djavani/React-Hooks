import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

/*
em uma pagina com dois componentes (pai e filho) passando uma
funcao de callback para setar a renderizacao apenas do componente
que esta sofrendo modificacao (contador), não é necessário renderizar
o componente Botoes a cada novo valor do contador, por isso foi passado 
como argumento da funcao o setCount, pois é instanciado uma unica vez
*/
const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])
   

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">
                <div className="center">
                    <span className="text">{count}</span>
                </div>

                <div>
                    <UseCallbackButtons inc={inc} />
                </div>
            </div>
        </div>
    )
}

export default UseCallback
