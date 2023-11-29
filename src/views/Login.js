document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtenha os valores do formulário
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simples lógica de validação de login (substitua por uma lógica real no seu aplicativo)
        if (username === 'usuario' && password === 'senha') {
            document.getElementById('loginMessage').innerText = 'Login bem-sucedido!';
        } else {
            document.getElementById('loginMessage').innerText = 'Credenciais inválidas. Tente novamente.';
        }
    });
});