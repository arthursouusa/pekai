// ==========================================
// 1. BASE DE CONHECIMENTO ULTRA EXPANDIDA (Com Emojis e Exclamações!)
// ==========================================
const knowledgeBase = [
    {
        intent: "sobre_o_produto",
        keywords: [
            "sobre o que se trata", "do que se trata", "o que e o produto", "o que e esse livro", "explicar o produto", "resumo do livro", "o que e isso", "qual e a proposta", "o que e", "se trata o produto"
        ],
        response: `O **"Engenharia da Conversão"** é um e-book estratégico focado em desvendar a infraestrutura oculta das vendas digitais! 🧠 Ele não é apenas um livro de teoria; é um mapa prático que ensina você a dominar o comportamento do consumidor, estruturar o design da sua marca para transmitir autoridade instantânea (Neurodesign), escrever textos que vendem (Copywriting) e alinhar seus funis de vendas para transformar seguidores frios em clientes prontos para comprar! 🚀`
    },
    {
        intent: "diferencial_produto",
        keywords: [
            "qual o diferencial", "diferencial", "qual e o diferencial", "o que tem de diferente", "por que e diferente", "vantagem", "por que comprar esse", "qual o foco"
        ],
        response: `O grande **diferencial** do Engenharia da Conversão é que ele não te vende hacks temporários ou diquinhas de momento que param de funcionar na próxima atualização do algoritmo! ❌ Ele abre a caixa-preta da estratégia real, unindo a psicologia de vendas (Copywriting) com a estrutura visual (Neurodesign). É um passo a passo direto ao ponto, focado em criar um negócio digital sólido e altamente lucrativo! 🎯`
    },
    {
        intent: "produto_para_mim",
        keywords: [
            "e para mim", "sera que serve para mim", "quem deve comprar", "vale para o meu caso", "devo comprar", "perfil", "serve para o meu negocio", "da certo para mim", "produto e para mim", "pra mim"
        ],
        response: `Se você vende infoprodutos, serviços, e-commerce, possui uma loja física ou atua como freelancer/social media e sente que precisa mendigar atenção na internet sem ter o retorno financeiro que gostaria, **sim, este produto é para você!** 🔥 Ele foi desenhado tanto para quem está começando do absoluto zero e quer construir um negócio digital do jeito certo, quanto para quem já fatora alto e quer refinar os processos para aumentar a margem de lucro! 💸`
    },
    {
        intent: "como_comprar",
        keywords: [
            "como eu compro", "como comprar", "quero comprar", "onde compra", "passo a passo para comprar", "link de compra", "adquirir", "como faço para ter acesso", "pagar", "como compro"
        ],
        response: `Para comprar é super simples, seguro e rápido! ⚡ Basta você clicar no **botão de acesso** que fica posicionado no topo da nossa página. Você será redirecionado para a página oficial de pagamento da Kiwify. Lá, é só preencher seus dados, escolher a melhor forma de pagamento (Pix, Cartão de Crédito ou Boleto) e concluir! Assim que o pagamento for aprovado, o acesso ao material chega na hora no seu e-mail! 📬`
    },
    {
        intent: "avaliacao_produto",
        keywords: [
            "e bom", "funciona", "vale a pena", "oque acha", "recomenda", "opiniao", "confiavel", "presta", "ajuda", "como voce avalia", "como avalia", "sua avaliacao", "avaliacao do produto"
        ],
        response: `Como um assistente focado em negócios, minha avaliação é extremamente positiva! ⭐ O mercado está cheio de e-books rasos, mas o Engenharia da Conversão se destaca porque une psicologia de vendas com estrutura visual real. É o tipo de material que se você aplicar apenas 10% do que está lá na sua primeira semana, o valor investido já retorna para o seu bolso! Vale cada centavo se o seu objetivo é acelerar resultados de verdade! 🚀`
    },
    {
        intent: "nota_produto",
        keywords: [
            "de 0 a 10", "de 0 a dez", "qual nota", "que nota", "dar nota", "pontuacao"
        ],
        response: `De 0 a 10? Dou **nota 10 com certeza absoluta!** 💯 E não digo isso só por dizer: o material entrega uma sequência lógica de Branding, Design Estratégico e Funis que pouquíssimos cursos caros por aí entregam. É uma avaliação baseada puramente na eficiência prática do conteúdo! 🎯`
    },
    {
        intent: "preco_valor",
        keywords: [
            "preco", "valor", "quanto custa", "quanto e", "qual o preco", "desconto", "promocao", "barato", "investimento", "custo", "valor do livro"
        ],
        response: `O investimento no Engenharia da Conversão está por apenas **R$ 39,90** na nossa oferta oficial atual! 🤑 Um valor extremamente acessível, custando menos do que uma pizza. Para garantir o seu por esse preço com o desconto aplicado, basta clicar no botão de compra no topo da página. Vale a pena aproveitar agora, pois o valor vai subir assim que este lote encerrar! ⏳`
    },
    {
        intent: "formato_produto",
        keywords: [
            "e fisico", "chega na minha casa", "e-book", "livro fisico", "formato", "correio", "como e o livro", "digital"
        ],
        response: `O produto é **100% digital (um e-book em formato PDF)**! 📱 Isso significa que você não precisa esperar semanas pelo correio e nem pagar frete. Assim que a sua compra é confirmada, você recebe o material imediatamente no seu e-mail e pode começar a ler e aplicar as estratégias hoje mesmo pelo celular, tablet ou computador! 💻`
    },
    {
        intent: "plataforma_vendas",
        keywords: [
            "plataforma", "qual plataforma", "qual site", "onde fica", "onde e vendido", "onde comprar", "hospedado", "kiwify", "site de vendas", "por onde recebo", "sistema"
        ],
        response: `O e-book "Engenharia da Conversão" é vendido e hospedado exclusivamente pela **Kiwify**, que é uma das maiores e mais seguras plataformas de produtos digitais do Brasil! 🔒 É por lá que o seu pagamento é processado com total segurança e é através do sistema deles que você recebe o acesso imediato ao PDF no seu e-mail! 📬`
    },
    {
        intent: "aprendizado_conteudo",
        keywords: [
            "aprender", "conteudo", "ensina", "dentro dele", "assunto", "temas", "novo", "exclusivo", "novidade", "tem la", "paginas", "tempo para ler"
        ],
        response: `Você vai aprender a dominar o comportamento humano a seu favor! 🧠 O livro abre a caixa-preta de pilares brutais: Branding (como gerar desejo), Copywriting (como usar as palavras certas), Engenharia Visual (como o design direciona o olho do direto para a compra) e Funis de Conversão. Ele é direto ao ponto, dinâmico para ler no celular e estruturado em um passo a passo com exemplos práticos para você devorar e já sair aplicando! 🛠️`
    },
    {
        intent: "atualizacao",
        keywords: [
            "atualizado", "antigo", "funciona hoje", "moderno", "funciona mesmo", "da certo", "teste"
        ],
        response: `Sim! Ele é totalmente focado no cenário digital atual. Sabe por quê? 🤔 Ferramentas mudam o tempo todo, mas a psicologia do consumidor e os gatilhos de conversão são os mesmos desde que o mundo é mundo. O método foi testado no campo de batalha e funciona justamente porque ensina a base estratégica pura, e não um truquezinho temporário! 💣`
    },
    {
        intent: "iniciantes_e_experiencia",
        keywords: [
            "iniciante", "começando", "comecar do zero", "adolescente", "jovem", "idade", "experiencia", "nunca vendi", 
            "saber vender", "entender de internet", "dificil", "complicado", "acompanhar", "perdido", "avançado", "avancado"
        ],
        response: `Essa é a melhor parte: você NÃO precisa ter experiência prévia! 🙌 Ele foi desenhado estrategicamente com uma linguagem limpa, direta e sem enrolação técnica, sendo perfeito tanto para quem está começando do absoluto zero quanto para quem já vende e quer refinar o jogo. Se você for jovem com ambição de criar sua liberdade digital, esse é o melhor ponto de partida possível! 🚀`
    },
    {
        intent: "resultados_vendas",
        keywords: [
            "vender mais", "ganhar dinheiro", "clientes", "faturamento", "lucro", "resultado", "crescer", "instagram", "redes sociais"
        ],
        response: `Vendas e lucros não acontecem por acidente, são pura engenharia! 📊 O livro foca exatamente em calibrar a sua comunicação e aumentar a percepção de valor daquilo que você vende. Quando você ajusta o seu posicionamento e aprende a capturar a atenção do público nas redes sociais, o resultado em clientes e faturamento é uma consequência matemática! Você vai parar de mendigar atenção e vai começar a atrair compradores prontos! 💸`
    },
    {
        intent: "branding_e_visual",
        keywords: [
            "branding", "marca", "identidade visual", "design", "visual", "cores", "tipografia", "engenharia visual", "logotipo"
        ],
        response: `Branding não é só um logotipo bonitinho, é a percepção que você implanta na mente do seu cliente! 🎭 O e-book destrincha a Engenharia Visual: o uso cirúrgico de cores, contrastes, fontes e espaçamentos para transmitir autoridade instantânea. Você vai aprender a fazer sua marca parecer uma grife premium, permitindo que você cobre mais caro e as pessoas paguem com prazer! 💎`
    },
    {
        intent: "trafego_e_funil",
        keywords: [
            "trafego pago", "anuncios", "ads", "meta ads", "google", "organico", "seo", "funil", "funis", "conversao", "captacao", "nutricao"
        ],
        response: `O livro resolve o maior problema do tráfego: trazer pessoas e não converter! 🛑 Você vai entender como alinhar o Tráfego Orgânico (construção de base) com o Tráfego Pago (anúncios no Meta Ads/Google). Mais do que isso, ele ensina a desenhar a esteira completa: a Captação (atrair), a Nutrição (gerar valor) e a Conversão Final dentro do funil de vendas! 📈`
    },
    {
        intent: "psicologia_e_audiencia",
        keywords: [
            "psicologia", "consumidor", "mente", "gatilhos", "retencao", "prender atencao", "engajamento", "interacao", "seguidores", "comunidade"
        ],
        response: `Pessoas compram por emoção e justificam com a razão! 🧠 O livro aborda profundamente a psicologia do consumidor para que você entenda como reter a atenção em um mundo cheio de distrações. Você vai aprender a transformar seguidores frios em uma comunidade engajada e fiel que defende e compra a sua marca! 🔥`
    }
];

