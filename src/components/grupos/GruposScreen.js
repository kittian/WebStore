import React from 'react'

export const GruposScreen = () => {
    return (
        <div>
            <h1 className="text-center" > Lista de grupos disponibles: </h1>
            <hr/>
            <div className="container-xxl my-md-4 bd-layout ">
                <div className="row">
                    <div className="col-11">
                        <table id="tabla" className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col ">Nombre</th>
                                </tr>
                            </thead>
                            <tbody id="lista">
                            </tbody>
                        </table>
                    </div>
                    <div className="col-1">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button id="imprimir" className="btn btn-primary me-md-2" type="button">Imprimir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
