// 1. SELEÇÃO DE ELEMENTOS (Sem repetições)
const toggles = document.querySelectorAll('.password-toggle');
const formCadastro = document.getElementById('form-cadastro');
const btnShowEmail = document.getElementById('btn-show-email');
const inputSenha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmar-senha');
const googleBtn = document.getElementById('google-login-btn');
const linkLogin = document.querySelector('.fazer-login a');

// 2. FUNÇÃO CENTRAL DE SALVAMENTO (O seu "Mini Banco")
function salvarUsuarioNoBanco(novoUsuario) {
    let lista = JSON.parse(localStorage.getItem('usuarios_pekai') || '[]');
    const existe = lista.find(u => u.email === novoUsuario.email);
    
    if (!existe) {
        lista.push(novoUsuario);
        localStorage.setItem('usuarios_pekai', JSON.stringify(lista));
    }
    
    // Grave primeiro
    localStorage.setItem('sessao_ativa', JSON.stringify(novoUsuario));
    
    // Pequeno atraso de 100ms só para garantir que o navegador processou o Storage
    setTimeout(() => {
        window.location.href = "vendas.html";
    }, 100);
}

// 3. LÓGICA DO FORMULÁRIO MANUAL (E-mail)
if (formCadastro) {
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.querySelector('input[placeholder="Nome completo"]').value;
        const email = document.querySelector('input[placeholder="Seu melhor e-mail"]').value;
        const senhaVal = inputSenha.value;
        const confirmaVal = confirmaSenha.value;

        if (senhaVal !== confirmaVal) {
            alert('As senhas não coincidem!');
            confirmaSenha.style.borderColor = '#ff4444';
            return;
        }

        salvarUsuarioNoBanco({ 
            nome: nome, 
            email: email, 
            tipo: 'manual',
            data: new Date().toISOString()
        });
    });
}

// 4. LÓGICA DO GOOGLE
function handleCredentialResponse(response) {
    const dados = parseJwt(response.credential);
    salvarUsuarioNoBanco({ 
        nome: dados.name, 
        email: dados.email, 
        foto: dados.picture, 
        tipo: 'google' 
    });
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function initGoogle() {
    if (typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: "660856082002-c3e7vmdp2nsb7lk9kiqk5526679tidbt.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            use_fedcm_for_prompt: false,
            itp_support: true
        });

        if (googleBtn) {
            googleBtn.onclick = () => {
                google.accounts.id.prompt();
            };
        }
    } else {
        setTimeout(initGoogle, 100);
    }
}

// 5. INTERFACE (Olhinho, Botão de E-mail e Link de Login)
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

if (btnShowEmail) {
    btnShowEmail.addEventListener('click', () => {
        formCadastro.style.display = 'flex';
        btnShowEmail.parentElement.style.display = 'none'; // Esconde os botões sociais
        
        setTimeout(() => {
            const y = formCadastro.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
    });
}

if (linkLogin) {
    linkLogin.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Basta preencher o formulário ou usar o Google. Se você já tem conta, entraremos direto!");
        formCadastro.style.display = 'flex';
        document.querySelector('.botoes-sociais').style.display = 'none';
    });
}

// Inicializa o Google ao carregar
document.addEventListener("DOMContentLoaded", initGoogle);