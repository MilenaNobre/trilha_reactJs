import React from "react";
import './Table.css'

export default props => {
    const rowtitle = props.title.map(title => {
        return (
            <th key={title.id}>{title.name}</th>
        )
    })

     const rowContent = props.conteudo.map(row => {
        return (
            <tr key={row.id}>
                <td>{ row.id }</td>
                <td>{ row.name }</td>
                <td>R$ { row.price.toFixed(2).replace('.',',') }</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        { rowtitle }
                    </tr>
                </thead>
                <tbody>
                     { rowContent }
                </tbody>
            </table>
        </div>
    )
}