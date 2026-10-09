const pagina = document.querySelector("#pagina");
const tituloPagina = document.querySelector("#tituloPagina");
const mensagem = document.querySelector("#mensagem");

const vagas = [
    {
        cargo: "Auxiliar Administrativo",
        empresa: "Tech Solutions",
        cidade: "Salvador, BA",
        salario: "R$ 1.800 - R$ 2.200",
        tipo: "CLT"
    },
    {
        cargo: "Designer Gráfico",
        empresa: "Digital Studio",
        cidade: "Salvador, BA",
        salario: "R$ 1.500 - R$ 1.800",
        tipo: "Freelancer"
    },
    {
        cargo: "Assistente de Vendas",
        empresa: "Mercado Mais",
        cidade: "Salvador, BA",
        salario: "R$ 1.600 - R$ 2.000",
        tipo: "CLT"
    },
    {
        cargo: "Desenvolvedor Web",
        empresa: "Tech Web",
        cidade: "Remoto",
        salario: "R$ 2.500 - R$ 3.200",
        tipo: "Freelancer"
    },
    {
        cargo: "Auxiliar de Logística",
        empresa: "Transportes Almeida",
        cidade: "Simões Filho, BA",
        salario: "R$ 1.500 - R$ 1.800",
        tipo: "CLT"
    }
];

const cursos = [
    {
        nome: "Informática Básica",
        descricao: "Aprenda a utilizar o computador e as ferramentas digitais.",
        icone: "💻"
    },
    {
        nome: "Marketing Digital",
        descricao: "Aprenda estratégias para divulgar negócios na internet.",
        icone: "📱"
    },
    {
        nome: "Excel para o Trabalho",
        descricao: "Aprenda a organizar dados e criar planilhas.",
        icone: "📊"
    },
    {
        nome: "Inglês Básico",
        descricao: "Aprenda palavras e expressões do cotidiano.",
        icone: "🌎"
    },
    {
        nome: "Comunicação Profissional",
        descricao: "Melhore sua comunicação no ambiente de trabalho.",
        icone: "🗣️"
    },
    {
        nome: "Gestão Financeira",
        descricao: "Aprenda a organizar suas finanças.",
        icone: "💰"
    }
];

function avisar(texto) {
    mensagem.textContent = texto;
    mensagem.classList.add("mostrar");

    setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 2500);
}


function mostrarVagas(lista = vagas) {
    const container = document.querySelector("#vagasRecentes");

    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = `
            <div class="painel">
                Nenhuma vaga encontrada.
            </div>
        `;
        return;
    }

    container.innerHTML = lista.map((vaga, indice) => `
        <article class="vaga">
            <div class="vaga-icone">💼</div>

            <div class="vaga-info">
                <h3>${vaga.cargo}</h3>
                <p>${vaga.empresa} · ${vaga.tipo}</p>
                <p>📍 ${vaga.cidade}</p>
                <p>💰 ${vaga.salario}</p>
            </div>

            <button
                class="btn azul"
                data-vaga="${indice}"
            >
                Ver vaga
            </button>
        </article>
    `).join("");
}


