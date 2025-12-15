document.addEventListener("DOMContentLoaded", () => {

    const imagenes = [
        "img/UH.jpeg",
        "img/logo.jpeg",
        "img/imagen3.jpeg"
    ];

    let index = 0;

    const img = document.getElementById("imagen");
    const btnInicio = document.getElementById("btnInicio");

    if (!img || !btnInicio) {
        console.error("❌ Error: imagen o botón Inicio no encontrado");
        return;
    }

    btnInicio.addEventListener("click", () => {
        index = (index + 1) % imagenes.length;
        img.src = imagenes[index];
    });

});
