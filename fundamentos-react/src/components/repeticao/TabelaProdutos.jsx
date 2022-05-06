import React from "react";
import Products from '../../data/produtos'
import Table from "../layout/Table";

export default props => {
    const title = [
        {id: 1, name: 'ID'},
        {id: 2, name: 'NAME'},
        {id: 3, name: 'PRICE'}
    ]
    return (
        <div>
            <Table conteudo={Products} title={title}/>
        </div>
    )
}