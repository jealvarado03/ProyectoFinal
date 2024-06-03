console.log("conectado")


function formatoPrecio() {
    let precioInput = document.getElementById("precio");
    let precio = precioInput.value;

    // Eliminar todos los caracteres que no sean dígitos
    precio = precio.replace(/\D/g, '');

    // Formatear el precio en pesos con separador de miles
    precio = precio.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Actualizar el valor del input
    precioInput.value = precio;
}

function validarCodigo(event) {
    let codigoInput = document.getElementById("codigo").value;
    let mensaje = document.getElementById("mensaje");

    // Verificar la longitud mínima
    if (codigoInput.length < 8) {
        mensaje.textContent = "El código debe tener al menos 8 caracteres";
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Verificar al menos una minúscula
    if (!/[a-z]/.test(codigoInput)) {
        mensaje.textContent = "El código debe contener al menos una minúscula";
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Verificar al menos una mayúscula
    if (!/[A-Z]/.test(codigoInput)) {
        mensaje.textContent = "El código debe contener al menos una mayúscula";
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Verificar mínimo 2 números
    if ((codigoInput.match(/\d/g) || []).length < 2) {
        mensaje.textContent = "El código debe contener al menos 2 números";
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Si pasa todas las validaciones, limpiar el mensaje de error
    mensaje.textContent = "";
}

function guardarDatos() {
	let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let imagen = document.getElementById("imagen").value;
    let codigo = document.getElementById("codigo").value;
    let precio = document.getElementById("precio").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let area = document.getElementById("area").value;
    let detalles = document.getElementById("detalles").value;

	if (nombre !== "" && categoria !== "" && imagen !== "" && codigo !== "" && precio !== "" && ubicacion !== "" && area !== "" && detalles !== "") {

		const nuevaPropiedad = {
            nombre: nombre,
            categoria: categoria,
            imagen: imagen,
            codigo: codigo,
            precio: precio,
            ubicacion: ubicacion,  
            area: area,   
            detalles: detalles    
        };

        console.log(nuevaPropiedad);
		datos.bienes.push(nuevaPropiedad);
		console.log(datos.bienes);
	} else {
		alert("Complete todos los campos");
	}
}

function limpiarCampos() {

    let nombre = document.getElementById("nombre");
    let categoria = document.getElementById("categoria");
    let imagen = document.getElementById("imagen");
    let codigo = document.getElementById("codigo");
    let precio = document.getElementById("precio");
    let ubicacion = document.getElementById("ubicacion");
    let area = document.getElementById("area");
    let detalles = document.getElementById("detalles");

    nombre.value = "";
    categoria.value = "";
    imagen.value = "";
    codigo.value = "";
    precio.value = "";
    ubicacion.value = "";
    area.value = "";
    detalles.value = "";

}

window.onload = limpiarCampos;




