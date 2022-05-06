import React, { useState } from "react";
import './Input.css'

export default props => {
    const [ valor, setValor ] = useState('Inicial')

    return (
        <div className="Input">
            <input value={valor} onChange={ e => setValor(e.target.value)}/>
        </div>
    )
}