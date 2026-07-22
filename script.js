(function () {
  "use strict";

  var SITE_LEGAL = {
    privacyUrl: "privacy.html",
    termsUrl: "terms.html"
  };

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var privacyLink = document.getElementById("link-privacy");
  var termsLink = document.getElementById("link-terms");
  if (privacyLink && SITE_LEGAL.privacyUrl) privacyLink.href = SITE_LEGAL.privacyUrl;
  if (termsLink && SITE_LEGAL.termsUrl) termsLink.href = SITE_LEGAL.termsUrl;

  var toggle = document.getElementById("menu-toggle");
  var panel = document.getElementById("nav-mobile");

  function setMenuOpen(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (open) panel.removeAttribute("hidden");
    else panel.setAttribute("hidden", "");
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenuOpen(false);
    });
  }

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
        if (expanded) answer.setAttribute("hidden", "");
        else answer.removeAttribute("hidden");
      }
    });
  });

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
      if (value) el.textContent = "R$ " + value;
    });
    document.querySelectorAll(".plan-was").forEach(function (el) {
      if (mode === "monthly") el.setAttribute("hidden", "");
      else el.removeAttribute("hidden");
    });
  }

  if (monthlyBtn) monthlyBtn.addEventListener("click", function () { applyBilling("monthly"); });
  if (annualBtn) annualBtn.addEventListener("click", function () { applyBilling("annual"); });
  applyBilling(document.body.getAttribute("data-billing") || "annual");

  var MODULES = {
    website: { name: "MyEasyWebsite", tagline: "Informe o negócio e revise a primeira versão do site", icon: "assets/icons/globe.svg", kind: "website" },
    posts: { name: "MyEasyPosts", tagline: "Ideias, legendas e calendário para revisar", icon: "assets/icons/pen-line.svg", kind: "posts" },
    clientes: { name: "MyEasyClientes", tagline: "Contatos, etapas e acompanhamentos em um só lugar", icon: "assets/icons/users.svg", kind: "clientes" },
    financas: { name: "MyEasyFinanças", tagline: "Receitas, despesas e resumo do mês", icon: "assets/icons/wallet.svg", kind: "financas" },
    emprego: { name: "MyEasyEmprego", tagline: "Currículo claro e preparação para entrevistas", icon: "assets/icons/file-text.svg", kind: "emprego" },
    app: { name: "MyEasyAPP", tagline: "Telas e fluxos da sua ideia em protótipo", icon: "assets/icons/smartphone.svg", kind: "app" }
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderWebsite() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div><div class="pv-url">https://barbeariaestilo.myeasyai.com</div><div class="pv-actions"><span class="pv-btn ghost">Editar site</span><span class="pv-btn lime">Publicar</span></div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site"><span class="pv-status"><span class="pulse"></span> Montando a página inicial</span>' +
      '<nav class="pv-site-nav"><strong>Barbearia Estilo</strong><span>Serviços</span><span>Contato</span></nav>' +
      '<div class="pv-site-hero"><span class="pv-badge">SERVIÇOS</span><h4>Barbearia Estilo</h4><p>Cortes, barba e horário marcado.</p><span class="pv-cta">Agendar horário</span></div></div>' +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble user">Quero um site para minha barbearia no centro.</div>' +
      '<div class="pv-bubble bot">Certo. Qual o nome do negócio e quais serviços você oferece?</div>' +
      '<div class="pv-bubble user">Barbearia Estilo. Corte, barba e hidratação.</div>' +
      '<div class="pv-bubble bot">Montei a estrutura ao lado. Revise os textos e publique quando estiver pronto.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderPosts() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div><div class="pv-url">app.myeasyai.com/posts</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-posts"><p class="pv-kicker">Calendário da semana</p>' +
      '<div class="pv-post-card"><span class="pv-badge">SEG</span><strong>Cardápio do dia</strong><p>Legenda para Instagram, pronta para revisar</p></div>' +
      '<div class="pv-post-card"><span class="pv-badge">QUA</span><strong>Combo da semana</strong><p>Roteiro curto para Stories</p></div>' +
      '<div class="pv-post-card"><span class="pv-badge">SEX</span><strong>Bastidores</strong><p>Ideia de carrossel com imagem sugerida</p></div></div>' +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble user">Preciso de conteúdo para a marmitaria nesta semana.</div>' +
      '<div class="pv-bubble bot">Qual o objetivo: divulgação do cardápio, promoção ou bastidores?</div>' +
      '<div class="pv-bubble user">Cardápio e uma promoção.</div>' +
      '<div class="pv-bubble bot">Organizei o calendário. Abra cada post para revisar a legenda.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderClientes() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div><div class="pv-url">app.myeasyai.com/clientes</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-crm"><p class="pv-kicker">Oportunidades de hoje</p><div class="pv-crm-cols">' +
      '<div><h5>Novos</h5><div class="pv-crm-card">Ana · WhatsApp</div><div class="pv-crm-card">Pedro · Indicação</div></div>' +
      '<div><h5>Em conversa</h5><div class="pv-crm-card">Carla · orçamento</div></div>' +
      '<div><h5>Fechado</h5><div class="pv-crm-card">João · mensal</div></div>' +
      "</div></div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble user">Recebi um contato novo pelo WhatsApp.</div>' +
      '<div class="pv-bubble bot">Cadastrei Ana em Novos. Quer criar uma tarefa de retorno para amanhã?</div>' +
      '<div class="pv-bubble user">Sim, com lembrete.</div>' +
      '<div class="pv-bubble bot">Pronto. Quando ela responder, mova para Em conversa.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderFinancas() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div><div class="pv-url">app.myeasyai.com/financas</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-finance-demo">' +
      '<p class="pv-kicker">Resumo de março</p>' +
      '<div class="pv-finance-grid">' +
      '<div class="pv-finance-card"><span>Receitas</span><strong>R$ 8.420</strong></div>' +
      '<div class="pv-finance-card"><span>Despesas</span><strong>R$ 5.180</strong></div>' +
      '<div class="pv-finance-card accent"><span>Saldo</span><strong>R$ 3.240</strong></div>' +
      "</div>" +
      '<ul class="pv-finance-list"><li>Assinatura de ferramentas · R$ 189</li><li>Insumos · R$ 1.240</li><li>Venda de kits · R$ 2.100</li></ul>' +
      '<p class="pv-notice">A ferramenta organiza informações e não substitui orientação financeira profissional.</p>' +
      "</div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble user">Registrei a venda do kit e a conta de energia.</div>' +
      '<div class="pv-bubble bot">Categorizei os lançamentos. Quer ver o resumo do mês?</div>' +
      '<div class="pv-bubble user">Sim, com as assinaturas separadas.</div>' +
      '<div class="pv-bubble bot">Pronto. O painel ao lado mostra receitas, despesas e saldo.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderEmprego() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div><div class="pv-url">app.myeasyai.com/emprego</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-resume-demo">' +
      '<p class="pv-kicker">Currículo para a vaga</p>' +
      "<h4>Maria Souza</h4><p>Assistente administrativo</p>" +
      '<div class="pv-resume-block"><strong>Resumo</strong><p>Experiência em atendimento, organização de agenda e suporte a equipes.</p></div>' +
      '<div class="pv-resume-block"><strong>Experiência</strong><p>Atendimento ao cliente · Organização de documentos · Controle de agenda</p></div>' +
      '<div class="pv-resume-block"><strong>Entrevista</strong><p>3 perguntas sugeridas para praticar</p></div>' +
      "</div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble user">Quero adaptar meu currículo para assistente administrativo.</div>' +
      '<div class="pv-bubble bot">Liste suas experiências recentes e o que a vaga pede.</div>' +
      '<div class="pv-bubble user">Atendimento, agenda e documentos.</div>' +
      '<div class="pv-bubble bot">Organizei o currículo ao lado. Revise o resumo e pratique as perguntas.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderApp() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-dots" aria-hidden="true"><span></span><span></span><span></span></div><div class="pv-url">app.myeasyai.com/app</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-app-demo">' +
      '<p class="pv-kicker">Mapa de telas</p>' +
      '<div class="pv-app-flow"><span>1. Início</span><span>2. Agenda</span><span>3. Clientes</span><span>4. Confirmação</span></div>' +
      '<div class="pv-app-phone"><strong>Agenda do dia</strong><p>Lista de horários e botão de novo atendimento</p></div>' +
      "</div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble user">Quero um app simples de agenda para clientes.</div>' +
      '<div class="pv-bubble bot">Quais telas principais você precisa?</div>' +
      '<div class="pv-bubble user">Início, agenda, clientes e confirmação.</div>' +
      '<div class="pv-bubble bot">Montei o fluxo e a primeira versão visual. Revise antes de seguir.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderPreview(mod) {
    if (mod.kind === "website") return renderWebsite();
    if (mod.kind === "posts") return renderPosts();
    if (mod.kind === "clientes") return renderClientes();
    if (mod.kind === "financas") return renderFinancas();
    if (mod.kind === "emprego") return renderEmprego();
    if (mod.kind === "app") return renderApp();
    return "";
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
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    if (dialogClose) dialogClose.focus();
  }

  function closeModule() {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    document.body.classList.remove("modal-open");
    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
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

  if (dialogClose) dialogClose.addEventListener("click", closeModule);
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
