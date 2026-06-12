// Essa função roda assim que o navegador começa a carregar o script
(function verificarAcesso() {
    const sessao = localStorage.getItem('sessao_ativa');

    // Se NÃO existir a sessão ativa, bloqueia na hora
    if (!sessao) {
        alert("Acesso negado! Por favor, faça login primeiro.");
        window.location.href = "index.html";
    }
})();

// Função para o botão de sair
function logout() {
    localStorage.removeItem('sessao_ativa');
    window.location.href = "index.html";
}

// Função de redirecionamento atualizada apenas com o produto 2
function redirecionarCompra(produto) {
    const links = {
        'produto2': '../landingpage.html' // <--- Só trocar pelo caminho real da sua nova LP
    };

    if (links[produto]) {
        // Redireciona na mesma aba, resolvendo o problema do "../" perfeitamente
        window.location.href = links[produto];
    } else {
        console.error("Link do produto não encontrado!");
    }
}