// ==========================================
// 2. SISTEMA DE INTELIGÊNCIA E ANÁLISE DE PONTOS
// ==========================================
function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "") 
        .trim();
}

function findIntentDirectly(input) {
    // -------------------------------------------------------------------------
    // FILTRO DE ESCOPO: GÊNERO, SEXUALIDADE E IDENTIDADE HUMANA
    // -------------------------------------------------------------------------
    const gatilhosEscopo = [
        "genero", "sexo", "sexualidade", "homem", "mulher", "hetero", "gay", "bi", "lgbt", 
        "opcao sexual", "orientacao", "humano", "voce e real", "voce e uma pessoa", 
        "seu nome", "quem e voce", "voce nasceu", "quantos anos", "idade", "namora"
    ];

    const quebrouEscopo = gatilhosEscopo.some(gatilho => {
        const regex = new RegExp(`\\b${gatilho}\\b|${gatilho}`, "i");
        return regex.test(input);
    });

    if (quebrouEscopo) {
        return {
            response: "Eu sou o **Assistente Virtual Estratégico da Pekai**! 🤖 Como uma inteligência artificial, eu não possuo gênero, sexualidade, sentimentos ou identidade humana. Minha única função aqui é gerar informações precisas, tirar dúvidas e te ajudar a entender como o e-book **'Engenharia da Conversão'** pode alavancar os resultados do seu negócio digital! Se quiser saber mais sobre os pilares do livro ou preço, estou à disposição! 👋"
        };
    }
    // -------------------------------------------------------------------------

    if (input.includes("diferencial") || input.includes("diferente")) {
        return knowledgeBase.find(item => item.intent === "diferencial_produto");
    }
    if (input.includes("se trata") || input.includes("oque e o produto") || input.includes("proposta") || (input.includes("sobre") && input.includes("produto"))) {
        return knowledgeBase.find(item => item.intent === "sobre_o_produto");
    }
    if (input.includes("pra mim") || input.includes("para mim") || input.includes("serve para mim") || input.includes("devo comprar")) {
        return knowledgeBase.find(item => item.intent === "produto_para_mim");
    }
    if (input.includes("como compro") || input.includes("como eu compro") || input.includes("como comprar") || input.includes("quero comprar")) {
        return knowledgeBase.find(item => item.intent === "como_comprar");
    }
    return null;
}

