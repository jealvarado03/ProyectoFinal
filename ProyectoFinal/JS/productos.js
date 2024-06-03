console.log("Conectado")



let pagina = 0;
const cantidad = 15;

function mostrarTarjetas() {
    for (let i = pagina * cantidad; i < (pagina + 1) * cantidad && i < datos.bienes.length; i++) {
        let id = i - pagina * cantidad + 1;
        document.getElementById('imagen' + id).src = datos.bienes[i].imagen;
        document.getElementById('nombre' + id).innerText = datos.bienes[i].nombre;
        document.getElementById('categoria' + id).innerText = datos.bienes[i].categoria;
        document.getElementById('codigo' + id).innerText = datos.bienes[i].codigo;
        document.getElementById('precio' + id).innerText = datos.bienes[i].precio;
        document.getElementById('ubicacion' + id).innerText = datos.bienes[i].ubicacion;
        document.getElementById('area' + id).innerText = datos.bienes[i].area;
        document.getElementById('detalles' + id).innerText = datos.bienes[i].detalles;
    }
    document.getElementById('indice').innerText = (pagina + 1); // Actualiza el indicador de página actual
}


function siguiente() {
    if ((pagina + 1) * cantidad < datos.bienes.length) {
        pagina++;
        mostrarTarjetas();
    }
}

function anterior() {
    if (pagina > 0) {
        pagina--;
        mostrarTarjetas();
    }
}

// Llama a mostrarTarjetas al cargar la página para mostrar la primera página
mostrarTarjetas();





function navegar(url) {
    window.location.href = url;
}


