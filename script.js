// ESTE ARQUIVO CONTROLA ALGUNS EFEITOS VISUAIS SIMPLES

// Quando a página terminar de carregar o DOM
document.addEventListener('DOMContentLoaded', function() {
    // Ativa rolagem suave para a página inteira
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Pega o título do topo (hero)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Espera 600ms e mostra o título com efeito (classe CSS .revealed)
        setTimeout(() => heroTitle.classList.add('revealed'), 600);
    }
    
    // Se existir link interno começando com #, faz rolar suave até a seção
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita pulo instantâneo
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Efeito de "subir" levemente o botão quando o mouse passa em cima
// (Segundo DOMContentLoaded separado só pra esse bloco mesmo)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-outline-primary'); // Todos os botões de link
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)'; // Sobe 3px
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)'; // Volta quase (leve efeito de suavidade visual)
        });
    });
});