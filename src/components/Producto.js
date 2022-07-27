import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    const {nombre, precio, id} = producto

    const seleccionarProducto = id =>{
        const producto = productos.filter(producto =>producto.id ===id)[0];
        agregarProducto([
            ...carrito,
            producto
        ])
     }
    //elimina el producto del carrito
    const eliminarProducto = id =>{
        const producto = carrito.filter(producto =>producto.id !== id)
        //coloca los state en el state
        agregarProducto(producto)
    }

    
    return(
              
       <div>
        <tr>
            <td width={300}>
            <h2>{nombre}</h2></td>
            <td width={100}>
            <p>$ {precio} .00 </p></td>
            
        {productos

        ? ( <button
            type="button"
            onClick={()=>seleccionarProducto(id)}
            >Comprar</button>
          )
         :
          ( <button
                type="button"
                onClick={()=>eliminarProducto(id)}
                >Eliminar</button>
          )
                   
        }
        </tr>
        </div>
    )
}

export default Producto