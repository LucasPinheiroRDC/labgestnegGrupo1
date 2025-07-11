document.addEventListener('DOMContentLoaded', () => {

    const skillsData = {
        operacional: { 
            label: 'Operacional', 
            data: [8, 5, 2],
            description: '<strong>Nível Operacional:</strong> Foco no "como fazer". Essencial para a execução de tarefas e supervisão direta. Exige domínio de ferramentas e métodos específicos da área, como conhecimento de software, operação de equipamentos e compreensão de processos de fabricação.'
        },
        gerencial: { 
            label: 'Gerencial', 
            data: [5, 8, 5],
            description: '<strong>Nível Gerencial:</strong> Equilíbrio entre a execução e a estratégia. Crucial para motivar equipes e construir relacionamentos eficazes. Envolve comunicação, empatia, negociação e resolução de conflitos, além de uma visão mais ampla dos objetivos.'
        },
        estrategico: { 
            label: 'Estratégico', 
            data: [2, 5, 8],
            description: '<strong>Nível Estratégico:</strong> Visão do "todo". Mais relevante para a alta direção, que define a visão, missão e estratégia da organização. Exige pensamento abstrato, capacidade de diagnosticar problemas complexos e formular soluções de longo prazo.'
        }
    };

    const mintzbergData = [
        { 
            category: 'Papéis Interpessoais', 
            icon: '🤝',
            description: 'Envolvem o relacionamento do gestor com outras pessoas, tanto dentro quanto fora da organização.',
            roles: [
                { name: 'Figura de Proa', description: 'O gestor atua como um símbolo da organização, realizando deveres cerimoniais e sociais. Ele representa a empresa em eventos, inaugurações, ou quando recebe visitantes. É a face pública da organização.' },
                { name: 'Líder', description: 'Envolve a responsabilidade de motivar e dirigir os subordinados. O gestor é responsável por contratar, treinar, avaliar e recompensar o desempenho dos colaboradores. Ele inspira e influencia a equipe.' },
                { name: 'Elo', description: 'O gestor mantém uma rede de contatos externos, tanto dentro da organização (com outros departamentos) quanto fora dela (com clientes, fornecedores, parceiros, órgãos reguladores). Ele constrói e mantém relacionamentos que trazem informações e apoio para a organização.' }
            ]
        },
        { 
            category: 'Papéis Informacionais',
            icon: 'ℹ️',
            description: 'Esses papéis se referem ao gerenciamento e à disseminação de informações. O gestor é um centro neural de informações para a organização.',
            roles: [
                { name: 'Monitor', description: 'O gestor busca e recebe uma ampla variedade de informações internas e externas para compreender as operações da organização e o ambiente em que ela atua. Ele está atento a dados, tendências e fofocas.' },
                { name: 'Disseminador', description: 'O gestor transmite informações importantes de fontes externas ou de outros departamentos para os membros de sua equipe. Ele filtra e distribui as informações relevantes para que seus subordinados possam realizar suas tarefas.' },
                { name: 'Porta-voz', description: 'O gestor transmite informações sobre os planos, políticas, ações e resultados da organização para pessoas de fora da unidade ou da própria organização. Ele é o comunicador oficial.' }
            ]
        },
        { 
            category: 'Papéis Decisórios',
            icon: '⚖️',
            description: 'Esses papéis envolvem a tomada de decisões e a alocação de recursos. O gestor é o principal tomador de decisões em sua área de responsabilidade.',
            roles: [
                { name: 'Empreendedor', description: 'O gestor busca oportunidades de melhoria e inicia projetos de mudança. Ele é o agente de inovação, identificando novas ideias e transformando-as em iniciativas concretas.' },
                { name: 'Gerenciador de Conflitos', description: 'O gestor é responsável por corrigir ações corretivas quando a organização enfrenta problemas inesperados, crises ou conflitos internos/externos. Ele lida com as pressões e as interrupções.' },
                { name: 'Alocador de Recursos', description: 'O gestor é responsável por decidir onde os recursos da organização (dinheiro, tempo, equipamentos, pessoal) serão aplicados. Ele define prioridades e distribui os ativos.' },
                { name: 'Negociador', description: 'O gestor representa a organização em negociações importantes com outras partes, como fornecedores, clientes, sindicatos ou órgãos reguladores. Ele busca acordos que beneficiem a organização.' }
            ]
        }
    ];
    
    const organizationalFunctions = [
        { name: 'Produção', icon: '🏭', content: 'Esta função é o coração de qualquer organização que produza bens ou serviços. Ela engloba desde a aquisição de matérias-primas e insumos, passando pelo processo de transformação, até a entrega do produto ou serviço final. O objetivo principal é garantir que a produção seja eficiente, de alta qualidade e atenda às demandas do mercado. Isso envolve Gestão da Cadeia de Suprimentos (otimização do fluxo de materiais desde o fornecedor até o consumidor final), Controle de Qualidade (sistemas para garantir padrões estabelecidos), Gestão de Estoques (equilíbrio entre demanda e custos de armazenagem), Manutenção (bom funcionamento de máquinas) e Otimização de Processos (melhorias contínuas nos métodos de trabalho).' },
        { name: 'Marketing', icon: '🎯', content: 'O marketing é a ponte entre a empresa e seus clientes. Sua principal função é identificar e satisfazer as necessidades e desejos do mercado, criando valor para os consumidores e gerando lucro para a organização. Suas atividades incluem Pesquisa de Mercado (coleta e análise de dados sobre clientes, concorrentes e tendências), Desenvolvimento de Produto (criação e aprimoramento de produtos/serviços), Precificação (definição de estratégias competitivas e lucrativas), Promoção e Comunicação (campanhas de publicidade, relações públicas, vendas pessoais e marketing digital), Canais de Distribuição (escolha e gestão de como os produtos chegam aos consumidores) e Branding (construção e gestão da marca da empresa).' },
        { name: 'RH', icon: '👥', content: 'Esta função é vital para qualquer organização, pois lida com o seu ativo mais valioso: as pessoas. O RH não se limita a contratar e demitir; ele é responsável por atrair, desenvolver, motivar e reter talentos, garantindo que a força de trabalho esteja alinhada aos objetivos estratégicos da empresa. As principais atividades incluem Recrutamento e Seleção (atração e escolha de candidatos qualificados), Treinamento e Desenvolvimento (capacitação para novas habilidades), Gestão de Desempenho (avaliação e feedback), Remuneração e Benefícios (políticas salariais e benefícios competitivos), Clima Organizacional e Cultura Empresarial (promoção de ambiente saudável e alinhado aos valores), e Relações Trabalhistas (gestão com sindicatos e leis).' },
        { name: 'Finanças', icon: '💰', content: 'A função financeira é responsável pela gestão dos recursos monetários da organização. Ela garante que a empresa tenha os fundos necessários para operar, investir e crescer, além de assegurar que esses recursos sejam utilizados de forma eficiente. As atividades-chave são Planejamento Financeiro (elaboração de orçamentos e projeções), Gestão de Fluxo de Caixa (monitoramento de entradas e saídas), Controle de Custos (análise para maximizar lucratividade), Análise de Investimentos (avaliação de novos projetos), Captação de Recursos (obtenção de fundos) e Gestão de Riscos Financeiros (identificação e mitigação de riscos à saúde financeira).' },
        { name: 'TI', icon: '💻', content: 'A TI se tornou uma função estratégica indispensável em qualquer organização moderna. Ela é responsável por gerenciar e otimizar os sistemas de informação, redes e infraestrutura tecnológica que suportam todas as outras áreas da empresa. Suas atividades incluem Gestão de Infraestrutura de TI (manutenção de servidores, redes, hardware e software), Desenvolvimento de Sistemas (criação e implementação de softwares), Segurança da Informação (proteção de dados), Suporte ao Usuário (assistência técnica), Inovação Digital (pesquisa e implementação de novas tecnologias) e Gestão de Dados (coleta, armazenamento e análise de dados para decisões).' }
    ];

    const organizationalStructures = [
        {
            name: 'Funcional',
            icon: '🏢',
            description: 'Tradicional, baseada em departamentos especializados (RH, Finanças, etc).',
            pros: ['Eficiência: Permite a especialização e o aprofundamento do conhecimento em cada área.', 'Clareza de Responsabilidades: Cada departamento tem um escopo de atuação bem definido.', 'Controle Centralizado: Facilita o controle e a coordenação pela alta administração.', 'Economias de Escala: Otimiza o uso de recursos e evita duplicação de funções.'],
            cons: ['Silos Organizacionais: Pode levar à falta de comunicação e colaboração entre departamentos.', 'Lentidão na Resposta: Tomada de decisão pode ser lenta, exigindo coordenação multifuncional.', 'Foco Interno: Áreas podem se preocupar mais com suas próprias metas do que com os objetivos globais.', 'Dificuldade de Inovação: A rigidez pode inibir a criatividade e a inovação.'],
            ideal: 'Empresas de pequeno e médio porte com produtos e ambiente estáveis.'
        },
        {
            name: 'Matricial',
            icon: '🌐',
            description: 'Combina estrutura funcional com estrutura por projetos, produtos ou clientes. Colaboradores reportam a dois gestores.',
            pros: ['Flexibilidade e Adaptabilidade: Permite adaptação rápida a projetos específicos e demandas do mercado.', 'Compartilhamento de Recursos: Otimiza o uso de especialistas em diferentes projetos.', 'Comunicação Interdepartamental: Incentiva a colaboração e troca de informações.', 'Desenvolvimento de Habilidades: Funcionários ganham experiência em diversas áreas e projetos.'],
            cons: ['Conflitos de Autoridade: Dupla subordinação pode gerar confusão e conflitos.', 'Estresse nos Colaboradores: Dificuldade em equilibrar demandas de dois chefes.', 'Complexidade de Gestão: Exige gestores altamente capacitados em comunicação e negociação.', 'Custos de Coordenação: Pode exigir mais tempo e recursos para coordenar atividades.'],
            ideal: 'Empresas que operam em ambientes dinâmicos, com muitos projetos simultâneos, como consultoria, desenvolvimento de software, publicidade ou construção.'
        },
        {
            name: 'Por Processos',
            icon: '🔄',
            description: 'Foca na otimização dos fluxos de trabalho e nos resultados para o cliente, em vez de se basear em funções ou departamentos.',
            pros: ['Foco no Cliente: Todas as atividades alinhadas para atender às necessidades do cliente.', 'Eficiência e Velocidade: Reduz gargalos e burocracia, agilizando a entrega.', 'Melhoria Contínua: Facilita a identificação de ineficiências e implementação de melhorias.', 'Visão Sistêmica: Colaboradores compreendem como seu trabalho se encaixa no fluxo geral.'],
            cons: ['Dificuldade de Implementação: Requer mudança cultural significativa e pode gerar resistência.', 'Perda de Especialização Funcional: Conhecimento aprofundado em uma área pode ser diluído.', 'Problemas de Controle: Pode ser mais difícil manter controle sobre atividades em processos amplos.', 'Requerimento de Equipes Autogerenciáveis: Demanda alta capacidade de autogestão e colaboração.'],
            ideal: 'Empresas que buscam agilidade, focam na experiência do cliente e querem otimizar seus fluxos de trabalho, como serviços, tecnologia ou manufatura com foco em produção enxuta.'
        }
    ];

    const globalizationData = {
        labels: ['Vantagens', 'Desafios'],
        datasets: [{
            label: 'Impactos da Globalização',
            data: [6, 7],
            backgroundColor: ['#3b82f6', '#ef4444'],
            borderColor: ['#2563eb', '#dc2626'],
            borderWidth: 1
        }]
    };

    const esgData = [
        { 
            title: 'Ambiental (E)', 
            content: 'Refere-se ao impacto da empresa no meio ambiente e sua gestão de recursos naturais. Desafios incluem escassez de água, mudanças climáticas, poluição e perda de biodiversidade. As implicações para as empresas envolvem gestão de resíduos (reciclagem, redução de embalagens), eficiência energética (energias renováveis, otimização de consumo), uso sustentável de recursos (matérias-primas sustentáveis, redução de água) e conformidade regulatória (adaptação a legislações ambientais). O gestor deve implementar sistemas de gestão ambiental e promover a ecoeficiência.' 
        },
        { 
            title: 'Social (S)', 
            content: 'Foca nas relações da empresa com pessoas e comunidades. Desafios abrangem desigualdade social, direitos trabalhistas, saúde e segurança no trabalho, diversidade e inclusão, e engajamento comunitário. As implicações para as empresas incluem garantir condições de trabalho justas e seguras (não utilizar trabalho infantil ou forçado, respeitar liberdade de associação), promover um ambiente diverso e inclusivo (valorizar diferentes origens, gêneros, etnias), assegurar a saúde e segurança (programas robustos de bem-estar físico e mental), e contribuir para o desenvolvimento das comunidades (projetos sociais, voluntariado). O gestor deve desenvolver políticas de RH inclusivas e fomentar um clima organizacional positivo.' 
        },
        { 
            title: 'Governança (G)', 
            content: 'Relacionado à forma como a empresa é administrada, incluindo a estrutura de liderança, remuneração de executivos, auditorias, controles internos e direitos dos acionistas. Desafios envolvem corrupção, falta de transparência, conflitos de interesse e ausência de prestação de contas. As implicações para as empresas são ter um conselho de administração eficaz (diverso, independente), implementar códigos de conduta e políticas anticorrupção (canais de denúncia, treinamentos de compliance), e publicar relatórios transparentes (sustentabilidade, financeiros). O gestor deve assegurar uma governança robusta e ética, protegendo os direitos dos acionistas.' 
        }
    ];

    const ontologicalData = [
        {
            name: 'Realidade',
            action: 'ESTRUTURAR',
            questions: [
                'Conheço (crio) a prática e impacto do meu trabalho e repasso para a minha equipe?',
                'Conheço (crio) todas as rotinas e os fluxos de trabalho e repasso para a minha equipe?',
                'Os princípios e as regras do jogo estão claras?',
                'As posições e papéis são definidos?'
            ]
        },
        {
            name: 'Resultado',
            action: 'PILARES',
            questions: [
                'Tenho uma estrutura de acompanhamento visível para todos e o utilizo para tomada de decisões?',
                'Quem decide em cada contexto e momento está definido?',
                'Os pedidos que realizo são efetivos e com critérios de satisfação?',
                'Trabalho o processo de responsabilização e acompanhamento ao invés de dependência e cobrança?',
                'Realizo o mapeamento e me relaciono com os atores externamente?',
                'Valoriza e reconhece os bons resultados?'
            ]
        },
        {
            name: 'Relação',
            action: 'MOVER',
            questions: [
                'Abro espaço para trabalhar confiança, engajamento e geração de orgulho?',
                'Compreendo os funcionamentos dos grupos? Abro espaço para a pré-tarefa?',
                'A estrutura e minha forma de trabalhar gera colaboração?',
                'Conheço a rede informal?',
                'Conheço as normas e pactos do grupo?'
            ]
        },
        {
            name: 'Possibilidade',
            action: 'EXPANDIR',
            questions: [
                'As opiniões diversas são estimuladas?',
                'Temos momentos para conversas estratégicas?',
                'Envolvo a equipe na busca de soluções?',
                'Abro espaço para os fracassos inteligentes?',
                'Incentiva a troca de experiências e novos ares?',
                'Estimula estudos sobre boas práticas'
            ]
        },
        {
            name: 'Aprendizagem',
            action: 'APERFEIÇOAR',
            questions: [
                'Os feedbacks são constantes?',
                'Temos momentos coletivos e individuais voltados à aprendizagem?',
                'Reconheço os avanços e compartilho os bons exemplos?',
                'Delego desafios complexos'
            ]
        }
    ];

    const productivityErrorsData = {
        labels: [
            'Não reconhecer/valorizar as conquistas (63%)',
            'Não dar direções claras (57%)',
            'Não ter tempo para conversar (52%)',
            'Não tem espaços de convivência e autopercepção (51%)',
            'Tomar crédito pelas ideias dos outros (47%)',
            'Não oferecer crítica construtiva (39%)',
            'Não saber o nome dos seus funcionários (36%)',
            'Se recusar falar com as pessoas por telefone/pessoalmente (34%)',
            'Não perguntar sobre a vida fora do trabalho (23%)'
        ],
        datasets: [{
            label: 'Erros que Afetam a Produtividade',
            data: [63, 57, 52, 51, 47, 39, 36, 34, 23],
            backgroundColor: '#3b82f6',
            borderColor: '#2563eb',
            borderWidth: 1
        }]
    };

    const tuckmanStagesData = {
        forming: {
            name: 'Formação',
            description: 'Membros buscam segurança e não se expõem, pois querem ser aceitos. Evitam conflitos e buscam o líder para validação, sentindo-se inseguros. Desconhecem as regras, propósitos e limites.',
            managerActions: [
                'Definir roda de identidade (impacto)',
                'Definir Princípios Organizacionais',
                'Buscar conhecer sua equipe',
                'Gerar momentos de integração para estimular confiança'
            ]
        },
        storming: {
            name: 'Turbulência',
            description: 'Membros disputam papéis, expõem opiniões e entram em conflitos. Questionam processos, decisões e autoridades. Alguns querem predominar, outros permanecem na zona de conforto. Buscam clareza. Qualidade da entrega diminui, prazos atrasam.',
            managerActions: [
                'Acordos claros de funcionamento e modelo de gestão',
                'Definição de papéis, autonomia, metas e monitoramento',
                'Estimular a troca de opiniões divergentes',
                'Treinar a equipe para feedbacks e gestão de conflitos (CNV)',
                'Promover a convivência da equipe.',
                'Adoção do sistema de gestão'
            ]
        },
        norming: {
            name: 'Normatização',
            description: 'Equipe funciona bem, embora possa performar melhor. Define suas normas de funcionamento. Papéis são definidos e aceitos. Membros sem medo do conflito.',
            managerActions: [
                'Criar sistema de gestão',
                'Convocar o time para pensar estrategicamente',
                'Gerar mais autonomia',
                'Metas mais desafiadoras',
                'Feedback e reconhecimento constantes',
                'Identificar pontos de melhoria (ex: fluxos dos processos)'
            ]
        },
        performing: {
            name: 'Performance',
            description: 'Equipe autônoma. Medidas funcionais e compartilhadas. Gestor foca no desenvolvimento da equipe e executa pouco. Cultura e identidade própria e definida. Membros do grupo se preocupam uns com os outros.',
            managerActions: [
                'Criar novas formas de engajamento',
                'Pensar em novos formatos de recompensa',
                'Desenvolver talentos e rodízio das lideranças',
                'Difundir boas práticas',
                'Reuniões de troca de aprendizagem',
                'Reuniões para conversar sobre o funcionamento da equipe',
                'Comemorar'
            ]
        },
        transferring: {
            name: 'Dissolução',
            description: 'Fase final onde a equipe se desfaz após a conclusão do projeto ou objetivo. Pode haver sentimentos de perda ou celebração.',
            managerActions: [
                'Reconhecer o trabalho realizado',
                'Celebrar as conquistas',
                'Facilitar a transição dos membros para novas equipes/projetos',
                'Coletar lições aprendidas'
            ]
        }
    };
    
    const lencioniChallengesData = {
        confianca: {
            name: 'Confiança',
            description: 'Habilidade de estar aberto, sem filtros. A base da pirâmide, sem a qual os outros desafios não podem ser superados. Envolve vulnerabilidade e a crença na boa intenção dos colegas.'
        },
        conflito: {
            name: 'Sem medo do conflito',
            description: 'Habilidade de discordar e desafiar abertamente. Conflitos construtivos são essenciais para tomar as melhores decisões e evitar a "harmonia artificial".'
        },
        comprometimento: {
            name: 'Comprometimento',
            description: 'Comprar totalmente decisões críticas. Após o debate aberto (conflito), a equipe deve se comprometer com a decisão, mesmo que nem todos concordem inicialmente.'
        },
        responsabilidade: {
            name: 'Responsabilidade',
            description: 'Ser responsável pelo outro. Os membros da equipe devem se responsabilizar mutuamente pelo cumprimento das decisões e padrões de desempenho.'
        },
        resultados: {
            name: 'Foco nos resultados da equipe',
            description: 'O objetivo final de uma equipe de alto desempenho. Os membros priorizam os resultados coletivos acima dos individuais ou departamentais.'
        }
    };


    let skillsChartInstance;
    const skillsChartCtx = document.getElementById('skillsChart').getContext('2d');
    const skillDescriptionDiv = document.getElementById('skill-description');
    
    function createOrUpdateSkillsChart(level) {
        if (skillsChartInstance) {
            skillsChartInstance.destroy();
        }
        skillsChartInstance = new Chart(skillsChartCtx, {
            type: 'radar',
            data: {
                labels: ['Habilidades Técnicas', 'Habilidades Humanas', 'Habilidades Conceituais'],
                datasets: [{
                    label: skillsData[level].label,
                    data: skillsData[level].data,
                    fill: true,
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgb(59, 130, 246)',
                    pointBackgroundColor: 'rgb(59, 130, 246)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(59, 130, 246)'
                }]
            },
            options: {
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 10,
                        pointLabels: {
                             font: {
                                size: 10
                            }
                        }
                    }
                },
                plugins: {
                   legend: {
                        display: false
                   }
                }
            }
        });
        skillDescriptionDiv.innerHTML = `<p>${skillsData[level].description}</p>`;
    }

    document.querySelectorAll('.skill-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.skill-btn').forEach(btn => {
                btn.classList.remove('bg-blue-100', 'text-blue-800');
                btn.classList.add('bg-slate-100', 'text-slate-800');
            });
            e.target.classList.add('bg-blue-100', 'text-blue-800');
            e.target.classList.remove('bg-slate-100', 'text-slate-800');
            createOrUpdateSkillsChart(e.target.dataset.level);
        });
    });

    createOrUpdateSkillsChart('operacional');

    const mintzbergContainer = document.getElementById('mintzberg-roles');
    mintzbergData.forEach(group => {
        const groupElement = document.createElement('div');
        groupElement.innerHTML = `
            <details class="bg-slate-50 p-4 rounded-lg cursor-pointer">
                <summary class="font-bold text-lg flex items-center">
                    <span class="text-2xl mr-3">${group.icon}</span>
                    <div>
                        ${group.category}
                        <p class="text-sm font-normal text-slate-600">${group.description}</p>
                    </div>
                </summary>
                <ul class="mt-4 pl-8 list-disc space-y-2 text-slate-700">
                    ${group.roles.map(role => `<li><strong>${role.name}:</strong> ${role.description}</li>`).join('')}
                </ul>
            </details>
        `;
        mintzbergContainer.appendChild(groupElement);
    });
    
    const focusStructureBtn = document.getElementById('focus-structure-btn');
    const focusPeopleBtn = document.getElementById('focus-people-btn');
    const focusContentDiv = document.getElementById('focus-content');

    const focusData = {
        structure: '<strong>Foco na Estrutura:</strong> Necessita realizar tarefas, ocupar responsabilidades e conhecer os processos gerenciais. Os resultados são alcançados através de Planejamento, Organização e Medição. A expressão chave é "Gerar resultado".',
        people: '<strong>Foco nas Pessoas:</strong> Necessita satisfazer as necessidades emocionais e conhecer a dinâmica relacional e de grupos. A gestão é sobre Relação, Mobilização, Alinhamento e Criação Coletiva. A expressão chave é "Fazer acontecer".'
    };

    function updateFocusContent(type) {
        focusContentDiv.innerHTML = `<p>${focusData[type]}</p>`;
        if (type === 'structure') {
            focusStructureBtn.classList.add('bg-blue-100', 'text-blue-800');
            focusStructureBtn.classList.remove('bg-slate-100', 'text-slate-800');
            focusPeopleBtn.classList.remove('bg-blue-100', 'text-blue-800');
            focusPeopleBtn.classList.add('bg-slate-100', 'text-slate-800');
        } else {
            focusPeopleBtn.classList.add('bg-blue-100', 'text-blue-800');
            focusPeopleBtn.classList.remove('bg-slate-100', 'text-slate-800');
            focusStructureBtn.classList.remove('bg-blue-100', 'text-blue-800');
            focusStructureBtn.classList.add('bg-slate-100', 'text-slate-800');
        }
    }

    focusStructureBtn.addEventListener('click', () => updateFocusContent('structure'));
    focusPeopleBtn.addEventListener('click', () => updateFocusContent('people'));
    updateFocusContent('structure'); // Initial load

    const ontologicalTabsContainer = document.getElementById('ontological-tabs');
    const ontologicalContentContainer = document.getElementById('ontological-content');

    ontologicalData.forEach((item, index) => {
        const tab = document.createElement('button');
        tab.className = `ontological-tab-button whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm rounded-t-lg ${index === 0 ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`;
        tab.textContent = item.name;
        tab.dataset.target = `ontological-content-${index}`;
        ontologicalTabsContainer.appendChild(tab);

        const content = document.createElement('div');
        content.id = `ontological-content-${index}`;
        content.className = `p-2 ${index !== 0 ? 'hidden' : ''}`;
        content.innerHTML = `
            <h5 class="text-xl font-bold mb-2 flex items-center"><span class="text-2xl mr-2">💡</span> ${item.name} <span class="ml-auto text-blue-600 text-sm font-semibold">${item.action}</span></h5>
            <ul class="list-disc list-inside space-y-1 text-slate-600 text-sm">
                ${item.questions.map(q => `<li>${q}</li>`).join('')}
            </ul>
        `;
        ontologicalContentContainer.appendChild(content);
    });

    ontologicalTabsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('ontological-tab-button')) {
            ontologicalTabsContainer.querySelectorAll('.ontological-tab-button').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            ontologicalContentContainer.querySelectorAll('div').forEach(content => content.classList.add('hidden'));
            document.getElementById(e.target.dataset.target).classList.remove('hidden');
        }
    });

    document.querySelectorAll('.pentagon-segment').forEach(segment => {
        segment.addEventListener('click', (e) => {
            const targetTab = e.target.dataset.ontologicalTab;
            ontologicalTabsContainer.querySelectorAll('.ontological-tab-button').forEach(tab => {
                if (tab.textContent.toLowerCase() === targetTab) {
                    tab.click();
                }
            });
        });
    });

    const tabsContainer = document.getElementById('org-tabs');
    const contentContainer = document.getElementById('org-content');

    organizationalFunctions.forEach((func, index) => {
        const tab = document.createElement('button');
        tab.className = `tab-button whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm rounded-t-lg ${index === 0 ? 'active' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`;
        tab.textContent = func.name;
        tab.dataset.target = `content-${index}`;
        tabsContainer.appendChild(tab);

        const content = document.createElement('div');
        content.id = `content-${index}`;
        content.className = `p-2 ${index !== 0 ? 'hidden' : ''}`;
        content.innerHTML = `<h5 class="text-xl font-bold mb-2 flex items-center"><span class="text-2xl mr-2">${func.icon}</span> ${func.name}</h5><p class="text-slate-600">${func.content}</p>`;
        contentContainer.appendChild(content);
    });

    tabsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('tab-button')) {
            tabsContainer.querySelectorAll('.tab-button').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            contentContainer.querySelectorAll('div').forEach(content => content.classList.add('hidden'));
            document.getElementById(e.target.dataset.target).classList.remove('hidden');
        }
    });

    const structuresContainer = document.getElementById('structures-container');
    const structureDetailsContainer = document.getElementById('structure-details');

    organizationalStructures.forEach((struc, index) => {
        const card = document.createElement('div');
        card.className = `structure-card bg-white p-6 rounded-xl border-2 border-transparent cursor-pointer transition-all duration-300 ${index === 0 ? 'active' : ''}`;
        card.dataset.index = index;
        card.innerHTML = `
            <div class="flex items-center text-xl font-bold mb-3">
                <span class="text-3xl mr-3">${struc.icon}</span>
                <span>${struc.name}</span>
            </div>
            <p class="text-sm text-slate-600">${struc.description}</p>
        `;
        structuresContainer.appendChild(card);
    });
    
    function updateStructureDetails(index) {
        const struc = organizationalStructures[index];
        structureDetailsContainer.innerHTML = `
            <h5 class="text-2xl font-bold mb-4 text-blue-600">${struc.name}</h5>
            <div class="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                    <h6 class="font-bold text-slate-800 mb-2">Vantagens</h6>
                    <ul class="list-disc list-inside space-y-1 text-slate-600">${struc.pros.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>
                <div>
                    <h6 class="font-bold text-slate-800 mb-2">Desvantagens</h6>
                    <ul class="list-disc list-inside space-y-1 text-slate-600">${struc.cons.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
                <div>
                    <h6 class="font-bold text-slate-800 mb-2">Ideal para:</h6>
                    <p class="text-slate-600">${struc.ideal}</p>
                </div>
            </div>
        `;
    }

    structuresContainer.addEventListener('click', e => {
        const card = e.target.closest('.structure-card');
        if (card) {
            structuresContainer.querySelectorAll('.structure-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            updateStructureDetails(card.dataset.index);
        }
    });
    
    updateStructureDetails(0);

    const leadershipTabsContainer = document.getElementById('leadership-tabs');
    const leadershipContentContainer = document.getElementById('leadership-content');

    leadershipTabsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('tab-button')) {
            leadershipTabsContainer.querySelectorAll('.tab-button').forEach(tab => {
                tab.classList.remove('active');
                tab.classList.add('border-transparent', 'text-slate-500', 'hover:text-slate-700', 'hover:border-slate-300');
                tab.classList.remove('bg-blue-100', 'text-blue-800');
            });
            e.target.classList.add('active', 'bg-blue-100', 'text-blue-800');
            e.target.classList.remove('border-transparent', 'text-slate-500', 'hover:text-slate-700', 'hover:border-slate-300');
            leadershipContentContainer.querySelectorAll('div').forEach(content => content.classList.add('hidden'));
            document.getElementById(e.target.dataset.target).classList.remove('hidden');
        }
    });

    const productivityErrorsChartCtx = document.getElementById('productivityErrorsChart').getContext('2d');
    new Chart(productivityErrorsChartCtx, {
        type: 'bar',
        data: productivityErrorsData,
        options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                x: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false },
                title: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += context.parsed.x + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    const globalizationChartCtx = document.getElementById('globalizationChart').getContext('2d');
    new Chart(globalizationChartCtx, {
        type: 'bar',
        data: globalizationData,
        options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                x: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false },
                title: { display: false }
            }
        }
    });

    const esgAccordionContainer = document.getElementById('esg-accordion');
    esgData.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.innerHTML = `
            <details class="bg-slate-50 p-4 rounded-lg cursor-pointer">
                <summary class="font-bold text-md">${item.title}</summary>
                <p class="mt-2 text-sm text-slate-600">${item.content}</p>
            </details>
        `;
        esgAccordionContainer.appendChild(accordionItem);
    });
    
    const tuckmanDetailsDiv = document.getElementById('tuckman-details');
    document.querySelectorAll('.pentagon-segment').forEach(segment => {
        segment.addEventListener('click', (e) => {
            const stage = e.target.dataset.stage;
            const data = tuckmanStagesData[stage];
            if (data) {
                tuckmanDetailsDiv.innerHTML = `
                    <h5 class="text-lg font-bold text-blue-600">${data.name}</h5>
                    <p class="text-slate-700 mt-2">${data.description}</p>
                    <h6 class="font-bold text-slate-800 mt-3">O que o gestor deve fazer:</h6>
                    <ul class="list-disc list-inside space-y-1 text-slate-600">${data.managerActions.map(action => `<li>${action}</li>`).join('')}</ul>
                `;
            }
        });
    });

    const lencioniDetailsDiv = document.getElementById('lencioni-details');
    document.querySelectorAll('.lencioni-pyramid-segment').forEach(segment => {
        segment.addEventListener('click', (e) => {
            document.querySelectorAll('.lencioni-pyramid-segment').forEach(s => s.classList.remove('active'));
            e.target.classList.add('active');
            const challenge = e.target.dataset.lencioni;
            const data = lencioniChallengesData[challenge];
            if (data) {
                lencioniDetailsDiv.innerHTML = `
                    <h5 class="text-lg font-bold text-blue-600">${data.name}</h5>
                    <p class="text-slate-700 mt-2">${data.description}</p>
                `;
            }
        });
    });

    document.querySelectorAll('.pyramid-segment').forEach(segment => {
        segment.addEventListener('click', (e) => {
            const content = segment.querySelector('.pyramid-segment-content');
            segment.classList.toggle('active');
        });
    });


    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.closest('#mobile-menu')) {
               mobileMenu.classList.add('hidden');
            }
        });
    });
});
