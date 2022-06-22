import React from 'react'

import produtos from '../data/product'

export default props => {

    function getPtodutoslistItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} = R$ {prod.preco}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getPtodutoslistItem()}
            </ul>
        </div>
    )
}