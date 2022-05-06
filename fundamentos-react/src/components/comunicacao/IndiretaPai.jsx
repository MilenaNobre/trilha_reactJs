import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [ nome, setNome ] = useState('?')
    const [ idade, setIdade ] = useState(0)
    const [ nerd, setNerd ] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
    }
    return (
        <div>
            <div> { nome } - { idade } - { nerd ? 'Verdadeiro' : 'Falso'} </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}