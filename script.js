function switchCategory(categoryId, event) {
    // Ocultar todas las categorías
    const categories = document.querySelectorAll('.menu-content-category');
    categories.forEach(cat => cat.classList.remove('active'));

    // Quitar la clase active de todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostrar la categoría seleccionada y activar el botón
    document.getElementById(categoryId).classList.add('active');
    event.currentTarget.classList.add('active');
}