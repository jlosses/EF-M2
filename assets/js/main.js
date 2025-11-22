// Validación básica del formulario de reserva
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Validar que el formulario sea válido
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }

    // Validar fecha mínima
    const inputFecha = document.getElementById('fecha');
    if (inputFecha) {
        const hoy = new Date().toISOString().split('T')[0];
        inputFecha.setAttribute('min', hoy);
    }
});

// Manejo del modal al hacer clic en corazón
const reservaModal = document.getElementById('reservaModal');
if (reservaModal) {
    reservaModal.addEventListener('show.bs.modal', function(event) {
        const boton = event.relatedTarget;
        const nombrePlatillo = boton.getAttribute('data-dish');
        const dishNameElement = document.getElementById('dishName');
        
        if (dishNameElement) {
            dishNameElement.textContent = nombrePlatillo;
        }
    });
}
