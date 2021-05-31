import React from 'react'

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Inventario App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/WebStore/index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/WebStore/view/grupos/grupos.html">Grupos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/WebStore/view/productos/productos.html">Inventario</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/WebStore/view/categorias/categorias.html">Categorias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/WebStore/view/ubicaciones/ubicaciones.html">Ubicaciones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/WebStore/view/nosotros/nosotros.html">Nosotros</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input id="search" className="form-control me-2" onchange="buscar()" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button id="buscar" className="btn btn-outline-light" onclick="buscar()" type="button">Buscar</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
