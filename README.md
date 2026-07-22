# MyEasyAI: landing estática completa

Landing page estática da MyEasyAI (HTML, CSS e JavaScript puro), pronta para GitHub Pages e futura integração com o sistema existente.

## Publicar no GitHub Pages

1. Envie os arquivos na **raiz** do repositório.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` (ou `master`), pasta `/` (root).
3. URL típica: `https://<seu-usuario>.github.io/myeasyaistatic/`
4. Atualize a URL canônica (substitua `caioa` se necessário) em:
   - `index.html` — `link[rel=canonical]`, Open Graph, Twitter e JSON-LD
   - `robots.txt` — linha `Sitemap:`
   - `sitemap.xml` — `<loc>`

Na integração com produção, troque o canonical e as metas para `https://myeasyai.com/`.

O arquivo `.nojekyll` garante que o GitHub Pages sirva os estáticos sem processar Jekyll.

## Abrir localmente

```bash
python -m http.server 8080
# ou
npx --yes serve .
```

## Links de produção

| Elemento | Destino |
| --- | --- |
| Testar grátis / CTAs | https://myeasyai.com/auth/signup |
| Entrar | https://myeasyai.com/auth/login |
| Contato | mailto:support@myeasyai.com |
| Central de Ajuda | https://myeasyai.com/support |
| Instagram | https://www.instagram.com/myeasyai |
| YouTube | https://www.youtube.com/@MyEasyAI |

Âncoras de navegação apontam para seções desta página (`#como-funciona`, `#ferramentas`, `#beneficios`, `#planos`, `#faq`).

## Estrutura

```
index.html
styles.css
script.js
robots.txt
sitemap.xml
README.md
assets/
  icons/     # Lucide SVG + ícones de módulo
  logo/
  social/
```

## Escopo

**Incluído:** landing completa, responsividade, copy revisada, SEO/GEO, mockups HTML/CSS, toggle de planos, FAQ accordion, menu mobile.

**Fora:** autenticação, pagamentos, APIs, backend, analytics, envio real de formulários.

## Design e planos

- Spec: `docs/superpowers/specs/2026-07-22-myeasyai-landing-page-design.md`
- Plano: `docs/superpowers/plans/2026-07-22-myeasyai-landing-page.md`
