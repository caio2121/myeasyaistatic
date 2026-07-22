# MyEasyAI landing page

Landing comercial estatica (HTML, CSS e JavaScript puro) para a MyEasyAI.

## Ambientes

| Ambiente | Base URL | robots |
| --- | --- | --- |
| Staging (este repositorio / GitHub Pages) | `https://caio2121.github.io/myeasyaistatic/` | `noindex, nofollow` |
| Producao | `https://myeasyai.com/` | `index, follow` |

Configuracao central em `index.html` (`#site-env`) e meta `myeasyai:canonical-production`.

### Ao publicar em producao

1. Em `#site-env`, defina `"env":"production"`.
2. Troque `meta name="robots"` para `index, follow`.
3. Adicione `link rel="canonical"` apontando para `https://myeasyai.com/`.
4. Atualize Open Graph, Twitter e URLs absolutas de imagem para o dominio oficial.
5. Em `robots.txt`, permita indexacao e aponte o sitemap de producao.
6. Em `sitemap.xml`, use `https://myeasyai.com/`.

## Links legais

Politica de Privacidade e Termos de Uso no site oficial abrem em modal, sem URL publica dedicada. No codigo, `SITE_LEGAL` em `script.js` e os links `#link-privacy` / `#link-terms` apontam temporariamente para `https://myeasyai.com/support` ate as URLs finais serem informadas.

## Arquivos principais

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/`
