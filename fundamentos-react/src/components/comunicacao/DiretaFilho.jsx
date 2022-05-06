import React from "react";

export default props => {
    return (
        <div>
            <span>{ props.nome } - { props.idade } - { props.nerd ? 'Verdadeiro' : 'Falso' } </span>
        </div>
    )
}