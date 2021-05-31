const api = "https://ivnapp-socket-server.herokuapp.com/api/";

/**
 * corta el string busqueda en un array de palabras para comparar
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @version 2021-05-06
 */

function cortaPalabras(texto) {

    let palabras = [];
    let palabra = '';
    for ( let letra = 0; letra < texto.length; letra++ ) {
        if ( texto[letra] !== ' ' ) {
            palabra += texto[letra];
        } else if ( palabra !== '' ) {
            palabras.push( palabra );
            palabra = '';
        }

        if ( letra == texto.length - 1 && palabra !== '') palabras.push( palabra );
    }

    console.log(palabras);
    return palabras;
}

/**
 * Función que rescata los datos de la api
 *
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @version 2021-05-06
 */

function consulta(url) {
    return new Promise(( resolve, reject ) => {
        const requestOptions = { method: 'GET', redirect: 'follow' };

        fetch(url, requestOptions)
            .then( response => response.json() )
            .then( data     => { resolve( JSON.parse( JSON.stringify( data ) ) ); })
            .catch( err     => console.log( err ))
    });
}

/**
 * Función que imprime la tabla productos en la vista
 * 
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @version 2021-05-11
 */

function imprimirLista( datos ) { //imprime los datos entregados en lista html
    console.log("DATOS RECIBIDOS");
    const td    = "</td><td>";
    let boton   = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' ";
    datos.sort((a, b) => a.name.localeCompare ( b.name ));
    
    for (let i in datos) {
        const data = datos[i];
        const com = '"';

        document.getElementById("lista").innerHTML +=
            '<tr scope="row"><td>' +
            i + td +
            data.name + td +
            //data.price + td +
            data.quantity + td +
            //data.category + td +
            data.ubication + td +
            //elementoVacio(data.observations) + td +
            boton + "onclick='vistaModal(" + com + data.uid + com + ");'>Ver</button>" +
            '</td></tr>';
    }

}

/**
 * Función que muestra la vista modal del producto especifico
 * 
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @version 2021-05-24
 */

function vistaModal(id) {

    if ( document.getElementById("nombreModal").className !== "form-control-plaintext") bloquearModal();

    const modalProducto = listaProductos.filter(listaProductos => listaProductos.uid === id);

    console.log( { modalProducto } );

    document.formModal.nombreModal.value               = modalProducto[0].name;
    document.formModal.cantidadModal.value             = modalProducto[0].quantity;
    document.formModal.precioModal.value               = modalProducto[0].price;
    document.formModal.grupoModal.value                = modalProducto[0].group;
    document.formModal.ubicacionModal.value            = modalProducto[0].ubication;
    document.formModal.categoriaModal.value            = modalProducto[0].category;
    document.formModal.obsModal.value                  = elementoVacio( modalProducto[0].observations );

    document.formModal.selectCategoriaModal.value      = modalProducto[0].category;
    document.formModal.selectUbicacionModal.value      = modalProducto[0].ubication;
    document.formModal.selectGrupoModal.value          = modalProducto[0].group;

    document.getElementById("botonAgregar").className  = "d-none btn btn-success";
    document.getElementById("botonGuardar").className  = "d-none btn btn-danger";
    document.getElementById("botonEditar").className   = "btn btn-danger";
    document.getElementById("botonImprimir").className = "btn btn-primary";

    console.log({ modalProducto });

}

/**
 * Función identifica si el valor esta defenido o no, si lo esta devuelve un string vacio si no devuelve el dato
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @version 2021-05-06
 */

function elementoVacio(dato) {
    (dato === undefined) ? dato = "": dato;
    return dato;
}

/**
 * Función que busca las concidencias de la busqueda y una lista de resultados
 *
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @version 2021-05-06
 */

