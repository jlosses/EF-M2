// Validación del formulario de reserva con mensaje de éxito
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar que el formulario sea válido
            if (!form.checkValidity()) {
                e.stopPropagation();
                form.classList.add('was-validated');
                return false;
            }
            
            form.classList.add('was-validated');
            
            // Si es válido, mostrar modal de éxito
            mostrarModalExito();
            
            // Limpiar formulario
            form.reset();
            form.classList.remove('was-validated');
        });
    }

    // Validar fecha mínima
    const inputFecha = document.getElementById('fecha');
    if (inputFecha) {
        const hoy = new Date().toISOString().split('T')[0];
        inputFecha.setAttribute('min', hoy);
    }
});

// Función para mostrar modal de éxito
function mostrarModalExito() {
    const nombre = document.getElementById('nombre').value;
    const modalExito = new bootstrap.Modal(document.getElementById('exitoModal'));
    const nombreExito = document.getElementById('nombreExito');
    nombreExito.textContent = nombre;
    modalExito.show();
}

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
