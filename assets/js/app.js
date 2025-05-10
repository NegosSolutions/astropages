// Selecciona el elemento input con la clase correcta
var check = document.querySelector(".toggle-state");

// Verifica si el elemento existe antes de agregar el evento
if (check) {
    check.addEventListener('click', idioma);
}

function idioma() {
    // Comprueba si el checkbox está marcado
    let id = check.checked;
    if (id) {
        // Redirige al usuario a la página deseada
        location.href = "es.html";
    }else{
        location.href = "index.html";
    }
}