function buscar() {

    console.log("BUSCANDO")
    const palabras        = normalizar( document.getElementById("search").value );
    let busqueda          = cortaPalabras( palabras );
    let resultadoBusqueda = [];

    console.log( busqueda );

    if ( busqueda.length >= 1 ) {

        document.getElementById("lista").innerHTML = "";

        for ( let i in listaProductos ) {

            let data     = listaProductos[i];
            let contador = 0;

            for ( let b in busqueda ) {

                let coincidecia = false;

                for ( let x in data ) {
                    let e = data[x];
                    if ( e != data.uid && normalizar(e).includes( busqueda[b] ) == true ) coincidecia = true; //busca solo la concidencia por fila
                }

                if (coincidecia == true) contador++;
            }

            if ( contador == busqueda.length ) resultadoBusqueda.push( data );
        }

    } else { console.log( "NO HAY DATOS" ) }

    imprimirLista( resultadoBusqueda );
    console.log( resultadoBusqueda );

    return resultadoBusqueda

}

/**
 * Función que permite imprimir o guardar en PDF
 *
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @version 2021-05-06
 */

function imprimirElemento( id ) {

    let elemento    = document.getElementById( id );
    let ventana     = window.open('', 'PRINT', 'height=400,width=600');

    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6' crossorigin='anonymous'>");
    ventana.document.write('</head><body>');
    ventana.document.write( elemento.outerHTML );
    ventana.document.write('</body></html>');

    if ( elemento.id === "vistaModal" ) ventana = obtenerModal( ventana );

    ventana.document.close();
    ventana.focus();
    setTimeout( () => ventana.print(), 1000 );
    return true;
}

/**
 * Función que muestra cada linea de informacion en un modal
 *
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @version 2021-05-06
 */

function obtenerModal(ventana) {

    ventana.document.formModal.nombreModal.value    = document.formModal.nombreModal.value;
    ventana.document.formModal.cantidadModal.value  = document.formModal.cantidadModal.value;
    ventana.document.formModal.precioModal.value    = document.formModal.precioModal.value;
    ventana.document.formModal.grupoModal.value     = document.formModal.grupoModal.value;
    ventana.document.formModal.ubicacionModal.value = document.formModal.ubicacionModal.value;
    ventana.document.formModal.categoriaModal.value = document.formModal.categoriaModal.value;
    ventana.document.formModal.obsModal.value       = document.formModal.obsModal.value;

    return ventana;
}

/**
 * Función que formatea string
 *
 * @author Emmanuel Correa <ebcorrea[at]gmail.com>
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @version 2021-05-06
 */

function normalizar(str) {

    str = str.toString();
    str = str.toLowerCase();
    str = str.normalize("NFD").replace(/[\u0300-\u0301]/g, "");
    return str;

}

/**
 * Función que desbloqea los input del modal para ingresar datos.
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorreac[at]gmail.com>
 * 
 * @version 2021-05-24
 */

function editarModal() {

    document.formModal.nombreModal.readOnly                   = false;
    document.formModal.cantidadModal.readOnly                 = false;
    document.formModal.precioModal.readOnly                   = false;
    document.formModal.obsModal.readOnly                      = false;
        
    document.formModal.cantidadModal.type                     = "number";
    document.formModal.precioModal.type                       = "number";

    document.getElementById("nombreModal").className          = "form-control";
    document.getElementById("cantidadModal").className        = "form-control";
    document.getElementById("precioModal").className          = "form-control";
    document.getElementById("grupoModal").className           = "d-none form-control";
    document.getElementById("ubicacionModal").className       = "d-none form-control";
    document.getElementById("categoriaModal").className       = "d-none form-control";
    document.getElementById("obsModal").className             = "form-control";
    document.getElementById("selectCategoriaModal").className = "form-select";
    document.getElementById("selectUbicacionModal").className = "form-select";
    document.getElementById("selectGrupoModal").className     = "form-select";

    document.getElementById("botonGuardar").className         = "btn btn-danger";
    document.getElementById("botonImprimir").className        = "d-none btn-primary";
    document.getElementById("botonEditar").className          = "d-none btn-danger";
}

/**
 * Función que bloquea los elemetos del modal
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorreac[at]gmail.com>
 * 
 * @version 2021-05-24
 */

