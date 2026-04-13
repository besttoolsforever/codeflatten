window.translations = window.translations || {};
window.translations.pt = {
    shared: {
        nav: { home: "Início", support: "Suporte", legal: "Legal", step5: "Passo 5" },
        footer: {
            description: "Software de precisão para uso no mundo real.",
            social: { github: "GitHub", linkedin: "LinkedIn" },
            privacy: "Política de Privacidade",
            terms: "Termos de Serviço",
            copyright_prefix: "©",
            copyright_suffix: "BestToolsForever."
        }
    },
    home: {
        title: "BestToolsForever | Software Utilitário de Precisão",
        hero: {
            label: "Software de Precisão",
            title: "Acelere seu fluxo de Vibe Coding.",
            subtitle: "A ferramenta definitiva local-first para construtores modernos. Transformando bases de código complexas em contexto estruturado para IA em segundos.",
            cta: "Obter CodeFlatten PRO"
        },
        studio: {
            label: "ESTÚDIO DE SOFTWARE INDIE",
            title: "Criando Permanência <br/> <span class=\"text-secondary\">Digital.</span>",
            subtitle: "Um estúdio de software independente liderado por Luiz E. L. Junior. Criamos ferramentas que priorizam a utilidade, a precisão e a sensação editorial de softwares de alto padrão.",
            lead_dev: "Desenvolvedor Líder",
            btn_windows: "Windows v1.0",
            btn_store: "Instalar via Microsoft Store",
            flagship: "Produto Principal",
            flagship_desc: "A ferramenta utilitária definitiva do Windows para desenvolvedores. Organize, entrelace e exporte projetos complexos de forma eficiente para ingestão de contexto por IA."
        },
        vibe: {
            title: "Feito para o Vibe Coding",
            desc: "Não perca tempo copiando e colando. O CodeFlatten PRO prepara todo o seu ambiente para LLMs, garantindo contexto estrutural perfeito e eficiência de tokens.",
            feature1: "Bundling com Consciência de Contexto",
            feature2: "Otimização de Tokens",
            feature3: "Prompting Instantâneo para IA",
            llm_ready_title: "Contexto Pronto para LLM",
            llm_ready_desc: "Agregue seu código para Claude, ChatGPT ou Gemini em um clique."
        },
        security: {
            title: "Privacidade por Design",
            desc: "100% Local-First. Seu código proprietário nunca sai da sua máquina a menos que você o envie. Sem processamento em nuvem, sem registro de dados.",
            badge: "Performance Nativa do Windows"
        },
        integration: {
            title: "Integração Perfeita com o Windows",
            desc: "O CodeFlatten PRO se integra diretamente ao Shell do Windows. Clique com o botão direito em qualquer pasta ou seleção de arquivos para gerar seu bundle instantaneamente.",
            feature1: "Menu de Contexto Integrado",
            feature2: "Processamento em Segundo Plano",
            feature3: "Bundling de Seleção"
        },
        redactor: {
            title: "Redator Inteligente",
            desc: "A segurança não é uma sugestão, é uma funcionalidade. Proteja chaves de API, credenciais e lógica proprietária com nosso Redator de Conteúdo baseado em regras antes de compartilhar com a IA.",
            badge: "Exportações Seguras para IA"
        },
        profiles: {
            title: "Automação em Escala",
            desc: "Salve suas configurações favoritas como Perfis. Use Overrides Baseados em Diretório para aplicar automaticamente as regras certas para projetos específicos.",
            feature1: "Sincronize Perfis via Nuvem",
            feature2: "Overrides de Diretório",
            feature3: "Meta-Cabeçalhos Personalizados"
        },
        features: {
            title: "Capacidades Centrais",
            codeflatten: {
                name: "CodeFlatten PRO",
                desc: "A ferramenta de nível profissional para documentação de projetos, preparação de contexto para IA e transformação de texto em larga escala. Otimizado para Windows."
            },
            workflow: {
                title: "Projetado para Eficiência",
                step1: { title: "Defina a Estrutura", desc: "Construa árvores de pastas e cabeçalhos manualmente ou use presets automáticos." },
                step2: { title: "Proteja o Conteúdo", desc: "Aplique regras de redação para proteger dados sensíveis antes da exportação." },
                step3: { title: "Exporte e Construa", desc: "Gere bundles prontos para IA via interface ou menu de contexto do Windows." }
            },
            learn_more: "Saiba Mais"
        },
        comparison: {
            title: "Grátis vs. Premium",
            free: "2 Perfis, 1 Regra de Redação, 1 Override de Diretório",
            premium: "Perfis Ilimitados, Redação Avançada, Overrides Prioritários, Licença Sincronizada via Store",
            cta: "Obter CodeFlatten PRO"
        },
    },
    step5: {
        title: "Passo 5 — Exclusões e Segurança | CodeFlatten PRO",
        hero: {
            badge: "Guia Oficial do Wizard",
            title: "Passo 5 — Exclusões e Segurança",
            subtitle: "Aprenda a montar filtros confiáveis, reduzir ruído no bundle e evitar exportações grandes ou perigosas sem sacrificar o controle do projeto.",
            cta1: "Ver regras práticas",
            cta2: "Entender o Safety Scan"
        },
        quick: {
            title: "Resumo rápido",
            item1: "Cada linha da skip list é testada contra o nome do item e também contra o caminho completo.",
            item2: "Se uma pasta casar com a regra, aquele ramo inteiro deixa de ser lido.",
            item3: "Itens pulados podem aparecer como placeholder na árvore ou ficar totalmente ocultos.",
            item4: "Safety Scan limita profundidade, quantidade de arquivos e tamanho total. Path Guard bloqueia roots e pastas críticas."
        },
        engine: {
            card1: { title: "1. O que casa com a regra", body: "O motor usa padrões no estilo fnmatch. Uma regra pode casar com o nome isolado do arquivo ou da pasta, ou com o caminho completo." },
            card2: { title: "2. O que acontece depois", body: "Se uma regra atingir uma pasta, o CodeFlatten PRO interrompe a leitura daquele nó. Tudo que estiver dentro dela é implicitamente ignorado." },
            card3: { title: "3. O que entra no bundle", body: "Arquivos de texto elegíveis entram no bundle. Binários e formatos não suportados podem aparecer só como referência, se essa opção estiver ativada." }
        },
        rules: {
            title: "Regras práticas para usar no dia a dia: Amplo suporte ao padrão fnmatch.",
            subtitle: "Use nomes exatos para exclusões cirúrgicas. Use wildcards para tipos de arquivo, padrões recorrentes ou filtros amplos.",
            jump: "Ver exemplo visual",
            exact: { title: "Exclusão direta por nome", body: "Quando você quer tirar uma pasta ou arquivo específico do bundle, prefira o nome exato do nó.", when: "Quando a sua intenção é bloquear uma pasta inteira em qualquer ponto da árvore, sem depender de barras ou caminhos completos." },
            wild: { title: "Wildcards para extensões e famílias de arquivo", body: "Quando o alvo é um padrão repetido, use wildcards simples. Eles são ideais para testes, locks, imagens, artefatos de build e segredos recorrentes.", ex1: "Ignora todos os arquivos de log.", ex2: "Ignora múltiplas variantes de arquivos de teste.", ex3: "Evita anexar imagens binárias ao bundle.", ex4: "Ajuda a bloquear chaves e arquivos sensíveis." },
            broad: { title: "Padrões amplos e flexíveis", body: "Padrões como *cache* ou **cache** funcionam como filtros amplos por substring. Eles são úteis quando você quer pegar múltiplas variações, mas podem excluir mais conteúdo do que o esperado.", tip: "Use esse estilo quando sua meta é abrangência, não precisão. Para excluir uma pasta específica, continue preferindo o nome exato." },
            thumb1: "Quer bloquear uma pasta específica? Use <strong>nome exato</strong>.",
            thumb2: "Quer bloquear uma família de arquivos? Use <strong>wildcards por extensão</strong>.",
            thumb3: "Quer pegar qualquer ocorrência de um termo? Use <strong>padrão amplo</strong> com cautela."
        },
        demo: {
            title: "Exemplo visual",
            subtitle: "Abaixo, um projeto genérico antes do filtro e as regras aplicadas no Passo 5.",
            reading: "Leitura do motor",
            reading_body: "A pasta <span class=\"code-chip\">ui</span> é removida como ramo inteiro; <span class=\"code-chip\">logo.png</span> e <span class=\"code-chip\">app.test.ts</span> são filtrados por padrão; <span class=\"code-chip\">.env</span> sai por nome exato.",
            before: "Antes",
            after: "Depois",
            note: "Se a visibilidade de ignorados estiver em “Ocultar completamente”, os placeholders acima desaparecem da árvore."
        },
        safety: {
            title: "Safety Scan e Path Guard",
            subtitle: "O Passo 5 não serve apenas para excluir ruído. Ele também protege contra exportações acidentais muito grandes, profundas ou perigosas.",
            h3_files: "Limite de Arquivos",
            h3_size: "Limite de Tamanho (MB)",
            h3_depth: "Profundidade de Pastas",
            h3_guard: "Path Guard",
            files: "Interrompe a operação quando a contagem de arquivos de texto elegíveis ultrapassa o limite configurado.",
            size: "Evita bundles gigantescos quando o tamanho acumulado do conteúdo ultrapassa o teto definido.",
            depth: "Ajuda a impedir árvores excessivamente profundas, loops ou estruturas acidentalmente enormes.",
            guard: "Bloqueia por padrão roots de disco e diretórios críticos, como <span class=\"code-chip\">C:\\</span> e <span class=\"code-chip\">C:\\Windows</span>.",
            trigger: { title: "Quando um limite dispara", body: "A exportação é abortada de forma segura. Em vez de gerar um bundle incompleto ou custoso demais, o sistema grava um pequeno arquivo explicando o motivo da interrupção." }
        },
        ai: {
            badge: "Recomendação opcional",
            title: "Assistência opcional com IA para modularizar o projeto",
            body: "Em projetos grandes ou heterogêneos, você pode usar um snapshot da árvore do repositório com uma LLM de sua preferência para gerar uma primeira proposta de regras do Passo 5. Esse uso ajuda na modularização e na redução de ruído, mas não substitui a etapa de sanitização do conteúdo final.",
            note: "Esse fluxo é assistido e revisável. O objetivo não é substituir seu critério técnico, e sim acelerar a criação de uma skip list inicial que depois pode ser refinada diretamente no CodeFlatten PRO. Credenciais, segredos e conteúdo sensível dentro de arquivos incluídos devem ser tratados separadamente no Content Redactor.",
            guard: { title: "Importante: filtro não é redaction", body: "O Passo 5 ajuda a decidir o que entra ou não entra no bundle. A sanitização do texto final pertence ao Passo 6, com o Content Redactor. Use os dois em conjunto quando precisar modularização, redução de ruído e revisão de conteúdo sensível." },
            when: { label: "Quando vale a pena", 1: "Monorepos, stacks híbridas ou bases com muitos diretórios auxiliares.", 2: "Quando você quer modularizar dumps por objetivo: arquitetura, runtime, UI, integrações ou documentação.", 3: "Quando o filtro manual ficaria repetitivo, demorado ou amplo demais." },
            flow: { title: "Fluxo sugerido", 1: "Gere um snapshot da árvore e defina o objetivo do dump.", 2: "Peça à LLM apenas uma skip list inicial para preservar o núcleo e reduzir ruído.", 3: "Revise as regras, adapte ao projeto e só então aplique no Passo 5." },
            prompt: { label: "Exemplo de pedido", body: "You are generating a skip list for Step 5 of CodeFlatten PRO.\\nAnalyze the repository and output only an optimized fnmatch skip list, ready for direct use.\\n\\nGoal:\\nProduce the smallest high-coverage skip list possible, excluding noise without damaging structural understanding of the system.\\n\\nOptimization policy:\\n- Prefer compact, high-yield rules that remove entire noisy branches when safe.\\n- Favor repository-specific patterns over generic catch-all exclusions.\\n- Use exact names for isolated noise.\\n- Use wildcards for recurring file families.\\n- Use broad path/name patterns only when they clearly target non-core content.\\n- Because rules match both item names and full paths, and matching a folder drops its entire subtree, prefer folder-level suppression when a whole branch is clearly non-essential.\\n- When two rules are redundant, keep the more compact one if it preserves the same practical exclusion power.\\n- However, do not over-compress if that would increase the risk of excluding relevant code.\\n\\nWhat to remove:\\n- tests, probes, smoke checks, validation helpers, temporary artifacts\\n- docs and handoff material not needed for architecture\\n- binary assets, icons, packaging outputs, compiled objects, caches, logs, locks\\n- build/dist/release folders and generated artifacts\\n- secrets, certificates, runtime evidence, store submission leftovers, redundant localization payloads when they are data-heavy and not required to understand execution flow\\n\\nWhat to preserve:\\n- functional core\\n- modules, runtime, providers, adapters\\n- orchestration, entrypoints, execution flow\\n- code that explains how the system works\\n- packaging or platform integration code when it is part of product behavior or architecture\\n\\nDecision rule:\\nWhen in doubt, preserve relevant code and exclude only obvious noise.\\n\\nSpecial rule:\\nIf the tree marks an item or family with tags such as “[Skipped by Step 5]”, “[Skipped]”, “[Binary/Unsupported]”, or equivalent, include a corresponding skip rule in the final list whenever safe.\\n\\nOutput strategy:\\n- Merge both styles: compact branch-level rules first, then a minimal tail of recurring artifact patterns.\\n- Prefer a union that feels like the practical combination of a repository-aware skip list and a lean generic cleanup list.\\n- Deduplicate aggressively.\\n- Output only the final fnmatch patterns, one per line, with no commentary.", note: "Use a resposta como ponto de partida. O resultado ideal é revisável, enxuto e alinhado ao objetivo específico do dump — nunca como substituto da revisão humana ou do Content Redactor." }
        },
        ack: {
            title: "Agradecimentos e Terceiros",
            body: "O CodeFlatten PRO apresenta uma saída estatística no estilo GitHub Linguist, inspirada no projeto de código aberto <a href=\"https://github.com/github-linguist/linguist\" target=\"_blank\" class=\"font-bold text-white hover:underline transition-colors\">Linguist</a> do GitHub. O motor subjacente também utiliza os recursos de Python, Tcl/Tk e Pillow."
        },
        check: {
            title: "Checklist rápido antes de gerar",
            item1: "Use nomes exatos para exclusões cirúrgicas.",
            item2: "Use wildcards para extensões, testes, locks e artefatos recorrentes.",
            item3: "Deixe o Safety Scan ligado na maior parte dos casos.",
            item4: "Deixe o Path Guard ligado para evitar roots e pastas críticas.",
            item5: "Ative a referência de binários quando quiser contexto estrutural sem embutir o conteúdo.",
            item6: "Revise o resultado final antes de compartilhar com terceiros ou com uma IA."
        },
        support_cta: {
            label: "Precisa de ajuda?",
            title: "Suporte técnico",
            body: "Se algo não estiver claro, envie um relato curto com prints e o comportamento observado. Isso acelera muito o diagnóstico."
        },
        labels: {
            recommended: "Recomendado",
            why: "Quando usar",
            rule_of_thumb: "Regra de bolso",
            reading: "Leitura do motor",
            before: "Antes",
            after: "Depois",
            when_worth: "Quando vale a pena",
            prompt_label: "Exemplo de pedido"
        }
    },
    support: {
        title: "Suporte - CodeFlatten PRO | BestToolsForever",
        hero: {
            label: "Suporte Técnico",
            title: "Centro de Ajuda CodeFlatten PRO.",
            subtitle: "Assistência dedicada para nossa suíte de utilitários de alta performance. Volte a construir com precisão.",
            back_to_home: "Voltar para Início"
        },
        faq: {
            title: "Base de Conhecimento e Suporte",
            item1: {
                q: "Comportamento inesperado ou erros na interface?",
                a: "Uma desinstalação e nova instalação limpa através da Microsoft Store geralmente resolve problemas de cache local e sincronização de atualizações."
            },
            item2: {
                q: "Quais são os benefícios do Premium Unlock?",
                a: "A versão Premium remove as limitações do número de perfis, permite regras de redação avançadas múltiplas e habilita overrides de configuração baseados no diretório."
            },
            item3: {
                q: "Como as licenças são gerenciadas?",
                a: "Todo o licenciamento é gerenciado com segurança pela Microsoft Store. Sua compra está vinculada à sua conta e é sincronizada automaticamente entre seus dispositivos Windows."
            }
        },
        report: {
            title: "Relatar um Problema",
            description: "Nossa equipe de engenharia investiga cada relato. Para agilizar sua solicitação:",
            item1: "Por favor, inclua uma captura de tela do erro.",
            item2: "Forneça sua build do Windows.",
            item3: "Dê uma descrição detalhada do problema.",
            contact_label: "Canal de Contato"
        }
    },
    legal: {
        title: "Informações Legais | BestToolsForever",
        hero: {
            title: "Legal & Privacidade",
            subtitle: "Nossos termos, acordos e compromisso com a privacidade dos seus dados."
        },
        eula: {
            title: "Contrato de Licença de Usuário Final (EULA)",
            content: `(Nota: Este documento legal está disponível apenas no idioma inglês.)

CODEFLATTEN PRO
END USER LICENSE AGREEMENT (EULA)
Version 1.1  
Last Updated: March 21, 2026

IMPORTANT NOTICE  
PLEASE READ THIS END USER LICENSE AGREEMENT ("AGREEMENT") CAREFULLY BEFORE INSTALLING, ACCESSING, OR USING CODEFLATTEN PRO (THE "SOFTWARE"). BY INSTALLING, ACCESSING, OR USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT INSTALL, ACCESS, OR USE THE SOFTWARE.

THIS AGREEMENT APPLIES TO THE BASE APPLICATION, ANY INCLUDED COMPONENTS, ANY UPDATES OR SUPPLEMENTS PROVIDED BY THE DEVELOPER UNLESS THEY COME WITH SEPARATE TERMS, AND ANY PREMIUM FEATURES MADE AVAILABLE THROUGH THE MICROSOFT STORE, INCLUDING ANY DURABLE ADD-ON IDENTIFIED BY THE DEVELOPER AS A PREMIUM UNLOCK.

1. PARTIES
This Agreement is entered into between you ("User," "you," or "your") and Luiz E. L. Junior, doing business as BestToolsForever ("Developer," "we," "us," or "our").

2. SOFTWARE DESCRIPTION
CodeFlatten PRO is a Windows software application designed to help users organize, filter, transform, review, and export project and text-based materials into structured output for documentation, review, and AI-related workflows.

The Software is designed to operate primarily on the local device. It may process files, folders, paths, rules, preferences, prompts, and other inputs selected or configured by the User, and it may generate outputs, manifests, diagnostics, reports, logs, and related artifacts based on those inputs and configurations.

3. COMMERCIAL MODEL
3.1 Base Application
The base application may be made available free of charge.

3.2 Premium Features
Certain features may be restricted to users who hold a valid premium entitlement obtained through the Microsoft Store, including, where applicable, a durable add-on identified by the Developer as a premium unlock.

3.3 Microsoft Store Entitlement
Availability of Premium Features depends on Microsoft Store entitlement status associated with the User's account, device, package, and licensing context. The Developer does not guarantee uninterrupted entitlement synchronization, and the Software may require refresh, reauthentication, reconnection, or relaunch in order to reflect updated entitlement status.

3.4 Store-Controlled Matters
Purchases, billing, taxation, cancellations, refunds, regional availability, account issues, and other Store-controlled matters for Premium Features are governed by the Microsoft Store and its applicable terms, systems, and policies, not by the Developer directly, except to the extent applicable law requires otherwise.

4. LICENSE GRANT
Subject to your compliance with this Agreement and with applicable platform rules, the Developer grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the Software solely for your own personal use or internal business use on compatible Windows devices.

The Software is licensed, not sold. No ownership rights are transferred to you. All rights not expressly granted are reserved by the Developer or its licensors.

5. OWNERSHIP AND INTELLECTUAL PROPERTY
The Software, including its source code, object code, structure, architecture, selection, arrangement, interface, design, branding, documentation, and related materials, is owned by the Developer or its licensors and is protected by applicable intellectual property and unfair competition laws.

Except for the limited license expressly granted in this Agreement, no right, title, or interest in or to the Software is granted to you.

6. LICENSE RESTRICTIONS
Except to the extent expressly permitted by applicable law notwithstanding this limitation, you may not:

a. reverse engineer, decompile, disassemble, or attempt to derive source code from the Software;  

b. modify, adapt, translate, or create derivative works of the Software;  

c. bypass, disable, defeat, or interfere with licensing, entitlement, packaging, security, access-control, or feature-gating mechanisms;  

d. rent, lease, lend, sublicense, sell, distribute, assign, commercially host, or otherwise make the Software available to third parties except as expressly authorized by the Developer in writing;  

e. use the Software in a manner that violates law, third-party rights, contractual obligations, confidentiality duties, or data protection obligations;  

f. use the Software to access, process, transform, disclose, or export content you do not have the right to handle; or  

g. remove, alter, or obscure proprietary notices, copyright notices, branding, or license markings.

7. USER CONTENT, USER DECISIONS, AND OUTPUT RESPONSIBILITY
7.1 User-Controlled Inputs
You are solely responsible for the files, folders, paths, prompts, content, settings, rules, profiles, destinations, credentials, and other inputs selected, connected, or configured through the Software.

7.2 Output Review
You are solely responsible for reviewing and validating all output generated, transformed, assembled, filtered, or assisted by the Software before using, sharing, publishing, uploading, transmitting, or relying on it.

7.3 No Guarantee of Complete Redaction or Safety
Features such as filters, exclusions, profile rules, scans, pattern controls, preview mechanisms, diagnostics, and other protections may reduce risk, but they do not guarantee complete removal of sensitive, confidential, proprietary, regulated, personal, or otherwise protected information.

7.4 Independent Judgment Required
You must independently verify that any output or disclosure is appropriate for your intended purpose, recipient, environment, and legal obligations.

8. THIRD-PARTY SERVICES, AI PLATFORMS, AND EXTERNAL DESTINATIONS
8.1 Optional Third-Party Use
You may choose to use the Software together with third-party services or destinations, including AI or LLM platforms, cloud services, repositories, external viewers, editors, storage providers, or collaboration tools.

8.2 No Control Over Third Parties
The Developer does not control and is not responsible for the availability, privacy practices, confidentiality, security, retention, training practices, logging, moderation, pricing, terms, performance, or behavior of any third-party service.

8.3 No Compatibility Guarantee
Compatibility with any third-party service may change at any time and is not guaranteed.

8.4 Third-Party Disclosure Risk
If you upload, paste, transmit, synchronize, export, or otherwise disclose content or output to any third party, you do so at your own risk and remain solely responsible for evaluating whether that disclosure is lawful, authorized, and appropriate.

9. PRIVACY, DATA HANDLING, CONSENT, AND SECURITY
9.1 Separate Privacy Policy
Use of the Software is also subject, where applicable, to the Developer's then-current Privacy Policy made available through the Microsoft Store listing, the Developer's support or legal pages, and/or within the Software where applicable.

The Privacy Policy is intended to describe, as applicable, the categories of personal information or personal data accessed, collected, stored, secured, transmitted, disclosed, or otherwise processed in connection with the Software; the purposes for such processing; relevant retention practices; user controls; available rights and request channels; and the categories of parties to whom such data may be disclosed.

To the extent a matter specifically concerns privacy, data protection, or personal data handling, the Privacy Policy will control over this Agreement in the event of a direct conflict, except where mandatory law requires a different result.

9.2 Local-First Design
The Software is designed to operate primarily on the local device. However, some product, platform, Store, licensing, update, crash, reliability, analytics, or support-related functions may involve Microsoft systems and, where implemented by the Developer, may involve Developer-controlled or third-party systems as described in the applicable Privacy Policy or in-product disclosures.

9.3 Microsoft Platform Services
Distribution, entitlement checks, Store transactions, package identity, platform diagnostics, crash handling, and related platform services may be provided in whole or in part by Microsoft and remain subject to Microsoft's applicable terms, notices, and privacy documentation.

9.4 Consent and Optional Sharing
Where the Software enables you to send, publish, or disclose personal information or other content to an outside service or third party, you are responsible for ensuring you have a lawful basis and any permissions or consents required for that disclosure.

Where applicable law or the Software's design requires express consent before a specific data-sharing action occurs, the Software, its related user interface, or the relevant workflow notice will seek that consent before the action is performed and will provide a means to withdraw or change the setting where legally required.

9.5 Security
To the extent the Software accesses, collects, stores, or transmits personal information under the Developer's control, the Developer intends to use reasonable administrative, technical, and organizational safeguards appropriate to the nature of the data and the reasonably foreseeable risks, recognizing that no method of storage, transmission, or processing is completely secure.

9.6 Rights and Requests
Questions, requests, or complaints relating to privacy, personal data, or data protection may be directed to the contact information identified in the then-current Privacy Policy or in Section 25 of this Agreement. Available rights and request procedures depend on applicable law and the Developer's role in the relevant processing activity.

9.7 Children
The Software is not directed to children for whom verifiable parental consent would be required under applicable law. You are responsible for ensuring that your use of the Software complies with laws relating to children or minors where relevant.

10. BACKUPS, DATA LOSS, AND FILE SAFETY
10.1 Backup Responsibility
You are solely responsible for maintaining adequate backups of your files, folders, projects, prompts, settings, profiles, exports, reports, logs, and related data before and during use of the Software.

10.2 Risk of Data Loss
Software that reads, transforms, exports, filters, renames, reorganizes, or writes files can fail or behave unexpectedly. Subject to Sections 16, 17, and 21, the Developer does not guarantee that use of the Software will be free from deletion, corruption, overwrite, rename errors, malformed output, broken references, path mistakes, or other forms of data loss or data degradation.

11. PREMIUM FEATURES AND ENTITLEMENT LIMITATIONS
11.1 Feature Availability
Premium Features may be unavailable if:

a. the relevant Microsoft Store entitlement is absent, inactive, delayed, revoked, or cannot be verified;  

b. the app is running in unpackaged, side-loaded, development, test, or unsupported licensing modes;  

c. Microsoft Store or related platform services are unavailable, delayed, blocked, or malfunctioning;  

d. the account, region, package, device, or licensing context does not support the requested feature; or  

e. the relevant feature has been modified, replaced, suspended, or discontinued.

11.2 No Manual Key Obligation
Unless expressly stated otherwise by the Developer in writing, the official licensing model for Premium Features is Microsoft Store-managed entitlement. Manual key delivery, key custody, offline activation, or alternative entitlement models are not part of the official model.

12. SUPPORT AND MAINTENANCE
Unless expressly stated by the Developer in writing or required by applicable law, the Developer has no obligation to provide support, maintenance, updates, bug fixes, feature enhancements, compatibility updates, migration assistance, or continued availability of the Software or any Premium Features.

Any support, responses, fixes, or updates provided by the Developer are voluntary unless separately agreed in writing.

Microsoft, your hardware manufacturer, and your device distributor are not responsible for providing support for the Software unless one of them is the application publisher.

13. UPDATES, CHANGES, AND AVAILABILITY
The Developer may, at any time and to the extent permitted by law, modify, suspend, discontinue, replace, patch, or update any part of the Software, Premium Features, packaging, compatibility behavior, entitlement behavior, documentation, or related materials.

Nothing in this Agreement guarantees that any feature, workflow, integration, interface, or compatibility path will remain available indefinitely.

14. NO HIGH-RISK USE
The Software is not designed, certified, or intended for use in safety-critical, mission-critical, medical, emergency, legal-compliance, financial-compliance, export-control, or other high-risk environments where an error, omission, delay, malfunction, or unintended disclosure could reasonably be expected to cause personal injury, unlawful conduct, regulatory exposure, property damage, or significant business harm.

You agree not to use the Software in such contexts.

15. DISCLAIMER OF WARRANTIES
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SOFTWARE IS PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS."

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER, ON BEHALF OF ITSELF AND ITS LICENSORS, DISCLAIMS ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER WARRANTIES, CONDITIONS, AND REPRESENTATIONS, INCLUDING ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, RELIABILITY, SECURITY, ERROR-FREE OPERATION, UNINTERRUPTED AVAILABILITY, OR THAT ANY OUTPUT WILL BE COMPLETE, CORRECT, SAFE, COMPLIANT, OR FIT FOR DISCLOSURE TO ANY THIRD PARTY.

YOU MAY HAVE ADDITIONAL RIGHTS UNDER THE LAWS OF YOUR COUNTRY, STATE, OR PROVINCE, AND THIS AGREEMENT DOES NOT CHANGE THOSE RIGHTS WHERE APPLICABLE LAW DOES NOT PERMIT IT TO DO SO.

16. LIMITATION OF LIABILITY
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER AND ITS LICENSORS, AFFILIATES, CONTRACTORS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, FILES, CONTENT, PROJECTS, REVENUE, PROFITS, GOODWILL, BUSINESS OPPORTUNITY, OR BUSINESS INTERRUPTION ARISING OUT OF OR RELATED TO THE SOFTWARE OR THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL AGGREGATE LIABILITY OF THE DEVELOPER FOR CLAIMS ARISING OUT OF OR RELATING TO THE SOFTWARE OR THIS AGREEMENT WILL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID FOR THE SOFTWARE OR THE RELEVANT PREMIUM UNLOCK DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) TEN UNITED STATES DOLLARS (US $10.00).

NOTHING IN THIS AGREEMENT EXCLUDES OR LIMITS LIABILITY TO THE EXTENT SUCH LIABILITY CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW, INCLUDING NON-WAIVABLE CONSUMER RIGHTS OR MANDATORY LIABILITY RULES.

17. LIMITED INDEMNITY
If you use the Software in a business, commercial, organizational, professional, or other non-consumer capacity, then, to the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless the Developer and its licensors, affiliates, contractors, officers, employees, and agents from and against third-party claims, losses, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) to the extent arising from:

a. your unlawful use or misuse of the Software;  

b. your breach of this Agreement;  

c. your violation of law, third-party rights, confidentiality obligations, or data protection obligations; or  

d. content, data, prompts, files, exports, or disclosures that you supplied, controlled, or transmitted through the Software, except to the extent the claim was caused by the Developer's own breach of law, fraud, gross negligence, or willful misconduct where such standards apply.

This Section does not apply to the extent prohibited by consumer protection law or other mandatory law.

18. TERMINATION
This Agreement terminates automatically if you materially fail to comply with its terms.

The Developer may suspend, terminate, or restrict your license to use the Software to the extent permitted by law and applicable platform rules.

Upon termination, you must cease use of the Software and uninstall or destroy any copies under your control, except to the extent continued access, archival copies, or re-download rights are governed by Microsoft Store entitlements, backup systems, or mandatory legal rights.

19. EXPORT, SANCTIONS, AND COMPLIANCE
You must comply with all domestic and international laws and regulations applicable to the Software and to your use of it, including export control, sanctions, trade, privacy, consumer protection, intellectual property, and sector-specific compliance rules where relevant.

You may not use, export, re-export, or transfer the Software in violation of applicable export control, sanctions, or trade laws.

20. GOVERNING LAW
If you acquired or use the Software as a consumer, the mandatory laws of the country, state, or province where you reside apply to the extent required by law, and nothing in this Agreement deprives you of non-waivable rights or remedies available under those laws.

If you do not use the Software as a consumer, this Agreement and any non-mandatory disputes arising out of or relating to it are governed by the laws of the Federative Republic of Brazil, excluding its conflict-of-law rules.

21. FORUM AND DISPUTES
If you are a consumer, you may bring claims in any forum that applicable law permits, and the Developer may bring claims only in forums permitted by applicable law.

If you are not a consumer, the courts located in Fortaleza, Ceará, Brazil will have non-exclusive jurisdiction over disputes arising out of or relating to this Agreement, unless mandatory law requires otherwise.

22. NO WAIVER OF MANDATORY RIGHTS
Nothing in this Agreement excludes, restricts, or waives any right, remedy, guarantee, warranty, protection, or condition that cannot lawfully be excluded, restricted, or waived under applicable law.

23. SEVERABILITY
If any provision of this Agreement is held invalid, unenforceable, or unlawful, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect.

24. ENTIRE AGREEMENT
This Agreement, the then-current applicable Privacy Policy, any additional terms that accompany the Software, and any mandatory Microsoft Store or platform terms that apply, constitute the entire agreement between you and the Developer regarding the Software.

25. CONTACT AND LEGAL NOTICES
For legal, support, privacy, or licensing inquiries, you may contact the Developer at:

Email: besttoolsforever@outlook.com

The Developer may also identify current support, legal, or privacy contact channels in the Microsoft Store listing, within the Software, or on the Developer's then-current support or legal pages.

By installing, accessing, or using the Software, you acknowledge that you have read, understood, and agreed to this Agreement.

`
        },
        privacy: {
            title: "Política de Privacidade",
            content: `(Nota: Este documento legal está disponível apenas no idioma inglês.)

CODEFLATTEN PRO
PRIVACY POLICY
Version 1.0  
Last Updated: March 21, 2026

This Privacy Policy explains how Luiz E. L. Junior, doing business as BestToolsForever ("Developer," "we," "us," or "our"), handles personal data in connection with CodeFlatten PRO (the "App").

This Policy is intended to apply to the Microsoft Store version of the App and any other distribution of the App unless a distribution-specific notice or supplemental privacy notice states otherwise.

By using the App, you acknowledge that your use of the App may involve the processing of personal data as described in this Policy. This Policy should be read together with the App's End User License Agreement (EULA). If a matter specifically concerns privacy, personal data, or data protection, this Privacy Policy controls over the EULA to the extent of any direct conflict, except where mandatory law requires a different result.

1. WHO CONTROLS PERSONAL DATA COVERED BY THIS POLICY
The controller for personal data covered by this Policy is:

Luiz E. L. Junior / BestToolsForever  
Contact email: besttoolsforever@outlook.com

Where required by applicable law, additional contact or representative information may be provided in the App, in the Microsoft Store listing, or on the Developer's support or legal pages.

2. SCOPE OF THIS POLICY
This Policy covers personal data that we access, collect, receive, use, store, disclose, or otherwise process in connection with the App.

This Policy does not govern:
- personal data processed solely by Microsoft under Microsoft's own terms and privacy documentation, except to describe at a high level how Microsoft platform services may interact with the App;
- personal data processed solely by third-party services that you independently choose to use with the App; or
- data that has been irreversibly anonymized so that it no longer relates to an identified or identifiable person.

3. HOW THE APP GENERALLY WORKS
CodeFlatten PRO is designed to operate primarily on your local device. In ordinary use, the App may access and process files, folders, file names, folder names, paths, user-created settings, profiles, prompts, rules, logs, manifests, reports, and generated output on the device in order to provide its features.

Not all data that the App touches is sent to us. In many cases, information is processed locally and remains under your control unless:
- the App needs to interact with Microsoft platform or Store services;
- you contact us for support or send us information voluntarily;
- you choose to export, upload, synchronize, publish, or otherwise disclose information to a third party; or
- a specific feature clearly states that information will leave the device.

4. CATEGORIES OF PERSONAL DATA WE MAY PROCESS
Depending on how you use the App, how it is distributed, and which features are enabled, we may process the following categories of personal data.

4.1 Data You Provide Directly
This may include:
- your name, email address, and contact details if you contact us;
- the contents of support requests, bug reports, screenshots, logs, attachments, and correspondence you choose to send us;
- billing or order-reference information you choose to share when asking for support, although Microsoft generally manages Store transactions;
- any other information you intentionally submit to us.

4.2 Local App Data and User-Selected Content
This may include information that the App accesses locally on your device to perform requested operations, such as:
- selected files, folders, file names, folder names, paths, and directory structures;
- project materials, text content, prompts, templates, exclusion rules, profiles, preferences, destinations, manifests, reports, and output artifacts;
- local usage state needed to run the App's features, such as app configuration, UI preferences, local entitlement cache, and local workflow state.

This category may contain personal data if the files, paths, names, content, or outputs you choose to process include personal data.

4.3 Device, Technical, and Diagnostic Data
This may include:
- app version, package identity, operating system version, error state, crash state, reliability information, and basic technical diagnostics;
- license or entitlement status information needed to determine whether Premium Features are available;
- limited technical information associated with support, anti-abuse, troubleshooting, app security, or compatibility.

4.4 Microsoft Store and Platform Data
When the App is distributed through Microsoft channels or interacts with Microsoft platform features, Microsoft may process transaction, licensing, entitlement, crash, reliability, platform, and related data under Microsoft's own privacy terms. We may receive limited results, status signals, analytics, or error-reporting information from Microsoft where Microsoft makes such data available to developers or where such information is necessary for app operation, support, fraud prevention, or compliance.

4.5 Data from Third Parties You Choose to Use
If you use the App with third-party services such as AI platforms, cloud storage, repositories, editors, or collaboration tools, those services may receive data that you choose to send to them. We are not responsible for the privacy practices of those third parties.

4.6 Sensitive Personal Data
The App is not intended to require sensitive personal data for ordinary operation. Do not use the App to process or disclose sensitive personal data unless you have a lawful basis, adequate safeguards, and a real need to do so. If you voluntarily send sensitive personal data to us, we will process it only as reasonably necessary for the purpose for which it was provided and subject to applicable law.

5. SOURCES OF PERSONAL DATA
We may obtain personal data from the following sources:
- directly from you;
- from your use of the App on your device;
- from Microsoft, including Microsoft Store, entitlement, diagnostics, analytics, or other platform systems;
- from service providers acting on our behalf, where used;
- from third parties when you instruct or enable an integration or communication.

6. PURPOSES OF PROCESSING
We may process personal data for the following purposes, as applicable:
- to provide, operate, maintain, secure, and improve the App;
- to enable requested app features and preserve app functionality;
- to verify entitlement status and manage Premium Feature access;
- to troubleshoot, debug, monitor reliability, prevent abuse, and investigate incidents;
- to respond to support requests, communications, and legal inquiries;
- to comply with legal, regulatory, tax, accounting, consumer protection, and law-enforcement obligations;
- to establish, exercise, or defend legal claims;
- to protect our rights, users, systems, and business;
- to document product issues and support product quality;
- to provide notices, changes, and important information about the App.

We do not need to receive all categories of information described in this Policy in order for the App to function in every scenario. The categories and purposes that apply depend on how you use the App and which services are involved.

7. LEGAL BASES FOR PROCESSING
Depending on the jurisdiction and context, we may rely on one or more of the following legal bases:
- performance of a contract or steps taken at your request before entering into a contract;
- compliance with a legal or regulatory obligation;
- our legitimate interests, where applicable law allows and where those interests are not overridden by your rights and freedoms;
- your consent, where consent is required or where we choose to rely on consent;
- protection against fraud, abuse, security threats, or unlawful activity;
- protection of rights in judicial, administrative, or arbitral proceedings.

Where consent is required by applicable law, we will seek consent through an appropriate process and, where applicable law requires, provide a way to withdraw consent. Withdrawal of consent does not affect processing already carried out on a lawful basis before withdrawal.

8. WHEN DATA LEAVES YOUR DEVICE
Because the App is local-first, much of its processing may occur only on your device. However, information may leave your device in the following circumstances:
- when the App interacts with Microsoft Store, entitlement, update, crash, reliability, analytics, or platform services;
- when you use features that intentionally export, upload, sync, publish, or transmit data;
- when you contact us or send us support material;
- when a clearly disclosed feature or workflow sends data to a third party;
- when disclosure is required by law or reasonably necessary to protect rights, security, or the integrity of systems.

9. HOW WE SHARE PERSONAL DATA
We may share personal data only as reasonably necessary for the purposes described in this Policy, including with the following categories of recipients:

9.1 Microsoft
We may rely on Microsoft for distribution, commerce, licensing, entitlement, platform services, crash reporting, analytics, or related technical services. Microsoft processes personal data under Microsoft's own terms and privacy documentation.

9.2 Service Providers and Processors
We may use carefully selected service providers or processors to help with functions such as communications, support handling, hosting of legal or support pages, security, compliance, or similar operational needs. They may process personal data only on our instructions or as otherwise permitted by applicable law and their role.

9.3 Third Parties at Your Direction
We may disclose data to third parties when you ask us to do so, when you use a feature that intentionally sends data to a third party, or when you independently connect or use the App with a third-party service.

9.4 Legal and Safety Disclosures
We may disclose personal data if we reasonably believe disclosure is necessary to:
- comply with law, regulation, legal process, or enforceable governmental request;
- protect the rights, property, safety, or security of users, the public, the Developer, or the App;
- investigate fraud, abuse, or security incidents; or
- establish, exercise, or defend legal claims.

9.5 Business Transfers
If the App, business, or related assets are reorganized, sold, transferred, financed, or otherwise subject to a corporate transaction, personal data may be disclosed as part of that process subject to applicable law.

9.6 No Sale of Personal Data
We do not intentionally sell personal data in exchange for money.

10. THIRD-PARTY SERVICES AND EXTERNAL DESTINATIONS
The App may make it easier for you to prepare, export, or send content to third-party services, including AI, LLM, cloud, repository, or collaboration services. When you choose to send information to those services, their privacy terms and practices apply to the information they receive.

You are responsible for determining whether you have the right to disclose the relevant information to the third party and whether any consent, notice, contract, or regulatory step is required before you do so.

11. DATA RETENTION
We keep personal data only for as long as reasonably necessary for the purposes described in this Policy, unless a longer retention period is required or permitted by law.

In general:
- local files, settings, preferences, profiles, and content stored on your device remain under your control and are typically retained until you delete them, modify them, uninstall the App, or your device or storage environment changes them;
- support emails, support attachments, and correspondence may be retained for as long as reasonably necessary to respond, document issues, maintain records, resolve disputes, or comply with law;
- legal, accounting, tax, fraud-prevention, and compliance records may be retained for longer periods where required or justified;
- Microsoft-controlled Store, platform, commerce, diagnostics, analytics, or entitlement data are retained according to Microsoft's policies and systems, not this Policy alone.

When we no longer need personal data that is under our control, we will delete it, anonymize it, or securely isolate it as appropriate and reasonably feasible, subject to legal and operational requirements.

12. DATA SECURITY
We seek to use reasonable administrative, technical, and organizational measures designed to protect personal data under our control against unauthorized access, destruction, loss, alteration, or disclosure.

No system or method of storage, processing, or transmission is completely secure. You should also take steps to protect your own data, including maintaining backups, using appropriate device security, limiting unnecessary disclosure, and carefully reviewing content before exporting or sharing it.

13. INTERNATIONAL DATA TRANSFERS
We are based in Brazil, but personal data may be processed in other countries depending on the services involved, including Microsoft services, email infrastructure, hosting providers, or third-party services you choose to use.

Where applicable law requires safeguards for international transfers, we will seek to rely on a lawful transfer mechanism or another valid basis recognized by applicable law.

14. CHILDREN AND MINORS
The App is not directed to children for whom verifiable parental consent would be required under applicable law. We do not intentionally seek to collect personal data directly from children in a manner that would require such consent.

If you believe a child has provided personal data to us in a way that is not permitted by applicable law, contact us using the information in this Policy so that we can review the matter and take appropriate action.

15. YOUR RIGHTS AND CHOICES
Depending on your location and the applicable law, you may have rights such as the right to:
- confirm whether we process your personal data;
- access your personal data;
- correct incomplete, inaccurate, or outdated personal data;
- request anonymization, blocking, restriction, objection, or deletion in certain circumstances;
- request portability, where applicable;
- request information about sharing of your personal data;
- withdraw consent where processing is based on consent;
- request review of decisions where a law grants such a right;
- lodge a complaint with a competent supervisory authority.

Some of these rights are not absolute and may depend on the role we play in the processing, the technical context, legal exceptions, trade-secret protections, security considerations, and the law that applies to your request.

15.1 How to Exercise Rights
To make a privacy request, contact us at besttoolsforever@outlook.com and describe your request with enough detail for us to evaluate it. We may ask for information reasonably necessary to verify your identity and understand the scope of your request.

Where we do not control the relevant data, or where Microsoft or another third party independently controls the data, we may direct you to the relevant controller or platform.

16. MICROSOFT-SPECIFIC CONTEXT
If you obtained the App through the Microsoft Store or use Microsoft platform services with the App:
- Microsoft may independently process certain personal data under the Microsoft Privacy Statement and related Microsoft terms;
- Microsoft may provide us with limited analytics, diagnostics, crash, commerce, or entitlement-related information depending on platform settings and program features;
- some app functionality, update behavior, licensing state, and entitlement checks may depend on Microsoft systems outside our direct control.

For information about Microsoft's own data practices, please consult the Microsoft Privacy Statement and related Microsoft documentation.

17. REGION-SPECIFIC NOTES
17.1 Brazil / LGPD
If the Brazilian General Data Protection Law (LGPD) applies, you may have rights including confirmation of processing, access, correction, anonymization, blocking, deletion in certain cases, portability, information about sharing, information about the consequences of denying consent where consent is required, and revocation of consent where applicable.

17.2 Other Jurisdictions
If other privacy or consumer-protection laws apply to your use of the App, you may also have additional rights. We will handle requests in accordance with applicable law.

18. CHANGES TO THIS PRIVACY POLICY
We may update this Privacy Policy from time to time to reflect changes in the App, the law, our practices, Microsoft platform requirements, or third-party services used in connection with the App.

When we make material changes, we may update the date at the top of this Policy and, where appropriate, provide additional notice through the App, the Microsoft Store listing, or another reasonable channel.

19. CONTACT US
For privacy questions, requests, or complaints, contact:

BestToolsForever / Luiz E. L. Junior  
Email: besttoolsforever@outlook.com

If you contact us about privacy, please include enough information for us to understand your relationship to the App, the issue you are raising, and the country or state whose law you believe applies.

`
        },
        ack: {
            title: "Agradecimentos e Terceiros",
            content: `CodeFlatten PRO
Agradecimentos e Avisos de Terceiros

O CodeFlatten PRO pode incluir ou redistribuir componentes de software de terceiros.
Esses componentes continuam sujeitos a seus próprios direitos autorais, termos de licença,
e requisitos de aviso. Este arquivo identifica os componentes de terceiros
que foram confirmados como relevantes para o pacote atual do produto distribuído
com base no snapshot analisado do repositório, evidências do layout do pacote e
fontes oficiais de licenciamento upstream.

======================================================================
COMPONENTES DE TERCEIROS CONFIRMADOS
======================================================================

1) Python
   Usado para:
   - Runtime/interpretador embutido para o executável desktop empacotado.

   Licença:
   - Python Software Foundation License Versão 2.

   Direitos autorais / atribuição:
   - Copyright (c) 2001 Python Software Foundation.
   - Todos os Direitos Reservados.

   Resumo do aviso:
   - Redistribuições de software Python devem reter o Contrato de Licença da PSF
     e o aviso de direitos autorais da PSF.
   - A versão exata do Python usada no snapshot de build analisado não foi
     determinável apenas pelo dump do repositório.

   Fonte oficial:
   - https://docs.python.org/3/license.html

----------------------------------------------------------------------

2) Tcl/Tk
   Usado para:
   - Toolkit/runtime de GUI usado por meio da interface tkinter do Python.

   Licença:
   - Tcl/Tk License Terms (estilo BSD permissiva).

   Direitos autorais / atribuição:
   - Os avisos de direitos autorais são mantidos pelos Regents of the University of
     California, Sun Microsystems, Inc., Scriptics Corporation e outras
     partes conforme refletido nos termos de licenciamento Tcl/Tk upstream.

   Resumo do aviso:
   - Os avisos de direitos autorais existentes devem ser retidos em todas as cópias.
   - O aviso de licença do Tcl/Tk deve acompanhar distribuições que
     redistribuam componentes Tcl/Tk.
   - A versão exata do Tcl/Tk usada no snapshot de build analisado não foi
     determinável apenas pelo dump do repositório.

   Fontes oficiais:
   - https://www.tcl-lang.org/software/tcltk/license.html
   - https://docs.python.org/3/library/tkinter.html

----------------------------------------------------------------------

3) Pillow (fork amigável do PIL)
   Usado para:
   - Manipulação de imagens no aplicativo desktop (PIL.Image / PIL.ImageTk).

   Licença:
   - Licença MIT-CMU.

   Direitos autorais / atribuição:
   - Copyright (c) 1997-2011 Secret Labs AB.
   - Copyright (c) 1995-2011 Fredrik Lundh e colaboradores.
   - Copyright (c) 2010 Jeffrey A. Clark e colaboradores.

   Resumo do aviso:
   - O aviso de direitos autorais deve aparecer em todas as cópias.
   - O aviso de direitos autorais e o aviso de permissão devem aparecer na
     documentação de suporte.
   - Os nomes da Secret Labs AB ou do autor não podem ser usados em
     publicidade ou publicidade relacionada à distribuição do software
     sem permissão prévia por escrito.
   - A versão exata do Pillow usada no snapshot de build analisado não foi
     determinável apenas pelo dump do repositório.

   Fontes oficiais:
   - https://pillow.readthedocs.io/en/stable/about.html
   - https://github.com/python-pillow/Pillow/blob/main/LICENSE

======================================================================
AGRADECIMENTO ADICIONAL / REFERÊNCIA DO PROJETO
======================================================================

GitHub Linguist (github-linguist/linguist)

   Por que aparece aqui:
   - O snapshot analisado mostra uma opção voltada ao usuário rotulada
     "Estatísticas Linguist (Estilo GitHub)" e saída gerada com o cabeçalho
     "Estatísticas GitHub Linguist".
   - Isso torna o GitHub Linguist um projeto apropriado para se agradecer
     no site público, mesmo que o pacote Windows analisado não
     comprove que a biblioteca Ruby github-linguist em si foi redistribuída
     dentro do aplicativo empacotado final.

   Nota importante de escopo:
   - Esta entrada é incluída como uma entrada de agradecimento/referência.
   - Não deve ser lida como uma alegação de que a gem github-linguist, sua
     árvore vendor, ou suas dependências Ruby/nativas foram confirmadas como empacotadas
     no pacote CodeFlatten PRO enviado a partir do snapshot analisado.

   Licença:
   - Licença MIT.

   Direitos autorais / atribuição:
   - Copyright (c) 2017 GitHub, Inc.

   Fontes oficiais:
   - https://github.com/github-linguist/linguist
   - https://github.com/github-linguist/linguist/blob/main/LICENSE

======================================================================
ANALISADOS E NÃO INCLUÍDOS NA LISTA DE AVISOS AO CLIENTE
======================================================================

Os itens a seguir foram analisados, mas não estão listados acima como entradas 
confirmadas de aviso de terceiros voltadas ao cliente para o pacote atual do produto:

- PyInstaller
  Analisado como ferramenta de build. A documentação oficial do PyInstaller declara que
  bundles executáveis gerados pelo PyInstaller podem ser distribuídos sob qualquer
  licença compatível com dependências empacotadas, e que o próprio arquivo de licença 
  ou os agradecimentos do PyInstaller não precisam ser incluídos no aplicativo.

- SDK do Windows / Empacotamento para Store / ferramentas de validação
  Exemplos incluem makeappx.exe, signtool.exe, appcert.exe, MSBuild,
  componentes do conjunto de ferramentas do Visual Studio e scripts de build relacionados. Estes foram
  tratados como ferramentas de build ou validação, não como componentes do produto 
  voltados ao cliente redistribuídos como parte do CodeFlatten PRO.

- Plataforma Microsoft Store / Partner Center
  Analisadas como serviços externos de distribuição, direitos, transações e
  serviços de diagnóstico de plataforma, não como componentes de software redistribuídos
  dentro do pacote do produto.

- Logotipos de produtos, ícones e arte da Store sob branding CodeFlatten /
  BestToolsForever
  Analisados como ativos de primeira parte, não avisos de software de terceiros.

- Artefatos de licença local legados preservados apenas para histórico/auditoria
  Esses foram identificados explicitamente no repositório como legados e não
  fazem parte do modelo de licenciamento da Microsoft Store para o produto
  CodeFlatten PRO atual.

======================================================================
RECOMENDAÇÃO DE CONFIRMAÇÃO MANUAL
======================================================================

O snapshot analisado também exibe uma ExplorerCommandVerb.dll empacotada dentro
do layout do pacote Store/MSIX. No entanto, os arquivos fonte locais C/C++ da
integração nativa Explorer mantêm os cabeçalhos de copyright da Microsoft afirmando
"All rights reserved", enquanto o sinal de repositório original confiável aponta
códigos de exemplo com licença própria. Como o
snapshot revisto não abrange um certificado local que comprova sua procedência nem
um aviso legal na pasta dessa subsessão local, o texto oficial a ser disponibilizado
no manual do usuário tem de ser verificado e revisado minuciosamente por humano 
antes do software estar totalmente live.

O snapshot da avaliação também evidenciou pouca informação em termos de
definição precisa sobre bindings do Store API (winrt/winsdk) na build pública.

O mesmo ponto se refere à gem github-linguist. Caso a equipe no futuro
venha a atrelar a biblioteca real vinculada dentro da base Windows,
este documento necessita ser ajustado na seção final confirmando à licença completa.

======================================================================
RESUMO FINAL
======================================================================

Com base no dump do repositório revisado e evidências do pacote, o grupo estreito e 
orientado à produção de avisos de terceiros para o CodeFlatten PRO é:
- Python
- Tcl/Tk
- Pillow

Este arquivo também inclui um item descritivo focado no apoio de referência externa ao
GitHub Linguist em razão de aparecer publicamente no passo-a-passo.

Vale declarar explicitamente os limites desse documento que visa ser transparente 
nos moldes da cópia atual sem fazer inferências adicionais.`
        }
    }
};
