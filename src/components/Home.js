import React from 'react'

export const Home = () => {
    return (
        <div className="text-center animate__animated animate__fadeInLeft">

            <h1 className="display-4 " >Aqui podras ver los datos en tiempo real</h1>

            <div className="container">
                <div className="row"></div>
                <div className="row">
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="card-header">
                                Items
                            </div>
                            <div className="card-body">
                                <h2 className="card-title" id="numeroProductos">N°</h2>
                                <p className="card-text">Listados</p>
                                <a id="botonUrl" href="view/productos/productos.html" className="btn btn-primary">Ver</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="card-header">
                                Grupos
                            </div>
                            <div className="card-body">
                                <h2 className="card-title" id="numeroGrupos">N°</h2>
                                <p className="card-text">Listados</p>
                                <a id="botonUrl" href="view/grupos/grupos.html" className="btn btn-primary">Ver</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="card-header">
                                Usuarios
                            </div>
                            <div className="card-body">
                                <h2 className="card-title" id="numeroUsuarios">N°</h2>
                                <p className="card-text">Listados</p>
                                <a id="botonUrl" href="/" className="btn btn-primary col align-self-center">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="p-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
