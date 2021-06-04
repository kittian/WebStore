import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { BotonesProducto } from './BotonesProducto';
import { Producto } from './Producto';

export const ProductosScreen = () => {

    const { loading , data } = useFetch('https://ivnapp-socket-server.herokuapp.com/api/product/products');
    return (
        <>
            <h1 className="text-center" > Lista de items disponibles: </h1>
            <hr/>
            
                { loading &&
                    <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div> 
                }

                { !loading &&
                    <div className="animate__animated animate__fadeInLeft">
                        <BotonesProducto />                      
        
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
                                    {
                                        data.data.map( (producto, index) => (
                                    
                                            <Producto 
                                                key={ producto.uid }
                                                index={ index + 1 }
                                                { ...producto }
                                            />

                                        ))
                                    }
                            </table>
                        </div>
                    </div>
                }



            
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <label htmlFor="nombre" className="col-sm-3 col-form-label">NOMBRE:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readOnly className="form-control-plaintext" id="nombreModal" value="" placeholder="Ingrese el nombre"/>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="cantidad" className="col-sm-3 col-form-label">CANTIDAD:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readOnly className="form-control-plaintext" min="1" id="cantidadModal" value="" placeholder="1"/>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="precio" className="col-sm-3 col-form-label">PRECIO:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readOnly className="form-control-plaintext" min="0" id="precioModal" value="" placeholder="0"/>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="grupo" className="col-sm-3 col-form-label">GRUPO:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readOnly className="form-control-plaintext" id="grupoModal" value="" placeholder=""/>
                                                <select id="selectGrupoModal" name="selectGrupoModal" className="d-none form-select" aria-label=".form-select-lg">
                                                    <option value="" disabled selected>Seleccione una categoria...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="ubicacion" className="col-sm-3 col-form-label">UBICACION:</label>
                                            <div className="col-sm-6">
                                                <input type="text" readOnly className="form-control-plaintext" id="ubicacionModal" value=""/>
                                                <select id="selectUbicacionModal" defaultValue name="selectUbicacionModal" className="d-none form-select" aria-label=".form-select-lg">
                                                    <option value="" disabled selected>Seleccione una ubicación...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="categoria" className="col-sm-3 col-form-label">CATEGORIA:</label>
                                            <div className="col-sm-6 align-items-end">
                                                <input type="text" readOnly className="form-control-plaintext" id="categoriaModal" value=""/>
                                                <select id="selectCategoriaModal" name="selectCategoriaModal" className="d-none form-select" aria-label=".form-select-lg">
                                                    <option value="" disabled selected>Seleccione una categoria...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="obs" className="col-sm-3 col-form-label">OBSERVACIÓN:</label>
                                            <div className="col-sm-6 align-items-end">
                                                <input type="text" readOnly className="form-control-plaintext" id="obsModal" value="" placeholder="(Opcional)"/>
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
                            <button id="botonAgregar" className="d-none btn btn-success" data-bs-dismiss="modal" type="submit">Agregar</button>
                            <button id="botonGuardar" className="d-none btn btn-danger" data-bs-dismiss="modal" type="submit">Guardar</button>
                            <button id="botonEditar" className="btn btn-danger" type="submit" >Editar</button>
                            <button id="botonImprimir" className="btn btn-primary" type="submit" >Imprimir</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
