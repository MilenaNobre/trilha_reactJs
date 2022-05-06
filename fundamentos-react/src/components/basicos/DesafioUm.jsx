import React from "react";

export default props => {
    const sort = parseInt(Math.random() * (props.max - props.min)) + props.min
    return (
        <>
            <p> Sorteio entre { props.min } - { props.max }</p>
            <small> O valor sorteado é { sort }</small>
        </>
    )
}