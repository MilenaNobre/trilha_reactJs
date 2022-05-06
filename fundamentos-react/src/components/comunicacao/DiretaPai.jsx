import React from "react";
import DiretaFilho from "./DiretaFilho";


export default props => {
    return (
        <div>
            <DiretaFilho nome="Luis" idade={15} nerd={true} />
            <DiretaFilho nome="Antônio" idade={10} nerd={false} />
            <DiretaFilho nome="Carlos" idade={25} nerd={true} />
        </div>
    )
}