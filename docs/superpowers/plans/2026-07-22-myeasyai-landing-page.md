# MyEasyAI Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar a landing estática completa da MyEasyAI conforme `docs/superpowers/specs/2026-07-22-myeasyai-landing-page-design.md`.

**Architecture:** Página única na raiz (`index.html` + `styles.css` + `script.js`), tokens CSS da identidade do site vivo, mockups HTML/CSS, âncoras locais e CTAs para auth de produção.

**Tech Stack:** HTML5, CSS3, JavaScript puro, Lucide SVG locais, fontes Hanken Grotesk + Inter.

## Global Constraints

- Sem frameworks; sem Font Awesome; sem travessão longo (`—`) na copy
- Sem dados/depoimentos inventados; preços validados em myeasyai.com na implementação
- Mockups HTML/CSS (assets existentes de logo/favicon/OG/Jorge podem ser reutilizados)
- Canonical Pages: `https://caioa.github.io/myeasyaistatic/`
- CTAs: `https://myeasyai.com/auth/signup` e `/auth/login`
- Commit apenas se o usuário pedir

## File map

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Semântica completa, SEO/GEO, todas as seções |
| `styles.css` | Tokens, layout, componentes, responsivo |
| `script.js` | Menu, FAQ accordion, toggle Mensal/Anual |
| `robots.txt` / `sitemap.xml` | Indexação |
| `README.md` | Publicação e troca de canonical |
| `assets/icons/*.svg` | Lucide (+ ícones de módulo existentes) |
| `assets/logo/logo.svg` | Marca |
| `assets/social/og-image.webp` | Open Graph (mover/copiar existente) |

### Preços validados (fonte comparação anual myeasyai.com)

| Plano | Anual (destaque) | Mensal | Pix anual |
| --- | --- | --- | --- |
| Individual | R$ 29,70/mês | R$ 79,40/mês | R$ 299,70 |
| Plus | R$ 39,70/mês | R$ 119,40/mês | R$ 399,70 |
| Premium | R$ 49,70/mês | R$ 159,40/mês | R$ 499,70 |

---

### Task 1: Fundação (tokens, shell, header, promo)

**Files:**
- Modify: `index.html`, `styles.css`
- Create: `script.js` (menu stub)

- [x] **Step 1:** Definir `:root` tokens (navy, creme, azul, lima, tipografia) em `styles.css`
- [x] **Step 2:** Estrutura HTML: skip-link, promo, header sticky, nav desktop/mobile, main vazio
- [x] **Step 3:** Implementar menu mobile em `script.js` (aria-expanded, hidden)
- [x] **Step 4:** Verificar abertura local sem erros de console no menu

### Task 2: Hero + proposta de valor + como funciona

**Files:**
- Modify: `index.html`, `styles.css`

- [ ] **Step 1:** Hero com H1 único, CTAs, trust, mockup assistente Jorge + sidebar módulos
- [ ] **Step 2:** Seção `#beneficios` (proposta de valor)
- [ ] **Step 3:** Seção `#como-funciona` com 4 passos
- [ ] **Step 4:** Checar responsivo mobile do hero

### Task 3: Ferramentas, diferenciais, casos, demo, confiança

**Files:**
- Modify: `index.html`, `styles.css`
- Create: ícones Lucide em `assets/icons/` conforme necessário

- [ ] **Step 1:** Grid de módulos públicos (trabalho + bônus) com copy reescrita
- [ ] **Step 2:** Diferenciais vs IA genérica (tabela/comparativo sem atacar marcas)
- [ ] **Step 3:** Casos de uso + demo HTML (entrada → fluxo → resultado)
- [ ] **Step 4:** Bloco confiança (Stripe, CyberShield, infra, EUA, suporte BR)

### Task 4: Planos + FAQ + CTA final + footer

**Files:**
- Modify: `index.html`, `styles.css`, `script.js`

- [ ] **Step 1:** Cards de planos com `data-price-*` e toggle Mensal/Anual
- [ ] **Step 2:** FAQ accordion + respostas factuais (+ cartão, cancelamento, planos)
- [ ] **Step 3:** CTA final distinto do hero + footer completo
- [ ] **Step 4:** Testar toggle e accordion no browser

### Task 5: SEO/GEO, assets, robots, README, verificação

**Files:**
- Modify: `index.html` (meta + JSON-LD), `robots.txt`, `sitemap.xml`, `README.md`
- Organize: `assets/logo`, `assets/social`

- [ ] **Step 1:** Metadados, OG/Twitter, JSON-LD (Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList)
- [ ] **Step 2:** Atualizar robots/sitemap/README
- [ ] **Step 3:** Servir localmente e validar seções, links, console
- [ ] **Step 4:** Checklist de aceite do spec

## Verification

Abrir `index.html` via `python -m http.server 8080` e confirmar:
- Todas as 14 seções renderizam
- Menu mobile, FAQ e toggle de planos funcionam
- Nenhum `—` na copy visível
- CTAs apontam para signup/login
- Sem erros JS no console
