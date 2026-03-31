// ============================================
// GESTION DU MENU HAMBURGER
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// GESTION DU FORMULAIRE DE CONTACT
// ============================================

const formulaireContact = document.getElementById('formulaire-contact');

formulaireContact.addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    // Validation basique
    if (nom === '' || email === '' || sujet === '' || message === '') {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Afficher un message de succès (dans un cas réel, on enverrait à un serveur)
    alert(`Merci ${nom}! Votre message a été reçu. Je vous répondrai à ${email} dans les plus brefs délais.`);

    // Réinitialiser le formulaire
    formulaireContact.reset();

    // Dans un cas réel, on pourrait faire :
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ nom, email, sujet, message })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Message envoyé avec succès!');
    //     formulaireContact.reset();
    // })
    // .catch(error => console.error('Erreur:', error));
});

// ============================================
// ANIMATIONS AU SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes
const cards = document.querySelectorAll('.competence-card, .projet-card, .formation-content');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// ============================================
// SMOOTH SCROLL POUR LES ANCRES
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// BARRE DE NAVIGATION STICKY
// ============================================

let navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll vers le bas
        navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
        // Scroll vers le haut
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// COMPTEUR POUR LES STATISTIQUES
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Appeler si des éléments de comptage existent
const counters = document.querySelectorAll('[data-count]');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const observer2 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counter.classList.contains('animated')) {
            animateCounter(counter, target);
            counter.classList.add('animated');
            observer2.unobserve(counter);
        }
    });
    observer2.observe(counter);
});

// ============================================
// VALIDATION DU FORMULAIRE EN TEMPS RÉEL
// ============================================

const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#27ae60';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--accent-color)';
    });
});

// ============================================
// INITIALISATION
// ============================================

console.log('Portfolio chargé avec succès!');
