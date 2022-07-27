import React from 'react'

function Header(props){
    
    return(
        // se retornan etiquetas html ... siempre
            <h1 className="encabezado">{props.titulo}</h1>
    )
}

export default Header
// esta linea siempre debe de agregarse