function getResponse(message) {
    const input = normalize(message);
    
    const directMatch = findIntentDirectly(input);
    if (directMatch) {
        return directMatch.response;
    }

    let bestMatch = null;
    let highestScore = 0;

    knowledgeBase.forEach(item => {
        let score = 0;
        item.keywords.forEach(keyword => {
            const key = normalize(keyword);
            
            if (input.includes(key)) {
                score += key.length * 2;
                if (input.startsWith(key) || input.endsWith(key)) {
                    score += 10;
                }
            }
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }
    });

    if (bestMatch && highestScore > 0) {
        let prefixoEmocional = "";
        if (input.includes("sera que") || input.includes("medo") || input.includes("inseguro")) {
            prefixoEmocional = "Entendo perfeitamente sua dúvida! 🤔 É normal se sentir um pouco inseguro no início, mas deixa eu te falar a real... \n\n";
        } else if (input.includes("duvido") || input.includes("mentira")) {
            prefixoEmocional = "Gosto de quem questiona e não aceita qualquer promessa! 😉 Olha como funciona na prática... \n\n";
        }

        let ctaFinal = "";
        if (highestScore > 15 && bestMatch.intent !== "como_comprar" && bestMatch.intent !== "preco_valor") {
            ctaFinal = "\n\nSe fizer sentido para você acelerar seus resultados, clica no botão de acesso no topo da página! 🚀 O preço promocional do lote atual vai subir em breve.";
        }

        return prefixoEmocional + bestMatch.response + ctaFinal;
    }

    return `Não consegui entender exatamente sua pergunta da forma que escreveu! 🤔\n\nMas se você quer virar o jogo no digital, experimenta me perguntar sobre os assuntos chave do e-book:\n\n• 📦 **Sobre o produto** (Do que se trata)\n• 🎯 **Qual o diferencial?** (O que muda com ele)\n• 🔥 **É para mim?** (Descubra se serve para o seu caso)\n• ⚡ **Como comprar** (Passo a passo)\n• 💸 **Preço** (Quanto custa o investimento)`;
}

// ==========================================
// 3. CONTROLE DE INTERFACE (DOM)
// ==========================================
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const typingIndicator = document.getElementById('typing-indicator');
const btnLimpar = document.getElementById('btn-limpar');

document.addEventListener('DOMContentLoaded', () => {
    const historico = localStorage.getItem('pekai_chat_history');
    if (historico) {
        chatMessages.innerHTML = historico;
        scrollParaUltimaMensagem();
    } else {
        adicionarMensagem("Fala aí! 👋 Sou o assistente estratégico da Pekai. Estou aqui para te mostrar como o e-book 'Engenharia da Conversão' vai mudar o seu posicionamento e as suas vendas! O que você quer saber? 🚀", 'bot', false);
    }
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = userInput.value.trim();
    if (!texto) return;

    processarMensagem(texto);
    userInput.value = '';
});

function processarMensagem(texto) {
    adicionarMensagem(texto, 'user');
    mostrarIndicadorDigitando(true);

    const tempoSimulado = Math.min(Math.max(texto.length * 15, 1000), 2200);

    setTimeout(() => {
        const respostaBot = getResponse(texto);
        mostrarIndicadorDigitando(false);
        adicionarMensagem(respostaBot, 'bot');
    }, tempoSimulado);
}

function enviarSugestao(texto) {
    processarMensagem(texto);
}

function adicionarMensagem(texto, remetente, salvar = true) {
    const div = document.createElement('div');
    div.classList.add('message', remetente);
    
    let textoFormatado = texto.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    div.innerHTML = textoFormatado;
    
    chatMessages.appendChild(div);
    scrollParaUltimaMensagem();

    if (salvar) {
        localStorage.setItem('pekai_chat_history', chatMessages.innerHTML);
    }
}

function mostrarIndicadorDigitando(mostrar) {
    if(typingIndicator) {
        typingIndicator.style.display = mostrar ? 'flex' : 'none';
        scrollParaUltimaMensagem();
    }
}

function scrollParaUltimaMensagem() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

if(btnLimpar) {
    btnLimpar.addEventListener('click', () => {
        if (confirm("Deseja limpar nosso histórico de conversa?")) {
            localStorage.removeItem('pekai_chat_history');
            chatMessages.innerHTML = '';
            adicionarMensagem("Histórico resetado! 🔄 Manda sua dúvida!", 'bot', false);
        }
    });
}