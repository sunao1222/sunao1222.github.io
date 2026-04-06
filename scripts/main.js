// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((element) => {
    observer.observe(element);
});

// Glass header effect on scroll
const header = document.querySelector('.glass-header');
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(30, 41, 59, 0.4)';
            header.style.boxShadow = 'none';
        }
    }
});

// Interactive Custom Cursor Background Blob
const interactiveBlob = document.querySelector('.blob-interactive');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let blobX = mouseX;
let blobY = mouseY;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateBlob() {
    // Easing formula for smooth lagging follow effect
    blobX += (mouseX - blobX) * 0.04;
    blobY += (mouseY - blobY) * 0.04;
    
    if (interactiveBlob && (blobX !== 0 || blobY !== 0)) {
        interactiveBlob.style.transform = `translate(${blobX}px, ${blobY}px)`;
    }
    
    requestAnimationFrame(animateBlob);
}

// Start animation loop
animateBlob();
