// Gestion de la modal Glasgow
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('glasgowModal');
    const trigger = document.querySelector('.glasgow-trigger');
    const closeBtn = document.querySelector('.close');

    // Ouvrir la modal
    trigger.onclick = function() {
        modal.style.display = "block";
    }

    // Fermer avec le X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer en cliquant en dehors
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
