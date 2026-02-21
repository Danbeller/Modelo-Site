
const menuItems = [
    
];


let cart = [];


document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
    updateCartUI();
    
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg');
        } else {
            nav.classList.remove('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg');
        }
    });
});

