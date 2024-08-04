document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        section.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    });
});
