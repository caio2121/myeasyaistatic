(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

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
    document.querySelectorAll("[data-show]").forEach(function (el) {
      var show = el.getAttribute("data-show");
      if (show === mode) el.removeAttribute("hidden");
      else el.setAttribute("hidden", "");
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

  var productTabs = Array.prototype.slice.call(document.querySelectorAll(".product-tab"));
  var productPanels = Array.prototype.slice.call(document.querySelectorAll(".product-panel"));

  function activateProductTab(tabId, focusTab, updateHash) {
    var selected = null;
    productTabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-tab") === tabId;
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive) selected = tab;
    });
    productPanels.forEach(function (panelEl) {
      var match = panelEl.id === "panel-" + tabId;
      if (match) panelEl.removeAttribute("hidden");
      else panelEl.setAttribute("hidden", "");
    });
    if (updateHash !== false && selected) {
      var panelEl = document.getElementById("panel-" + tabId);
      var anchor = panelEl ? panelEl.getAttribute("data-anchor") : null;
      if (anchor && history.replaceState) {
        history.replaceState(null, "", "#" + anchor);
      }
    }
    if (focusTab && selected) selected.focus();
  }

  productTabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      activateProductTab(tab.getAttribute("data-tab"), false, true);
    });
    tab.addEventListener("keydown", function (event) {
      var nextIndex = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % productTabs.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index - 1 + productTabs.length) % productTabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = productTabs.length - 1;
      } else {
        return;
      }
      event.preventDefault();
      activateProductTab(productTabs[nextIndex].getAttribute("data-tab"), true, true);
    });
  });

  function openTabFromHash() {
    if (!location.hash) return;
    var hash = location.hash.replace("#", "");
    var hashPanel = document.querySelector('.product-panel[data-anchor="' + hash + '"]');
    if (hashPanel && hashPanel.id.indexOf("panel-") === 0) {
      activateProductTab(hashPanel.id.replace("panel-", ""), false, false);
      var tools = document.getElementById("ferramentas");
      if (tools) tools.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  openTabFromHash();
  window.addEventListener("hashchange", openTabFromHash);

  document.querySelectorAll("[data-tab-link]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var tabId = link.getAttribute("data-tab-link");
      if (!tabId) return;
      event.preventDefault();
      activateProductTab(tabId, false, true);
      var tools = document.getElementById("ferramentas");
      if (tools) tools.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var otherToggle = document.getElementById("toggle-other-modules");
  var otherExtra = document.getElementById("other-modules-extra");
  if (otherToggle && otherExtra) {
    otherToggle.addEventListener("click", function () {
      var open = otherToggle.getAttribute("aria-expanded") === "true";
      otherToggle.setAttribute("aria-expanded", String(!open));
      otherToggle.textContent = open ? "Ver todas as ferramentas" : "Ocultar ferramentas extras";
      if (open) otherExtra.setAttribute("hidden", "");
      else otherExtra.removeAttribute("hidden");
    });
  }

  var compareBtn = document.getElementById("open-compare");
  var comparePanel = document.getElementById("compare-panel");
  if (compareBtn && comparePanel) {
    compareBtn.addEventListener("click", function () {
      var open = compareBtn.getAttribute("aria-expanded") === "true";
      compareBtn.setAttribute("aria-expanded", String(!open));
      if (open) comparePanel.setAttribute("hidden", "");
      else comparePanel.removeAttribute("hidden");
    });
  }

  var MODULES = {
    website: {
      name: "MyEasyWebsite",
      tagline: "Editor e prévia do site para revisar antes de publicar",
      icon: "assets/icons/globe.svg",
      kind: "website"
    },
    posts: {
      name: "MyEasyPosts",
      tagline: "Calendário e editor de conteúdo para revisão",
      icon: "assets/icons/pen-line.svg",
      kind: "posts"
    },
    clientes: {
      name: "MyEasyClientes",
      tagline: "Quadro de oportunidades e tarefas",
      icon: "assets/icons/users.svg",
      kind: "clientes"
    },
    financas: {
      name: "MyEasyFinanças",
      tagline: "Resumo, categorias e lançamentos",
      icon: "assets/icons/wallet.svg",
      kind: "financas"
    },
    emprego: {
      name: "MyEasyEmprego",
      tagline: "Formulário e currículo organizado",
      icon: "assets/icons/file-text.svg",
      kind: "emprego"
    },
    app: {
      name: "MyEasyAPP",
      tagline: "Mapa de telas e protótipo visual",
      icon: "assets/icons/smartphone.svg",
      kind: "app"
    }
  };

  function renderWebsite() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-url">app.myeasyai.com/website</div><div class="pv-actions"><span class="pv-btn ghost">Editar</span><span class="pv-btn lime">Publicar</span></div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site"><span class="pv-status"><span class="pulse"></span> Prévia pronta para revisão</span>' +
      '<nav class="pv-site-nav"><strong>Barbearia Estilo</strong><span>Serviços</span><span>Contato</span></nav>' +
      '<div class="pv-site-hero"><span class="pv-badge">PUBLICADO</span><h4>Barbearia Estilo</h4><p>Cortes, barba e horário marcado.</p><span class="pv-cta">Agendar pelo WhatsApp</span></div></div>' +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong><span>Apoio</span></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble bot">Revise o texto da página inicial e o botão de contato antes de publicar.</div>' +
      '<div class="pv-bubble user">Quero destacar horário marcado.</div>' +
      '<div class="pv-bubble bot">Atualizei a prévia ao lado. Confira e publique quando estiver pronto.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderPosts() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-url">app.myeasyai.com/posts</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-posts"><p class="pv-kicker">Calendário da semana</p>' +
      '<div class="pv-post-card"><span class="pv-badge">SEG</span><strong>Cardápio do dia</strong><p>Legenda pronta para revisar</p></div>' +
      '<div class="pv-post-card"><span class="pv-badge">QUA</span><strong>Combo da semana</strong><p>Roteiro curto para Stories</p></div>' +
      '<div class="pv-post-card"><span class="pv-badge">SEX</span><strong>Bastidores</strong><p>Ideia de carrossel</p></div></div>' +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong><span>Apoio</span></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble bot">Abra cada post do calendário para ajustar a legenda antes de publicar.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderClientes() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-url">app.myeasyai.com/clientes</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-crm"><p class="pv-kicker">Oportunidades de hoje</p><div class="pv-crm-cols">' +
      '<div><h5>Novos</h5><div class="pv-crm-card">Ana · WhatsApp</div><div class="pv-crm-card">Pedro · Indicação</div></div>' +
      '<div><h5>Em conversa</h5><div class="pv-crm-card">Carla · orçamento</div><div class="pv-crm-card">Tarefa: retorno amanhã</div></div>' +
      '<div><h5>Fechado</h5><div class="pv-crm-card">João · mensal</div></div>' +
      "</div></div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong><span>Apoio</span></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble bot">Mova o contato conforme a conversa avança e use lembretes para os próximos passos.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderFinancas() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-url">app.myeasyai.com/financas</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-finance-demo">' +
      '<p class="pv-kicker">Resumo de março</p>' +
      '<div class="pv-finance-grid">' +
      '<div class="pv-finance-card"><span>Receitas</span><strong>R$ 8.420</strong></div>' +
      '<div class="pv-finance-card"><span>Despesas</span><strong>R$ 5.180</strong></div>' +
      '<div class="pv-finance-card accent"><span>Saldo</span><strong>R$ 3.240</strong></div>' +
      "</div>" +
      '<ul class="pv-finance-list"><li>Insumos · R$ 1.240</li><li>Assinaturas · R$ 189</li><li>Vendas do mês · R$ 8.420</li></ul>' +
      '<p class="pv-notice">A ferramenta organiza informações e não substitui orientação financeira profissional.</p>' +
      "</div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong><span>Apoio</span></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble bot">Consulte categorias e o resumo do período antes de tomar decisões.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderEmprego() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-url">app.myeasyai.com/emprego</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-resume-demo">' +
      '<p class="pv-kicker">Currículo para a vaga</p>' +
      "<h4>Maria Souza</h4><p>Assistente administrativo</p>" +
      '<div class="pv-resume-block"><strong>Resumo</strong><p>Experiência em atendimento, organização de agenda e suporte a equipes.</p></div>' +
      '<div class="pv-resume-block"><strong>Experiência</strong><p>Atendimento ao cliente · Organização de documentos · Controle de agenda</p></div>' +
      '<div class="pv-resume-block"><strong>Entrevista</strong><p>3 perguntas sugeridas para praticar</p></div>' +
      "</div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong><span>Apoio</span></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble bot">Compare as informações fornecidas com o texto organizado e pratique as perguntas.</div>' +
      "</div></aside></div></div>"
    );
  }

  function renderApp() {
    return (
      '<div class="pv-app">' +
      '<div class="pv-chrome"><div class="pv-url">app.myeasyai.com/app</div></div>' +
      '<div class="pv-split">' +
      '<div class="pv-site pv-app-demo">' +
      '<p class="pv-kicker">Protótipo · mapa de telas</p>' +
      '<div class="pv-app-flow"><span>1. Início</span><span>2. Agenda</span><span>3. Clientes</span><span>4. Confirmação</span></div>' +
      '<div class="pv-app-phone"><strong>Agenda do dia</strong><p>Lista de horários e botão de novo atendimento</p></div>' +
      "</div>" +
      '<aside class="pv-chat"><div class="pv-chat-head"><img src="assets/jorge-face.png" width="32" height="32" alt=""><div><strong>Assistente</strong><span>Apoio</span></div></div>' +
      '<div class="pv-chat-body">' +
      '<div class="pv-bubble bot">Isto é um protótipo visual para testar e apresentar a ideia, não um app publicado em lojas.</div>' +
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

  function getFocusable(container) {
    return Array.prototype.slice.call(
      container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(function (el) {
      return !el.hasAttribute("disabled") && el.offsetParent !== null;
    });
  }

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
    dialog.addEventListener("keydown", function (event) {
      if (event.key !== "Tab") return;
      var focusable = getFocusable(dialog);
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }
})();
