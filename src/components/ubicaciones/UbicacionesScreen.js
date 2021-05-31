import React from 'react'

export const UbicacionesScreen = () => {
    return (
        <div>
            <h1 className="text-center" > Lista de ubicaciones disponibles: </h1>
            <hr/>
                <div className="container-xxl my-md-4 bd-layout ">
                    <div className="table-responsive">
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
                </div>
        </div>
    )
}
