console.log("Conectado")

function filtrar() {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let ubicacion = document.getElementById("ubicacion").value;
    const casasFiltradas = [];
    for (let i = 0; i < datos.bienes.length; i++) {
        if ( (!nombre || datos.bienes[i].nombre === nombre) && ( !categoria || datos.bienes[i].categoria === categoria) && (!ubicacion || datos.bienes[i].ubicacion === ubicacion)) {
            casasFiltradas.push({
                nombre: datos.bienes[i].nombre,
                categoria: datos.bienes[i].categoria,
                imagen: datos.bienes[i].imagen,
                precio: datos.bienes[i].precio,
                ubicacion: datos.bienes[i].ubicacion,
                area: datos.bienes[i].area
            });
        }
    }
    return casasFiltradas;
}


function espera(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();

        }, tiempo);
    });
}

function mostrarResultado(casas) {
    let tabla = document.getElementById("miTabla").getElementsByTagName("tbody")[0];

    tabla.innerHTML = "Cargando...";

    espera(2000).then(() => {

        // Limpiar el contenido actual de la tabla
        tabla.innerHTML = "";

        // Agregar filas a la tabla
        for (let i = 0; i < 10; i++) {
            let fila = document.createElement("tr");

            // Celdas para cada atributo de la casa
            let celdaNombre = document.createElement("td");
            let celdaCategoria = document.createElement("td");
            let celdaPrecio = document.createElement("td");
            let celdaUbicacion = document.createElement("td");
            let celdaArea = document.createElement("td");
            let celdaImagen = document.createElement("td");

            // Texto para cada celda
            let textoNombre = document.createTextNode(casas[i].nombre);
            let textoCategoria = document.createTextNode(casas[i].categoria);
            let textoPrecio = document.createTextNode(casas[i].precio);
            let textoUbicacion = document.createTextNode(casas[i].ubicacion);
            let textoArea = document.createTextNode(casas[i].area);
            let textoImagen = document.createTextNode(casas[i].imagen);

            // Añadir texto a las celdas
            celdaNombre.appendChild(textoNombre);
            celdaCategoria.appendChild(textoCategoria);
            celdaPrecio.appendChild(textoPrecio);
            celdaUbicacion.appendChild(textoUbicacion);
            celdaArea.appendChild(textoArea);
            celdaImagen.appendChild(textoImagen);

            // Añadir celdas a la fila
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaCategoria);
            fila.appendChild(celdaPrecio);
            fila.appendChild(celdaUbicacion);
            fila.appendChild(celdaArea);
            fila.appendChild(celdaImagen);

            // Añadir fila a la tabla
            tabla.appendChild(fila);
        }
    })

}

function ejecutar() {
    let casasFiltradas = filtrar();
    mostrarResultado(casasFiltradas);
}

function limpiar(){
    let nombre = document.getElementById("nombre");
    let categoria = document.getElementById("categoria");
    let ubicacion = document.getElementById("ubicacion");

    nombre.value= "";
    categoria.value = "";
    ubicacion.value = "";
}

function navegar(url) {
    window.location.href = url;
}








