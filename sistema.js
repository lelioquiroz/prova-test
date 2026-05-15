// Verificar se usuário está logado
window.addEventListener('load', function() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
    if (!usuarioLogado) {
        // Se não estiver logado, redirecionar para página de login
        window.location.href = 'login.html';
    } else {
        // Exibir usuário logado
        document.getElementById('usuarioLogado').textContent = usuarioLogado;
    }
});

// Função para logout
function logout() {
    if (confirm('Deseja sair do sistema?')) {
        // Remover dados de sessão
        localStorage.removeItem('usuarioLogado');
        
        // Redirecionar para página inicial
        window.location.href = 'bomba.html';
    }
}

// Função para consultar produto
function consultarProduto() {
    const resultadoDiv = document.getElementById('resultadoConsulta');
    const mensagemDiv = document.getElementById('mensagemConsulta');
    
    // Simular consulta a um banco de dados
    const produtos = [
        { id: 1, nome: 'Bomba Alta Pressão', preco: 'R$ 2.500,00', status: 'Disponível' },
        { id: 2, nome: 'Bomba Submersível', preco: 'R$ 1.800,00', status: 'Disponível' },
        { id: 3, nome: 'Bomba Centrífuga', preco: 'R$ 3.200,00', status: 'Disponível' }
    ];
    
    // Selecionar um produto aleatório
    const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
    
    // Exibir resultado
    mensagemDiv.innerHTML = `
        <strong>Produto:</strong> ${produtoAleatorio.nome}<br>
        <strong>Preço:</strong> ${produtoAleatorio.preco}<br>
        <strong>Status:</strong> ${produtoAleatorio.status}
    `;
    
    resultadoDiv.style.display = 'block';
}
