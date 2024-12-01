/*
ARQUIVO JAVASCRIPT PRINCIPAL
Este arquivo controla todas as interações e animações do site.
Ele é responsável por:
1. Menu responsivo (hamburguer menu)
2. Scroll suave para as seções
3. Animações de scroll
4. Interação com os botões

DICAS PARA INICIANTES:
- document.querySelector: encontra um elemento no HTML
- addEventListener: faz algo quando um evento acontece (click, scroll, etc)
- classList: adiciona ou remove classes CSS
- window: representa a janela do navegador
*/

/* ==== Turns the menu hamburger into a X ==== */
/* ==== Menu hamburger functionality ==== */
// Pega os elementos do menu
const menuHamburger = document.querySelector('.menu-hamburger');
const navResponsive = document.querySelector('.nav-responsive');
let isMenuOpen = false;

// Função que alterna o menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menuHamburger.classList.toggle('change');
    navResponsive.classList.toggle('active');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

// Quando clicar no menu hamburguer
menuHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Fecha o menu quando clicar em um link
document.querySelectorAll('.nav-responsive a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Fecha o menu quando clicar fora
document.addEventListener('click', (e) => {
    if (isMenuOpen && !menuHamburger.contains(e.target) && !navResponsive.contains(e.target)) {
        toggleMenu();
    }
});

// Scroll sections active link
// Pega as seções e os links do menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Função que verifica se uma seção está visível na tela
function isSectionInView(section) {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    return top >= offset && top < offset + height;
}

// Função que adiciona a classe 'active' ao link da seção visível
function handleScroll() {
    sections.forEach(sec => {
        const id = sec.getAttribute('id');
        if (isSectionInView(sec)) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Adiciona a classe 'active' ao link da seção visível quando rolar a página
window.onscroll = handleScroll;
