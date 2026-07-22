# Design: Landing page estática MyEasyAI

**Data:** 2026-07-22  
**Status:** Aprovado em brainstorming (aguardando revisão do arquivo)  
**Escopo:** Redesign integral da landing pública, frontend estático apenas

## Decisões aprovadas

| Tema | Escolha |
| --- | --- |
| Identidade visual | Baseada no site vivo (myeasyai.com) |
| Copy | Reescrita no tom do `plan.md`; site vivo só como fonte de fatos |
| Imagens | Mockups HTML/CSS fiéis à interface; sem screenshots raster |
| Prova social | Apenas informações verificáveis no site atual |
| Arquitetura de entrega | Landing única modular (HTML + CSS + JS na raiz) |

## Objetivo

Substituir a página pública atual por uma landing estática completa, mais clara, profissional e eficiente para conversão, SEO e GEO. Não implementar autenticação, pagamentos, APIs ou lógica de negócio. CTAs redirecionam para URLs existentes.

## Contexto atual

- O repositório contém apenas a primeira dobra (promo + header + hero).
- O produto real e os fatos comerciais estão em https://myeasyai.com/.
- Destinos de auth: `/auth/signup` e `/auth/login`.

## Arquitetura da página

Ordem das seções (âncoras locais; CTAs de conversão para produção):

1. Barra promocional — `30 dias grátis · Sem cartão · Cancele quando quiser`
2. Header — logo; Como funciona; Ferramentas; Benefícios; Planos; FAQ; Entrar; Testar grátis; menu mobile
3. Hero — categoria, H1, lead, CTA primário/secundário, trust, mockup assistente + módulos
4. Proposta de valor — benefícios concretos sem repetir o hero
5. Como funciona — 4 passos do fluxo guiado (escolher tarefa → responder perguntas → plataforma prepara → revisar e usar)
6. Ferramentas — todos os módulos públicos do site vivo (trabalho + bônus), cada um com nome, benefício e mini-mockup ou ícone contextual
7. Diferenciais — MyEasyAI vs IA genérica, sem atacar marcas
8. Casos de uso — públicos reais do produto
9. Demonstração — mockup HTML de entrada → fluxo → resultado
10. Confiança — Stripe, CyberShield, infra (Google/Microsoft/Cloudflare etc.), empresa EUA, suporte BR
11. Planos — Individual / Plus / Premium; toggle Mensal/Anual; CTA; comparação resumida
12. FAQ — accordion factual
13. CTA final — reforço pós-produto (não cópia literal do hero)
14. Footer — logo, descrição, navegação, legais, contato, redes, copyright

### Links fixos

| Elemento | Destino |
| --- | --- |
| Testar grátis / CTAs principais | https://myeasyai.com/auth/signup |
| Entrar | https://myeasyai.com/auth/login |
| Âncoras de navegação | `#como-funciona`, `#ferramentas`, `#beneficios`, `#planos`, `#faq` (e correlatas) |
| Legais / contato / redes | URLs públicas existentes em myeasyai.com |

## Sistema visual

### Cores

- Navy: `#091232`, `#0d1c46` (fundos escuros, header, hero)
- Creme: `#f3f1ea`, `#e3ded2` (seções claras)
- Azul: `#004cd9` (links, destaques, ativos)
- Lima: `#c1ff00` (CTA primário e acentos pontuais)
- Texto: claro sobre navy; `#111527` em seções claras; muted `#38415a`

### Tipografia

- Títulos: Hanken Grotesk
- Corpo: Inter
- Máximo de duas famílias

### Componentes

- Botões: primário lima; secundário outline; ghost no header; estados hover, focus e disabled
- Cards apenas onde há interação ou comparação (planos, FAQ, módulos)
- Ícones: Lucide em SVG locais, traço único; sem Font Awesome; sem emojis como ícones
- Mockups: chrome de app + sidebar + chat do assistente em HTML/CSS
- Motion leve: sticky header, FAQ, toggle de planos, entrada suave do mockup; sem autoplay com áudio

### Layout

- Largura máxima ~1180px
- Mobile-first
- Alternância navy ↔ creme para ritmo
- Sem gradientes decorativos soltos, glassmorphism gratuito ou ilustrações clichê de IA

## Conteúdo e copy

### Direção

- Português brasileiro direto e comercial
- Explicar o produto antes de impressionar
- Benefícios concretos; sem urgência falsa; sem travessão longo; sem estatísticas ou depoimentos inventados
- Não repetir o mesmo benefício em várias seções

