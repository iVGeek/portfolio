// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect on Scroll for Planet
window.addEventListener('scroll', function() {
    const planet = document.querySelector('.planet');
    const scrollPosition = window.scrollY;
    planet.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});
