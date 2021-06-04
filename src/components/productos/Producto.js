import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { ProductoModal } from './ProductoModal'

export const Producto = ( producto ) => {
    
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <tbody >            
            <tr>
                <td>{ producto.index }</td>
                <td>{ producto.name }</td>
                <td>{ producto.quantity }</td>
                <td>{ producto.ubication }</td>
                <td>    
                    <Button
                        variant="primary" 
                        onClick={ () => setModalShow(true) }>
                        Ver
                    </Button>
                </td>
            </tr>

            <ProductoModal
                show={ modalShow }
                onHide={ () => setModalShow(false) }
                {...producto}
            />
        </tbody>
    )
}
