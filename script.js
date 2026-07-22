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
})();
