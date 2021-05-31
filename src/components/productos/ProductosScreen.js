import React from 'react'

export const ProductosScreen = () => {
    return (
        <div>
            <h1 className="text-center" > Lista de items disponibles: </h1>
            <hr/>
            <div className="container-xxl my-md-4 bd-layout ">          
                <div id="imprimir" className="float-end d-grid gap-2 justify-content-md-end">
                    <div className="row">
                        <div className="col">
                            
                            <button className="btn btn-primary" tabindex="2" type="button" onclick="imprimirElemento('tabla')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success" tabindex="2" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" onclick="agregarModal()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>        
            </div>

            <div className="table-responsive">
                <table id="tabla" className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Item</th>
                            <th scope="col">Cant.</th>
                            <th scope="col">Ubicación</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="lista"></tbody>
                </table>
            </div>



            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-fullscreen-lg-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalle</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="vistaModal">
                            <div className="row">
                                <div className="col-9">
                                  <form className="form" name="formModal" id="formModal" action="">
                                        <div className="mb-3 row">
                                            <label for="nombre" className="col-sm-3 col-form-label">NOMBRE:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readonly className="form-control-plaintext" id="nombreModal" value="" placeholder="Ingrese el nombre"/>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label for="cantidad" className="col-sm-3 col-form-label">CANTIDAD:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readonly className="form-control-plaintext" min="1" id="cantidadModal" value="" placeholder="1"/>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label for="precio" className="col-sm-3 col-form-label">PRECIO:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readonly className="form-control-plaintext" min="0" id="precioModal" value="" placeholder="0"/>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label for="grupo" className="col-sm-3 col-form-label">GRUPO:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readonly className="form-control-plaintext" id="grupoModal" value="" placeholder=""/>
                                                <select id="selectGrupoModal" name="selectGrupoModal" className="d-none form-select" aria-label=".form-select-lg">
                                                    <option value="" disabled selected>Seleccione una categoria...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label for="ubicacion" className="col-sm-3 col-form-label">UBICACION:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readonly className="form-control-plaintext" id="ubicacionModal" value=""/>
                                                <select id="selectUbicacionModal" name="selectUbicacionModal" className="d-none form-select" aria-label=".form-select-lg">
                                                    <option value="" disabled selected>Seleccione una ubicación...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label for="categoria" className="col-sm-3 col-form-label">CATEGORIA:</label>
                                            <div className="col-sm-6 align-items-end">
                                                <input type="text" readonly className="form-control-plaintext" id="categoriaModal" value=""/>
                                                <select id="selectCategoriaModal" name="selectCategoriaModal" className="d-none form-select" aria-label=".form-select-lg">
                                                    <option value="" disabled selected>Seleccione una categoria...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label for="obs" className="col-sm-3 col-form-label">OBSERVACIÓN:</label>
                                            <div className="col-sm-6 align-items-end">
                                                <input type="text" readonly className="form-control-plaintext" id="obsModal" value="" placeholder="(Opcional)"/>
                                            </div>
                                        </div>
                                    
                                    </form> 
                                </div>
                                <div className="col-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-image rounded float-end" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button id="botonAgregar" className="d-none btn btn-success" data-bs-dismiss="modal" type="submit" onclick="agregarRecargar()">Agregar</button>
                            <button id="botonGuardar" className="d-none btn btn-danger" data-bs-dismiss="modal" type="submit" onclick="">Guardar</button>
                            <button id="botonEditar" className="btn btn-danger" type="submit" onclick="editarModal()">Editar</button>
                            <button id="botonImprimir" className="btn btn-primary" type="submit" onclick="imprimirElemento('vistaModal')">Imprimir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