function bloquearModal() {

    document.formModal.nombreModal.readOnly                   = true;
    document.formModal.cantidadModal.readOnly                 = true;
    document.formModal.precioModal.readOnly                   = true;
    document.formModal.grupoModal.readOnly                    = true;
    document.formModal.ubicacionModal.readOnly                = true;
    document.formModal.categoriaModal.readOnly                = true;
    document.formModal.obsModal.readOnly                      = true;
        
    document.formModal.cantidadModal.type                     = "text";
    document.formModal.precioModal.type                       = "text";

    document.getElementById("nombreModal").className          = "form-control-plaintext";
    document.getElementById("cantidadModal").className        = "form-control-plaintext";
    document.getElementById("precioModal").className          = "form-control-plaintext";
    document.getElementById("grupoModal").className           = "form-control-plaintext";
    document.getElementById("ubicacionModal").className       = "form-control-plaintext";
    document.getElementById("categoriaModal").className       = "form-control-plaintext";
    document.getElementById("obsModal").className             = "form-control-plaintext";
    document.getElementById("selectCategoriaModal").className = "d-none form-select";
    document.getElementById("selectUbicacionModal").className = "d-none form-select";
    document.getElementById("selectGrupoModal").className     = "d-none form-select";
}

/**
 * Función que resetea los input y botones del model
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorreac[at]gmail.com>
 * 
 * @version 2021-05-24
 */

function agregarModal() {

    editarModal();

    document.formModal.nombreModal.value    = "";
    document.formModal.cantidadModal.value  = "";
    document.formModal.precioModal.value    = "";
    document.formModal.obsModal.value       = "";

    document.formModal.selectCategoriaModal.value = "";
    document.formModal.selectUbicacionModal.value = "";
    document.formModal.selectGrupoModal.value     = "";

    document.getElementById("botonAgregar").className   = "btn btn-success";
    document.getElementById("botonEditar").className    = "d-none btn btn-danger";
    document.getElementById("botonImprimir").className  = "d-none btn-primary";
    document.getElementById("botonGuardar").className   = "d-none btn-danger";

}

/**
 * Función que permite agregar atravez de un objeto un nuevo producto a la bd
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorreac[at]gmail.com>
 * 
 * @version 2021-05-24
 */

 function addData( data, route  ) {

    const myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );

    const requestOptions = {
    
        method  : 'POST',
        headers : myHeaders,
        body    : data,
        redirect: 'follow'
    
    };

    console.log( data );
    console.log( requestOptions );

    fetch( api + route, requestOptions )
    .then( response => response.text() )
    .then(  result  => console.log( result ) )
    .catch( error   => console.log('error', error ) );

}

/**
 * Función que permite agregar atravez de un objeto un nuevo producto a la bd
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorreac[at]gmail.com>
 * 
 * @version 2021-05-24
 */

function agregarProducto() {

    const myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );

    let data = JSON.stringify({

        "name"        : document.formModal.nombreModal.value,
        "img"         : "",
        "category"    : document.formModal.selectCategoriaModal.value,
        "quantity"    : document.formModal.cantidadModal.value,
        "price"       : document.formModal.precioModal.value,
        "ubication"   : document.formModal.selectUbicacionModal.value,
        "group"       : document.formModal.selectGrupoModal.value,
        "observations": document.formModal.obsModal.value,
    
    });

    const requestOptions = {
    
        method  : 'POST',
        headers : myHeaders,
        body    : data,
        redirect: 'follow'
    
    };

    console.log( data );
    console.log( requestOptions );

    fetch( api + "product/new", requestOptions )
        .then( response => response.text() )
        .then(  result  => console.log( result ) )
        .catch( error   => console.log('error', error ) );

}

/**
 * Permite agregar un producto y recargar la lista para que sea visualizado
 *
 * @author Carlos Correa   <carlos.sdf1[at]gmail.com>
 * @author Emmanuel Correa <ebcorreac[at]gmail.com>
 * 
 * @version 2021-05-12
 */

function agregarRecargar(){
    agregarProducto();
    setTimeout(() => imprimir(), 1000);
}