function abrirPagina(nome) {
    const paginas = {
        inicio: "Início",
        vagas: "Vagas",
        freelancer: "Freelancer",
        cursos: "Cursos",
        curriculo: "Currículo",
        empresas: "Empresas",
        suporte: "Suporte"
    };

    tituloPagina.textContent = paginas[nome] || "Conecta+";

    document.querySelectorAll(".nav-item[data-page]")
        .forEach(botao => {
            botao.classList.toggle(
                "active",
                botao.dataset.page === nome
            );
        });

    document.querySelector(".sidebar").classList.remove("aberta");

    if (nome === "inicio") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Bem-vindo ao Conecta+!</h1>
                <p>Encontre novas oportunidades para sua carreira.</p>
            </div>

            <div class="painel">
                <h2>Oportunidades recentes</h2>
                <br>
                <div id="vagasRecentes" class="lista-vagas"></div>
            </div>

            <div class="banner">
                <div>
                    <h2>Invista no seu futuro!</h2>
                    <p>Conheça nossos cursos gratuitos.</p>
                </div>
                <button class="btn branco" data-page="cursos">
                    Ver cursos
                </button>
            </div>
        `;

        mostrarVagas();
    }

    else if (nome === "vagas") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Vagas de emprego</h1>
                <p>Encontre a oportunidade ideal para você.</p>
            </div>

            <div class="painel">
                <form id="formBuscaVagas" class="busca">
                    <input
                        id="pesquisaCargo"
                        type="search"
                        placeholder="Digite o cargo desejado"
                    >

                    <input
                        id="pesquisaCidade"
                        type="text"
                        placeholder="Cidade ou região"
                    >

                    <button class="btn azul" type="submit">
                        Buscar
                    </button>
                </form>
            </div>

            <div id="vagasRecentes" class="lista-vagas"></div>
        `;

        mostrarVagas();
    }

    else if (nome === "freelancer") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Projetos Freelancer</h1>
                <p>Encontre trabalhos e projetos temporários.</p>
            </div>

            <div class="grid-cartoes">
                <article class="cartao">
                    <h2>🎨 Criação de Logo</h2>
                    <p>Crie uma identidade visual para uma empresa.</p>
                    <strong>R$ 500 - R$ 800</strong>
                    <br><br>
                    <button class="btn azul" data-projeto="Criação de Logo">
                        Ver projeto
                    </button>
                </article>

                <article class="cartao">
                    <h2>💻 Desenvolvimento de Site</h2>
                    <p>Desenvolva um site moderno e responsivo.</p>
                    <strong>R$ 1.500 - R$ 3.000</strong>
                    <br><br>
                    <button class="btn azul" data-projeto="Desenvolvimento de Site">
                        Ver projeto
                    </button>
                </article>

                <article class="cartao">
                    <h2>📱 Social Media</h2>
                    <p>Crie conteúdos para redes sociais.</p>
                    <strong>R$ 600 - R$ 1.200</strong>
                    <br><br>
                    <button class="btn azul" data-projeto="Social Media">
                        Ver projeto
                    </button>
                </article>
            </div>
        `;
    }

    else if (nome === "cursos") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Cursos</h1>
                <p>Aprenda e desenvolva novas habilidades.</p>
            </div>

            <div class="painel">
                <input
                    id="pesquisaCurso"
                    placeholder="Pesquisar cursos..."
                    style="width:100%;padding:12px;border:1px solid #e3eaf4;border-radius:7px"
                >
            </div>

            <div class="grid-cartoes" id="listaCursos"></div>
        `;

        mostrarCursos(cursos);

        document.querySelector("#pesquisaCurso")
            .addEventListener("input", evento => {
                const termo = evento.target.value.toLowerCase();

                const filtrados = cursos.filter(curso =>
                    curso.nome.toLowerCase().includes(termo)
                );

                mostrarCursos(filtrados);
            });
    }

    else if (nome === "curriculo") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Criar Currículo</h1>
                <p>Preencha seus dados para montar seu currículo.</p>
            </div>

            <form id="formCurriculo" class="painel">
                <h2>Dados pessoais</h2>
                <br>

                <div class="formulario">
                    <div class="campo">
                        <label for="nome">Nome completo</label>
                        <input id="nome" required
                            placeholder="Digite seu nome">
                    </div>

                    <div class="campo">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" required
                            placeholder="seuemail@exemplo.com">
                    </div>

                    <div class="campo">
                        <label for="telefone">Telefone</label>
                        <input id="telefone" required
                            placeholder="(00) 00000-0000">
                    </div>

                    <div class="campo">
                        <label for="cidade">Cidade</label>
                        <input id="cidade"
                            placeholder="Sua cidade">
                    </div>

                    <div class="campo">
                        <label for="objetivo">Objetivo profissional</label>
                        <input id="objetivo"
                            placeholder="Ex.: Desenvolvedor Web">
                    </div>

                    <div class="campo">
                        <label for="formacao">Formação escolar</label>
                        <input id="formacao"
                            placeholder="Sua formação">
                    </div>

                    <div class="campo">
                        <label for="Complemento">Complemento</label>
                        <input id="Complemento"
                            placeholder="Acrescente algo a mais no seu curriculo">
                    </div>

                </div>

                <br>

                <button class="btn azul" type="submit">
                    Gerar currículo
                </button>
            </form>

            <div id="resultadoCurriculo"></div>
        `;

        document.querySelector("#formCurriculo")
            .addEventListener("submit", evento => {
                evento.preventDefault();

                const nome = document.querySelector("#nome").value;
                const email = document.querySelector("#email").value;
                const telefone = document.querySelector("#telefone").value;
                const cidade = document.querySelector("#cidade").value;
                const objetivo = document.querySelector("#objetivo").value;
                const formacao = document.querySelector("#formacao").value;

                const resultado = document.querySelector("#resultadoCurriculo");

                resultado.innerHTML = `
                    <div class="painel">
                        <h2>${escapar(nome)}</h2>
                        <p>${escapar(email)} · ${escapar(telefone)}</p>
                        <p>${escapar(cidade)}</p>
                        <br>
                        <h3>Objetivo profissional</h3>
                        <p>${escapar(objetivo)}</p>
                        <br>
                        <h3>Formação</h3>
                        <p>${escapar(formacao)}</p>
                        <br>
                        <button class="btn azul" onclick="window.print()">
                            Imprimir currículo
                        </button>
                    </div>
                `;

                avisar("Currículo gerado!");
            });
    }

    else if (nome === "empresas") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Área das Empresas</h1>
                <p>Encontre talentos e publique oportunidades.</p>
            </div>

            <div class="painel">
                <h2>Cadastre sua empresa</h2>
                <br>

                <form id="formEmpresa" class="formulario">
                    <div class="campo">
                        <label for="empresa">Nome da empresa</label>
                        <input id="empresa" required>
                    </div>

                    <div class="campo">
                        <label for="empresaEmail">E-mail empresarial</label>
                        <input id="empresaEmail" type="email" required>
                    </div>

                    <div class="campo">
                        <label for="empresaCidade">Cidade</label>
                        <input id="empresaCidade">
                    </div>

                    <div class="campo">
                        <label for="empresaArea">Área de atuação</label>
                        <input id="empresaArea">
                    </div>

                    <button class="btn azul" type="submit">
                        Cadastrar empresa
                    </button>
                </form>
            </div>
        `;

        document.querySelector("#formEmpresa")
            .addEventListener("submit", evento => {
                evento.preventDefault();
                avisar("Cadastro demonstrativo realizado!");
            });
    }
    else if (nome === "suporte") {
        pagina.innerHTML = `
        <div class="pagina-titulo">
            <h1>Central de Suporte</h1>
            <p>Como podemos ajudar você?</p>
        </div>

        <div class="painel">
            <h2>Entre em contato</h2>
            <br>

            <form id="formSuporte">
                <div class="campo">
                    <label for="nomeSuporte">Nome</label>
                    <input id="nomeSuporte" required
                        placeholder="Digite seu nome">
                </div>

                <br>

                <div class="campo">
                    <label for="emailSuporte">E-mail</label>
                    <input id="emailSuporte" type="email" required
                        placeholder="Digite seu e-mail">
                </div>

                <br>

                <div class="campo">
                    <label for="assuntoSuporte">Assunto</label>
                    <select id="assuntoSuporte" required>
                        <option value="">Selecione um assunto</option>
                        <option>Dúvidas sobre vagas</option>
                        <option>Problemas com cursos</option>
                        <option>Problemas com currículo</option>
                        <option>Problemas com a conta</option>
                        <option>Outros assuntos</option>
                    </select>
                </div>

                <br>

                <div class="campo">
                    <label for="mensagemSuporte">Mensagem</label>
                    <textarea id="mensagemSuporte" required
                        placeholder="Descreva como podemos ajudar"
                        rows="5"></textarea>
                </div>

                <br>

                <button class="btn azul" type="submit">
                    Enviar mensagem
                </button>
            </form>
        </div>
    `;

    document.querySelector("#formSuporte")
        .addEventListener("submit", evento => {
            evento.preventDefault();

            avisar("Mensagem registrada nesta demonstração!");
            evento.target.reset();
        });
}

    else if (nome === "perfil") {
        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>Meu perfil</h1>
                <p>Consulte suas informações profissionais.</p>
            </div>

            <div class="painel">
                <div class="vaga-icone">👤</div>
                <br>
                <h2>Meu perfil profissional</h2>
                <p>Bem-vindo ao Conecta+!</p>
                <br>
                <button class="btn azul" id="editarPerfil">
                    Editar informações
                </button>
            </div>
        `
        
        
        ;

        document.querySelector("#editarPerfil")
            .addEventListener("click", () => {
                avisar("A edição de perfil será implementada em breve.");
            });
    }


    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Exibe os cursos
function mostrarCursos(lista) {
    const container = document.querySelector("#listaCursos");

    if (!container) return;

    container.innerHTML = lista.map(curso => `
        <article class="cartao">
            <div style="font-size:35px">${curso.icone}</div>
            <h3>${curso.nome}</h3>
            <p>${curso.descricao}</p>
            <button class="btn azul" data-curso="${curso.nome}">
                Acessar curso
            </button>
        </article>
    `).join("");
}


function escapar(texto) {
    const elemento = document.createElement("span");
    elemento.textContent = texto;
    return elemento.innerHTML;
}

// Navegação do menu e dos botões
document.addEventListener("click", evento => {
    const botaoPagina = evento.target.closest("[data-page]");

    if (botaoPagina) {
        evento.preventDefault();
        abrirPagina(botaoPagina.dataset.page);
        return;
    }

    const botaoVaga = evento.target.closest("[data-vaga]");

    if (botaoVaga) {
        const vaga = vagas[Number(botaoVaga.dataset.vaga)];

        if (!vaga) return;

        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>${vaga.cargo}</h1>
                <p>${vaga.empresa} · ${vaga.cidade}</p>
            </div>

            <div class="painel">
                <h2>Sobre a vaga</h2>
                <br>
                <p>Tipo de contratação: ${vaga.tipo}</p>
                <p>Salário: ${vaga.salario}</p>
                <br>
                <h3>Requisitos</h3>
                <p>Boa comunicação, organização e vontade de aprender.</p>
                <br>
                <button class="btn azul" id="candidatar">
                    Candidatar-se
                </button>
                <button class="btn" data-page="vagas">
                    Voltar às vagas
                </button>
            </div>
        `;

        tituloPagina.textContent = "Detalhes da vaga";

        return;
    }

    const botaoCurso = evento.target.closest("[data-curso]");

    if (botaoCurso) {
        const nome = botaoCurso.dataset.curso;

        pagina.innerHTML = `
            <div class="pagina-titulo">
                <h1>${nome}</h1>
                <p>Bem-vindo à área de aprendizagem!</p>
            </div>

            <div class="painel">
                <h2>Aula 1 — Introdução</h2>
                <br>
                <div style="background:#102847;color:white;padding:60px 15px;text-align:center;border-radius:10px">
                    <div style="font-size:45px">▶</div>
                    <p>Área de conteúdo do curso</p>
                </div>
                <br>
                <p>O conteúdo das aulas pode ser adicionado aqui.</p>
                <br>
                <button class="btn azul" id="concluirCurso">
                    Concluir aula
                </button>
                <button class="btn" data-page="cursos">
                    Voltar aos cursos
                </button>
            </div>
        `;

        tituloPagina.textContent = "Área do curso";

        return;
    }

    const botaoProjeto = evento.target.closest("[data-projeto]");

    if (botaoProjeto) {
        avisar("Projeto selecionado: " + botaoProjeto.dataset.projeto);
    }
});


