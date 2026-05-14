// 1. Seleção de elementos (declaramos apenas UMA vez)
const toggles = document.querySelectorAll('.password-toggle');
const formCadastro = document.getElementById('form-cadastro');
const btnShowEmail = document.getElementById('btn-show-email');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmar-senha');

// 2. Lógica de mostrar/esconder senha (os "zoio")
toggles.forEach((eyeContainer) => {
    const iconOpen = eyeContainer.querySelector('.icon-open');
    const iconClose = eyeContainer.querySelector('.icon-close');
    const input = eyeContainer.parentElement.querySelector('input');

    eyeContainer.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            iconOpen.style.display = 'block';
            iconClose.style.display = 'none';
        } else {
            input.type = 'password';
            iconOpen.style.display = 'none';
            iconClose.style.display = 'block';
        }
    });
});

// 3. Lógica para APARECER o formulário com animação
btnShowEmail.addEventListener('click', () => {
    // Adiciona a classe que definimos no CSS (que já tem o display: flex)
    formCadastro.classList.add('form-animado');
    
    // Scroll suave
    setTimeout(() => {
        const yOffset = -100; 
        const y = formCadastro.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
});

// 4. Validação de Senhas Iguais
formCadastro.addEventListener('submit', (event) => {
    if (senha.value !== confirmaSenha.value) {
        event.preventDefault();
        alert('As senhas não coincidem! Verifique e tente novamente.');
        confirmaSenha.style.borderColor = '#ff4444';
    }
});

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar

    if (senha.value !== confirmaSenha.value) {
        alert('As senhas não coincidem!');
    } else {
        // Se tudo estiver certo, ele vai para a página de vendas
        window.location.href = "vendas.html";
    }
});