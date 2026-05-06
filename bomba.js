// Funcionalidades interativas

// Scroll suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicionar evento aos botões "Saiba Mais"
document.querySelectorAll('.bomba1 button, .bomba2 button, .bomba3 button').forEach(button => {
    button.addEventListener('click', function() {
        const titulo = this.previousElementSibling.previousElementSibling.textContent;
        alert('Você clicou em Saiba Mais para: ' + titulo);
    });
});

// Adicionar evento aos links de redes sociais
document.querySelectorAll('.rede a').forEach(link => {
    link.addEventListener('click', function(e) {
        const redesSociais = this.querySelector('p').textContent;
        console.log('Você clicou em: ' + redesSociais);
    });
});

// Log de página carregada
console.log('Página carregada com sucesso!');
