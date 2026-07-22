# MyEasyAI — Hero estático (GitHub Pages)

Protótipo estático de alta fidelidade da **primeira dobra** da landing MyEasyAI: faixa promocional, cabeçalho e hero em duas colunas, com SEO/GEO básico.

## Publicar no GitHub Pages

1. Crie um repositório (ex.: `myeasyaistatic`) e envie estes arquivos na **raiz**.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` (ou `master`), pasta `/` (root).
3. Após o deploy, a URL será algo como:
   `https://<seu-usuario>.github.io/myeasyaistatic/`
4. Atualize nos arquivos abaixo a URL canônica (substitua `caioa` se necessário):
   - `index.html` — `link[rel=canonical]`, Open Graph, Twitter e JSON-LD
   - `robots.txt` — linha `Sitemap:`
   - `sitemap.xml` — `<loc>`

O arquivo `.nojekyll` garante que o GitHub Pages sirva os estáticos sem processar Jekyll.

## Abrir localmente

Abra `index.html` no navegador ou sirva a pasta:

```bash
# Python
python -m http.server 8080

# Node
npx --yes serve .
```

## Links de produção

| Elemento | Destino |
| --- | --- |
| Testar grátis / CTA | https://myeasyai.com/auth/signup |
| Entrar | https://myeasyai.com/auth/login |
| Como funciona | https://myeasyai.com/#sobre |
| Ferramentas | https://myeasyai.com/#funcionalidades |
| Planos | https://myeasyai.com/#packages |
| FAQ | https://myeasyai.com/#faq |

## Escopo

**Incluído:** primeira dobra, responsividade, copy (30 dias grátis), SEO/GEO, assets otimizados.

**Fora:** autenticação, pagamentos, demais seções da landing, backend, analytics.
