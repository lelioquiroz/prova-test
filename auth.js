// Dados de usuários cadastrados
const usuarios = {
    'admin@bomba.com.br': '123mudar'
};

// Elemento de formulário
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// Verificar se usuário já está logado
window.addEventListener('load', function() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        window.location.href = 'sistemaConsulta.html';
    }
});

// Manipular submissão do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const senha = passwordInput.value.trim();
    
    // Limpar mensagens anteriores
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.textContent = '';
    successMessage.textContent = '';
    
    // Validar credenciais
    if (usuarios[email] && usuarios[email] === senha) {
        // Login bem-sucedido
        successMessage.textContent = 'Login realizado com sucesso! Redirecionando...';
        successMessage.style.display = 'block';
        
        // Armazenar usuário logado
        localStorage.setItem('usuarioLogado', email);
        
        // Redirecionar para sistemaConsulta.html após 1 segundo
        setTimeout(function() {
            window.location.href = 'sistemaConsulta.html';
        }, 1000);
    } else {
        // Login inválido
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
        
        // Limpar campos
        emailInput.value = '';
        passwordInput.value = '';
    }
});