document.querySelector("#formBusca")
    .addEventListener("submit", evento => {
        evento.preventDefault();

        const termo = document.querySelector("#buscaInicial")
            .value.toLowerCase().trim();

        const cidade = document.querySelector("#cidadeInicial")
            .value.toLowerCase().trim();

        abrirPagina("vagas");

        const filtradas = vagas.filter(vaga =>
            (
                vaga.cargo.toLowerCase().includes(termo) ||
                vaga.empresa.toLowerCase().includes(termo) ||
                vaga.tipo.toLowerCase().includes(termo)
            ) &&
            vaga.cidade.toLowerCase().includes(cidade)
        );

        mostrarVagas(filtradas);
    });


document.addEventListener("submit", evento => {
    if (evento.target.id !== "formBuscaVagas") return;

    evento.preventDefault();

    const termo = document.querySelector("#pesquisaCargo")
        .value.toLowerCase().trim();

    const cidade = document.querySelector("#pesquisaCidade")
        .value.toLowerCase().trim();

    const filtradas = vagas.filter(vaga =>
        (
            vaga.cargo.toLowerCase().includes(termo) ||
            vaga.empresa.toLowerCase().includes(termo) ||
            vaga.tipo.toLowerCase().includes(termo)
        ) &&
        vaga.cidade.toLowerCase().includes(cidade)
    );

    mostrarVagas(filtradas);
});


document.addEventListener("click", evento => {
    if (evento.target.id === "candidatar") {
        avisar("Candidatura demonstrativa realizada!");
    }

    if (evento.target.id === "concluirCurso") {
        avisar("Aula concluída! Parabéns pelo progresso.");
    }
});


document.querySelector("#menuMobile")
    .addEventListener("click", () => {
        document.querySelector(".sidebar")
            .classList.toggle("aberta");
    });


document.querySelector("#sair")
    .addEventListener("click", () => {
        window.location.href = "index.html";
    });

mostrarVagas();