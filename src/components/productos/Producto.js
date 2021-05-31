import React from 'react'

export const Producto = ( producto ) => {

    return (
        <tbody >            
            <tr>
                <td>{ producto.index }</td>
                <td>{ producto.name }</td>
                <td>{ producto.quantity }</td>
                <td>{ producto.ubication }</td>
                <td></td>
            </tr>
        </tbody>
    )
}
