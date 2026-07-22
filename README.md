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

No site oficial, Politica de Privacidade e Termos de Uso abrem em modal, sem URL publica dedicada. Nesta landing estatica, `privacy.html` e `terms.html` sao paginas provisórias honestas; `SITE_LEGAL` em `script.js` e os links `#link-privacy` / `#link-terms` apontam para esses arquivos relativos (compativeis com GitHub Pages em subpath).

## Publicacao no GitHub Pages

1. Em Settings > Pages, use Deploy from a branch.
2. Selecione a branch `main` e a pasta `/ (root)`.
3. Confirme o historico de deployments apos o push.
4. Abra a URL em aba anonima e confira o HTML bruto (View Source).
5. Valide se o `<title>` e o hero publicados correspondem ao ultimo commit de `main`.
6. Se a CDN servir versao antiga, force um novo deploy com um commit no repositorio e aguarde alguns minutos.

## Arquivos principais

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/`