### Hero (linha editorial)

- Categoria: plataforma de IA para o dia a dia
- H1: fazer em minutos o que antes exigia várias ferramentas
- Lead: site, clientes, conteúdos e tarefas com módulos já configurados
- Diferencial curto: sem programação, sem prompts, sem tela em branco
- CTA: Testar grátis por 30 dias · secundário: Ver como funciona

### Fatos comerciais (fonte: myeasyai.com)

- Teste: 30 dias; sem cartão na entrada; cancele quando quiser
- Planos anuais em destaque (até 70% OFF): Individual R$ 29,70/mês; Plus R$ 39,70/mês; Premium R$ 49,70/mês
- Preços mensais disponíveis via toggle, alinhados ao site vivo no momento da implementação
- Módulos: listar na implementação exatamente os módulos públicos ativos em myeasyai.com (trabalho e bônus), sem inventar módulos extras
- Site com domínio/hospedagem incluso conforme o plano
- Assistente personalizável (exemplo de interface: Jorge)
- Confiança verificável: Stripe; CyberShield; infra Google, Microsoft, Cloudflare; empresa americana; suporte humano em português

### FAQ (temas obrigatórios)

Necessidade de conhecimento técnico/prompts; o que são módulos; assistente; diferença vs ChatGPT/Gemini; MyEasyCursos; novos módulos; suporte; segurança; cartão no teste; cancelamento; funcionamento dos planos.

## Técnico

### Stack

HTML5 semântico, CSS organizado, JavaScript puro. Sem frameworks obrigatórios. Sem bibliotecas externas desnecessárias.

### Estrutura de arquivos

```
index.html
styles.css
script.js
robots.txt
sitemap.xml
README.md
assets/
  fonts/          # opcional se self-host; senão Google Fonts com preconnect
  icons/          # Lucide SVG seletivos
  logo/
  social/         # OG image
```

Substituir/expandir os arquivos atuais da primeira dobra na raiz (compatível com GitHub Pages).

### JavaScript

- Menu mobile (abrir/fechar, aria-expanded, opcional focus trap simples)
- Accordion FAQ
- Toggle Mensal/Anual nos planos (atualiza preços e destaques visíveis)
- Sem envio real de formulários

### SEO

- Title único, meta description, canonical, robots
- Um único H1; hierarquia H2/H3
- Open Graph e Twitter Cards
- Favicon
- Conteúdo principal no HTML
- Lazy loading abaixo da primeira dobra
- `sitemap.xml` e `robots.txt`
- Canonical do protótipo Pages: `https://caioa.github.io/myeasyaistatic/`
- README documenta troca para `https://myeasyai.com/` na integração

### GEO / dados estruturados

JSON-LD (`@graph`) com Organization, WebSite, SoftwareApplication, FAQPage e BreadcrumbList. Apenas informações realmente exibidas na página.

### Acessibilidade básica

Skip link, navegação por teclado, foco visível, contraste adequado, rótulos aria no menu e no FAQ, textos alternativos em imagens/mockups relevantes.

### Desempenho

CSS/JS enxutos; ícones SVG locais seletivos; sem carregar biblioteca completa de ícones; fontes com `display=swap`; evitar dependências pesadas.

## Fora de escopo

Autenticação, cadastro, login funcional, pagamentos, checkout, APIs, banco de dados, backend, CRM funcional, execução de ferramentas de IA, envio real de formulários, analytics, painel admin, regras de negócio.

## Critérios de aceite

- Landing completa e responsiva (desktop, tablet, mobile)
- Design visualmente consistente com o sistema definido
- Copy revisada, factual, sem travessão longo e sem aparência genérica de template de IA
- Botões com destinos definidos
- Ícones Lucide consistentes; sem Font Awesome
- Sem informações inventadas
- Funciona como site estático sem backend
- Sem erros relevantes no console
- Metadados SEO e dados estruturados presentes e coerentes
- Pronto para futura integração com o sistema existente

## Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Preços do site mudarem | Validar valores em myeasyai.com no momento da implementação dos planos |
| Falta de screenshots reais | Mockups HTML/CSS fiéis; não inventar UI divergente |
| Prova social fraca | Não inventar; usar só trust institucional verificável |
| Canonical Pages vs produção | Documentar no README a troca na integração |

## Próximo passo

Após aprovação deste spec pelo usuário: invocar skill `writing-plans` e gerar o plano de implementação detalhado.
