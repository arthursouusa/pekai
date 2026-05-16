// Essa função roda assim que o navegador começa a carregar o script
(function verificarAcesso() {
    const sessao = localStorage.getItem('sessao_ativa');

    // Se NÃO existir a sessão ativa, bloqueia na hora
    if (!sessao) {
        alert("Acesso negado! Por favor, faça login primeiro.");
        window.location.href = "index.html";
    }
})();

// Função para o botão de sair (que a gente já tinha feito)
function logout() {
    localStorage.removeItem('sessao_ativa');
    window.location.href = "index.html";
}