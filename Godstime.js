const slides = document.querySelectorAll('.slide');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;
        if (slideTop < triggerBottom) {
            slide.classList.add('show');
        }
    });
});

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}

// Enroll button -> scroll to contact form and focus name input
const enrollBtn = document.getElementById('enrollBtn');
if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            const nameInput = document.getElementById('name');
            if (nameInput) nameInput.focus();
        }
    });
}
