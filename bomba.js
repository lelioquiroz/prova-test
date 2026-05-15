// Funcionalidades interativas

// Detectar página atual e marcar botão como ativo
function marcarPaginaAtiva() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'bomba.html';
    
    // Remover classe active de todos os botões
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adicionar classe active ao botão da página atual
    if (paginaAtual === 'bomba.html' || paginaAtual === '') {
        document.getElementById('btn-home').classList.add('active');
    } else if (paginaAtual === 'sobre.html') {
        document.getElementById('btn-sobre').classList.add('active');
    } else if (paginaAtual === 'contato.html') {
        document.getElementById('btn-contato').classList.add('active');
    } 
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', marcarPaginaAtiva);

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
