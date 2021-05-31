import React from 'react'

export const VersionScreen = () => {
    return (
        <div>
            <h1 className="text-center"> Aqui podras descargar la app de inventario </h1>
            <hr/>  
            <p className='text-center' >
                Een esta poagna podras descargar la ultima version disponible de android  que se comunica con la API de este sitio
            </p>
            <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                    <h5 className="card-title">Aqui podras descargar la app de inventario</h5>
                    <p className="card-text">Espero que te sea de utilidad acuerdate de dar permisos de origenes desconocidos para poder instalar esta app</p>
                    <a href="https://github.com/carlossdf1/WebStore/releases/download/v1.0.7/InvApp-v1.0.1.apk" download="InvApp-v1.0.1.apk" className="btn btn-primary">Descargar</a>
                </div>
                <div className="card-footer text-muted"></div>
            </div>
        </div>
    )
}
