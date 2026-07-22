(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Mobile menu */
  var toggle = document.getElementById("menu-toggle");
  var panel = document.getElementById("nav-mobile");

  function setMenuOpen(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (open) {
      panel.removeAttribute("hidden");
    } else {
      panel.setAttribute("hidden", "");
    }
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-item > button").forEach(function (button) {
    button.addEventListener("click", function () {
      var expanded = button.getAttribute("aria-expanded") === "true";
      var panelId = button.getAttribute("aria-controls");
      var answer = panelId ? document.getElementById(panelId) : null;

      document.querySelectorAll(".faq-item > button").forEach(function (other) {
        if (other === button) return;
        other.setAttribute("aria-expanded", "false");
        var otherId = other.getAttribute("aria-controls");
        var otherPanel = otherId ? document.getElementById(otherId) : null;
        if (otherPanel) otherPanel.setAttribute("hidden", "");
      });

      button.setAttribute("aria-expanded", String(!expanded));
      if (answer) {
        if (expanded) {
          answer.setAttribute("hidden", "");
        } else {
          answer.removeAttribute("hidden");
        }
      }
    });
  });

  /* Billing toggle */
  var monthlyBtn = document.getElementById("billing-monthly");
  var annualBtn = document.getElementById("billing-annual");

  function applyBilling(mode) {
    document.body.setAttribute("data-billing", mode);

    if (monthlyBtn && annualBtn) {
      monthlyBtn.setAttribute("aria-pressed", String(mode === "monthly"));
      annualBtn.setAttribute("aria-pressed", String(mode === "annual"));
    }

    document.querySelectorAll(".plan-card .amount").forEach(function (el) {
      var value =
        mode === "monthly"
          ? el.getAttribute("data-price-monthly")
          : el.getAttribute("data-price-annual");
      if (value) {
        el.textContent = "R$ " + value;
      }
    });

    document.querySelectorAll(".plan-was").forEach(function (el) {
      if (mode === "monthly") {
        el.setAttribute("hidden", "");
      } else {
        el.removeAttribute("hidden");
      }
    });
  }

  if (monthlyBtn) {
    monthlyBtn.addEventListener("click", function () {
      applyBilling("monthly");
    });
  }

  if (annualBtn) {
    annualBtn.addEventListener("click", function () {
      applyBilling("annual");
    });
  }

  applyBilling(document.body.getAttribute("data-billing") || "annual");

  /* —— Module modal —— */
  var MODULES = {
    website: {
      name: "MyEasyWebsite",
      tagline: "Seu assistente melhora o site com você, conversando",
      icon: "assets/icons/globe.svg",
      preview: "website"
    },
    posts: {
      name: "MyEasyPosts",
      tagline: "Posts, legendas e calendário editorial com imagens",
      icon: "assets/icons/pen-line.svg",
      preview: "posts"
    },
    clientes: {
      name: "MyEasyClientes",
      tagline: "CRM com IA para contatos, vendas e follow-up",
      icon: "assets/icons/users.svg",
      preview: "clientes"
    },
    consultor: {
      name: "MyEasyConsultor",
      tagline: "Plano de negócios e decisões com fluxo guiado",
      icon: "assets/icons/briefcase.svg",
      preview: "simple",
      steps: [
        "Descreva o negócio e o objetivo",
        "Responda perguntas sobre mercado e oferta",
        "Receba um plano estruturado para revisar"
      ],
      chat: [
        { role: "user", text: "Quero um plano simples para minha loja de marmitas." },
        { role: "bot", text: "Vamos montar o plano em etapas. Qual é o público principal e a cidade?" }
      ]
    },
    juridico: {
      name: "MyEasyJurídico",
      tagline: "PDFs, templates e orientações sobre leis brasileiras",
      icon: "assets/icons/scale.svg",
      preview: "simple",
      steps: [
        "Envie ou selecione o documento",
        "Peça resumo, modelo ou esclarecimento",
        "Baixe ou copie o resultado organizado"
      ],
      chat: [
        { role: "user", text: "Preciso de um modelo básico de contrato de prestação." },
        { role: "bot", text: "Abri os templates. Me diga o tipo de serviço e as partes envolvidas." }
      ]
    },
    preco: {
      name: "MyEasyPreço",
      tagline: "Margens e tabelas de preço profissionais",
      icon: "assets/icons/tag.svg",
      preview: "simple",
      steps: [
        "Informe custos e tipo de oferta",
        "Defina margem e posicionamento",
        "Gere a tabela de preços"
      ],
      chat: [
        { role: "user", text: "Quero precificar um serviço de consultoria por hora." },
        { role: "bot", text: "Me passa custo mensal, horas disponíveis e margem desejada." }
      ]
    },
    avatar: {
      name: "MyEasyAvatar",
      tagline: "Nome e aparência do assistente em toda a plataforma",
      icon: "assets/icons/user.svg",
      preview: "simple",
      steps: [
        "Escolha o nome do assistente",
        "Personalize a aparência",
        "Use o mesmo guia em todos os módulos"
      ],
      chat: [
        { role: "user", text: "Quero chamar meu assistente de Jorge." },
        { role: "bot", text: "Pronto. Jorge fica disponível para te guiar nos módulos." }
      ]
    },
    financas: {
      name: "MyEasyFinanças",
      tagline: "Renda, despesas e relatórios claros",
      icon: "assets/icons/wallet.svg",
      preview: "simple",
      steps: [
        "Registre entradas e saídas",
        "Organize categorias e assinaturas",
        "Veja o relatório gerado pela IA"
      ],
      chat: [
        { role: "user", text: "Quero ver quanto gasto com ferramentas todo mês." },
        { role: "bot", text: "Liste as assinaturas. Eu monto o resumo e o gráfico." }
      ]
    },
    emprego: {
      name: "MyEasyEmprego",
      tagline: "Currículo e preparação para entrevistas",
      icon: "assets/icons/file-text.svg",
      preview: "simple",
      steps: [
        "Informe experiência e objetivo",
        "Gere o currículo alinhado ao mercado",
        "Treine respostas de entrevista"
      ],
      chat: [
        { role: "user", text: "Preciso de um currículo para vaga de atendimento." },
        { role: "bot", text: "Me conta suas experiências recentes que eu monto a estrutura." }
      ]
    },
    rh: {
      name: "MyEasyRH",
      tagline: "Vagas, candidatos e triagem com IA",
      icon: "assets/icons/users.svg",
      preview: "simple",
      steps: [
        "Publique a vaga",
        "Receba e filtre currículos",
        "Organize as etapas seletivas"
      ],
      chat: [
        { role: "user", text: "Vou abrir uma vaga de vendedor." },
        { role: "bot", text: "Vamos montar a descrição e os critérios de triagem." }
      ]
    },
    docs: {
      name: "MyEasyDocs",
      tagline: "Documentos, resumos e índices com IA",
      icon: "assets/icons/file-text.svg",
      preview: "simple",
      steps: [
        "Envie ou crie o documento",
        "Peça resumo ou índice",
        "Edite e organize no acervo"
      ],
      chat: [
        { role: "user", text: "Resuma este PDF de 20 páginas." },
        { role: "bot", text: "Envie o arquivo. Eu devolvo o resumo e os pontos principais." }
      ]
    },
    cursos: {
      name: "MyEasyCursos",
      tagline: "Cursos sob demanda com plano e certificado",
      icon: "assets/icons/graduation-cap.svg",
      preview: "simple",
      steps: [
        "Escolha o tema",
        "Receba o plano de estudos",
        "Acompanhe o progresso até o certificado"
      ],
      chat: [
        { role: "user", text: "Quero um curso rápido de planilhas para vendas." },
        { role: "bot", text: "Montei o roteiro em 5 aulas. Quer começar pela primeira?" }
      ]
    },
    app: {
      name: "MyEasyAPP",
      tagline: "Aplicativos com IA, sem código",
      icon: "assets/icons/smartphone.svg",
      preview: "simple",
      steps: [
        "Descreva o app desejado",
        "Ajuste telas e fluxos",
        "Gere o protótipo para testar"
      ],
      chat: [
        { role: "user", text: "Quero um app simples de agenda para clientes." },
        { role: "bot", text: "Liste as telas principais. Eu monto o primeiro layout." }
      ]
    },
    fitness: {
      name: "MyEasyFitness",
      tagline: "Treinos personalizados para a sua rotina",
      icon: "assets/icons/dumbbell.svg",
      preview: "simple",
      steps: [
        "Informe objetivo e nível",
        "Receba o plano de treino",
        "Ajuste frequência e exercícios"
      ],
      chat: [
        { role: "user", text: "Quero treinar em casa 3 vezes por semana." },
        { role: "bot", text: "Montei um plano iniciante. Prefere foco em força ou condicionamento?" }
      ]
    },
    nutricao: {
      name: "MyEasyNutrição",
      tagline: "Refeições, macros e lista de compras",
      icon: "assets/icons/utensils.svg",
      preview: "simple",
      steps: [
        "Informe meta e preferências",
        "Receba o plano de refeições",
        "Gere a lista de compras da semana"
      ],
      chat: [
        { role: "user", text: "Quero um cardápio simples para emagrecer." },
        { role: "bot", text: "Me diga restrições alimentares e quantas refeições por dia." }
      ]
    },
    viagens: {
      name: "MyEasyViagens",
      tagline: "Roteiros com custos e dicas práticas",
      icon: "assets/icons/plane.svg",
      preview: "simple",
      steps: [
        "Informe destino e datas",
        "Receba o roteiro dia a dia",
        "Veja estimativa de custos e links úteis"
      ],
      chat: [
        { role: "user", text: "Quero 4 dias em Florianópolis em família." },
        { role: "bot", text: "Vou montar o roteiro com passeios leves e estimativa de gastos." }
      ]
    }
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function chatHtml(messages) {
    return messages
      .map(function (m) {
        return (
          '<div class="pv-bubble ' +
          m.role +
          '">' +
          escapeHtml(m.text) +
          "</div>"
        );
      })
      .join("");
  }

  function renderWebsitePreview() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome">' +
      '<div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="pv-url">https://barbeariaestilo.myeasyai.com</div>' +
      '<div class="pv-actions">' +
      '<span class="pv-btn ghost">Editar site</span>' +
      '<span class="pv-btn lime">Colocar no ar</span>' +
      "</div></div>" +
      '<div class="pv-split">' +
      '<div class="pv-site">' +
      '<span class="pv-status"><span class="pulse"></span> Montando seu site...</span>' +
      '<nav class="pv-site-nav"><strong>Barbearia Estilo</strong><span>Serviços</span><span>Planos</span></nav>' +
      '<div class="pv-site-hero">' +
      '<span class="pv-badge">BARBEARIA</span>' +
      "<h4>Barbearia Estilo</h4>" +
      "<p>Seu visual no ponto certo.</p>" +
      '<span class="pv-cta">Agendar horário</span>' +
      '<div class="pv-lines" aria-hidden="true"><i></i><i></i><i></i></div>' +
      "</div></div>" +
      '<aside class="pv-chat">' +
      '<div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Jorge (IA)</strong></div></div>' +
      '<div class="pv-chat-body">' +
      chatHtml([
        { role: "user", text: "Quero criar um site pra minha barbearia" },
        { role: "bot", text: "Me diga o nome da barbearia que a gente monta juntos." },
        { role: "user", text: "O nome é Barbearia Estilo" },
        { role: "bot", text: "Já comecei do lado. Agora descreva os serviços e o bairro." }
      ]) +
      "</div>" +
      '<div class="pv-chat-input"><span>descreva sua barbearia...</span><span class="pv-send" aria-hidden="true"></span></div>' +
      "</aside></div></div>"
    );
  }

  function renderPostsPreview() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome">' +
      '<div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="pv-url">app.myeasyai.com/posts</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-posts">' +
      '<p class="pv-kicker">Calendário da semana</p>' +
      '<div class="pv-post-card"><span class="pv-badge">SEG</span><strong>Antes e depois do corte</strong><p>Legenda + imagem sugerida para Instagram</p></div>' +
      '<div class="pv-post-card"><span class="pv-badge">QUA</span><strong>Promoção de quarta</strong><p>CTA para agendar pelo WhatsApp</p></div>' +
      '<div class="pv-post-card"><span class="pv-badge">SEX</span><strong>Dica de cuidados</strong><p>Carrossel educativo pronto para editar</p></div>' +
      "</div>" +
      '<aside class="pv-chat">' +
      '<div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Jorge (IA)</strong></div></div>' +
      '<div class="pv-chat-body">' +
      chatHtml([
        { role: "user", text: "Preciso de 5 posts para a barbearia esta semana." },
        { role: "bot", text: "Montei o calendário. Quer foco em promoção ou autoridade?" }
      ]) +
      "</div>" +
      '<div class="pv-chat-input"><span>qual o tom dos posts...</span><span class="pv-send" aria-hidden="true"></span></div>' +
      "</aside></div></div>"
    );
  }

  function renderClientesPreview() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome">' +
      '<div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="pv-url">app.myeasyai.com/clientes</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-crm">' +
      '<p class="pv-kicker">Pipeline de hoje</p>' +
      '<div class="pv-crm-cols">' +
      '<div><h5>Novos</h5><div class="pv-crm-card">Ana · WhatsApp</div><div class="pv-crm-card">Pedro · Indicação</div></div>' +
      '<div><h5>Em conversa</h5><div class="pv-crm-card">Carla · orçamento</div></div>' +
      '<div><h5>Fechado</h5><div class="pv-crm-card">João · mensal</div></div>' +
      "</div></div>" +
      '<aside class="pv-chat">' +
      '<div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Jorge (IA)</strong></div></div>' +
      '<div class="pv-chat-body">' +
      chatHtml([
        { role: "user", text: "Quem eu preciso retornar hoje?" },
        { role: "bot", text: "Carla está há 2 dias sem resposta. Quer uma mensagem pronta?" }
      ]) +
      "</div>" +
      '<div class="pv-chat-input"><span>criar tarefa de follow-up...</span><span class="pv-send" aria-hidden="true"></span></div>' +
      "</aside></div></div>"
    );
  }

  function renderSimplePreview(mod) {
    var steps = (mod.steps || [])
      .map(function (s, i) {
        return "<li><span>" + (i + 1) + "</span>" + escapeHtml(s) + "</li>";
      })
      .join("");
    return (
      '<div class="pv-app pv-simple">' +
      '<div class="pv-simple-main">' +
      '<div class="pv-simple-icon"><img src="' +
      escapeHtml(mod.icon) +
      '" width="40" height="40" alt=""></div>' +
      "<h4>" +
      escapeHtml(mod.name) +
      "</h4>" +
      '<ol class="pv-simple-steps">' +
      steps +
      "</ol></div>" +
      '<aside class="pv-chat">' +
      '<div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Jorge (IA)</strong></div></div>' +
      '<div class="pv-chat-body">' +
      chatHtml(mod.chat || []) +
      "</div></aside></div>"
    );
  }

  function renderPreview(mod) {
    if (mod.preview === "website") return renderWebsitePreview();
    if (mod.preview === "posts") return renderPostsPreview();
    if (mod.preview === "clientes") return renderClientesPreview();
    return renderSimplePreview(mod);
  }

  var dialog = document.getElementById("module-dialog");
  var dialogTitle = document.getElementById("module-dialog-title");
  var dialogTag = document.getElementById("module-dialog-tagline");
  var dialogIcon = document.getElementById("module-dialog-icon");
  var dialogBody = document.getElementById("module-dialog-body");
  var dialogClose = document.getElementById("module-dialog-close");
  var lastTrigger = null;

  function openModule(id, trigger) {
    var mod = MODULES[id];
    if (!mod || !dialog) return;
    lastTrigger = trigger || null;
    if (dialogTitle) dialogTitle.textContent = mod.name;
    if (dialogTag) dialogTag.textContent = mod.tagline;
    if (dialogIcon) {
      dialogIcon.src = mod.icon;
      dialogIcon.alt = "";
    }
    if (dialogBody) dialogBody.innerHTML = renderPreview(mod);
    document.body.classList.add("modal-open");
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    if (dialogClose) dialogClose.focus();
  }

  function closeModule() {
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    document.body.classList.remove("modal-open");
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
    }
  }

  window.openModuleDemo = function (id) {
    openModule(id, null);
  };

  document.querySelectorAll("[data-module-open]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      openModule(el.getAttribute("data-module-open"), el);
    });
  });

  if (dialogClose) {
    dialogClose.addEventListener("click", closeModule);
  }

  if (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeModule();
    });
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeModule();
    });
  }
})();
