/* ===================================================================
 * Funcionalidades básicas para la navegación y resaltado de enlaces
 * -------------------------------------------------------------------
 */

// Resaltar el enlace activo (para "Iniciar sesión")
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active')); // Elimina el resalto de los demás
            this.classList.add('active'); // Agrega el resalto al enlace clickeado
        });
    });
});
