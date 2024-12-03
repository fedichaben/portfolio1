window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
// Attendre que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');
    
    // Pour chaque cercle, on met à jour son pourcentage
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', percent); // Applique le pourcentage
    });
});
