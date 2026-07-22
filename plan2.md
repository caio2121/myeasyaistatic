# Aprimoramento completo da landing page MyEasyAI

Atue como especialista sênior em UX/UI, copywriting de conversão, frontend, acessibilidade, SEO técnico e GEO.

Analise e aprimore completamente a landing page disponível neste repositório:

* Repositório: `caio2121/myeasyaistatic`
* Página publicada: `https://caio2121.github.io/myeasyaistatic/`
* Site oficial usado para validação das informações: `https://myeasyai.com/`

O objetivo é transformar a versão atual em uma landing page comercial pronta para substituir a página oficial existente.

Não implemente backend, autenticação, pagamentos, banco de dados, APIs ou lógica real dos produtos. O trabalho deve permanecer focado na camada visual, copy, SEO, GEO, acessibilidade e experiência do usuário.

## Etapa inicial obrigatória

Antes de alterar os arquivos:

1. Analise integralmente `index.html`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml` e todos os ativos utilizados.
2. Compare as informações da página estática com o site oficial.
3. Confirme preços, período de teste, quantidade de módulos, benefícios, dados institucionais e URLs.
4. Não preserve uma informação apenas porque ela já está no código.
5. Não invente dados para preencher lacunas.
6. Identifique textos internos, técnicos ou provisórios que estejam visíveis ao visitante.
7. Revise também todos os textos gerados pelo JavaScript nos modais de demonstração.

## Objetivo comercial

A landing deve comunicar de forma imediata:

* o que é a MyEasyAI;
* para quem ela foi criada;
* quais tarefas o cliente consegue resolver;
* por que ela é mais simples do que começar em uma ferramenta genérica de IA;
* quais são os principais resultados oferecidos;
* como funciona o teste gratuito;
* qual ação o visitante deve realizar.

A página não deve parecer documentação técnica, relatório de auditoria, protótipo ou apresentação interna.

## Público e linguagem

Escreva para pessoas, profissionais autônomos e pequenos negócios que desejam usar inteligência artificial sem precisar entender de programação ou criação de prompts.

Utilize:

* português brasileiro;
* tratamento consistente por “você”;
* tom comercial, direto, profissional e próximo;
* frases naturais;
* exemplos concretos;
* benefícios fáceis de compreender;
* voz ativa;
* verbos de ação;
* períodos curtos ou médios;
* títulos específicos.

Não alterne entre linguagem excessivamente formal e linguagem informal.

Nos textos institucionais, prefira:

* “você pode”;
* “escolha”;
* “responda”;
* “crie”;
* “organize”;
* “acompanhe”;
* “teste”.

Evite:

* “utilize” quando “use” for suficiente;
* “pro” em textos institucionais;
* “me passa” fora dos diálogos simulados;
* termos técnicos sem explicação;
* linguagem que pareça traduzida do inglês.

## Regras obrigatórias de copy

Não utilizar travessão longo, Unicode U+2014, em nenhuma parte do projeto.

A proibição se aplica a:

* textos visíveis;
* atributos HTML;
* metadados;
* dados estruturados;
* strings JavaScript;
* comentários;
* documentação criada durante a alteração.

Substituir por ponto, vírgula, dois-pontos, parênteses ou reformulação da frase.

Não utilizar:

* “revolucione”;
* “transforme sua jornada”;
* “desbloqueie seu potencial”;
* “leve seu negócio para o próximo nível”;
* “o futuro chegou”;
* “solução completa e inovadora”;
* “experiência única”;
* “poder da inteligência artificial”;
* perguntas retóricas em excesso;
* urgência falsa;
* promessas impossíveis;
* números sem fonte;
* depoimentos fictícios;
* marcas ou clientes não autorizados;
* frases que poderiam pertencer a qualquer startup.

Não utilizar construções repetitivas como:

* “não é apenas X, é Y”;
* listas artificiais sempre com três elementos;
* títulos iniciados repetidamente por “Descubra”, “Potencialize” ou “Simplifique”;
* frases curtas fragmentadas em excesso;
* adjetivos sem benefício comprovável.

## Termos que devem ser removidos ou reescritos

Procure em todo o projeto e remova ou substitua:

* “setup”;
* “stack técnica”;
* “preview” em textos para clientes;
* “lista pública”;
* “valores públicos”;
* “com base nas informações públicas”;
* “informações institucionais apresentadas publicamente”;
* “sem números inventados”;
* “estável, sem carrossel quebrado”;
* “landing estática”;
* “futura integração”;
* “rode o primeiro módulo”;
* “sem cartão na entrada”;
* “upgrade paga só a diferença”.

Não deixe esses termos visíveis em nenhuma seção, modal, metadado ou rodapé.

## Nova direção para o hero

O hero atual é amplo e não mostra o produto com precisão suficiente.

Reescreva o hero para apresentar:

1. resultado principal;
2. tarefas concretas;
3. funcionamento simples;
4. CTA principal;
5. CTA secundário;
6. evidências de baixa fricção.

Use como direção, sem copiar mecanicamente:

Eyebrow:

`IA simples para trabalhar, vender e organizar`

Título:

`Crie sites, conteúdos e processos de venda com IA, sem precisar aprender prompts`

Texto:

`A MyEasyAI reúne ferramentas prontas para tirar ideias do papel, organizar clientes e acelerar tarefas do seu negócio em uma única plataforma.`

Texto de apoio:

`Você escolhe o que precisa, responde perguntas simples e recebe um resultado pronto para revisar e usar.`

CTA principal:

`Testar grátis por 30 dias`

CTA secundário:

`Ver a plataforma por dentro`

Sinais de confiança:

* sem cartão para começar;
* cancele quando quiser;
* suporte humano em português.

Reescreva quando necessário para refletir com exatidão as funcionalidades confirmadas no site oficial.

Não prometa que todas as tarefas são concluídas “em minutos” sem comprovação específica.

## Arquitetura recomendada

Reorganize a página nesta sequência:

### 1. Faixa promocional

Apresente apenas a informação mais relevante.

Exemplo:

`30 dias grátis. Sem cartão para começar.`

Evite três ou quatro mensagens concorrentes.

### 2. Cabeçalho

Manter:

* marca;
* Como funciona;
* Ferramentas;
* Planos;
* Perguntas frequentes;
* Entrar;
* CTA de teste grátis.

Verifique comportamento sticky, menu mobile, foco e navegação por teclado.

### 3. Hero

Aplicar a nova direção comercial.

O mockup deve representar uma tarefa possível e coerente. Não apresente simultaneamente site publicado, CRM organizado e posts concluídos quando a conversa exibida trata apenas da criação de um site.

### 4. Resultados principais

Apresente de quatro a seis tarefas que o usuário consegue realizar.

Priorize benefícios como:

* criar um site;
* produzir conteúdo;
* organizar contatos e vendas;
* planejar um negócio;
* organizar finanças;
* preparar documentos ou currículo.

Não utilizar a etiqueta “Proposta de valor”.

### 5. Demonstração do produto

Mover a demonstração para antes da lista completa de módulos.

Mostrar:

* tarefa escolhida;
* perguntas feitas pela plataforma;
* resultado produzido;
* possibilidade de revisão.

Substituir completamente o texto “Estável, sem carrossel quebrado”.

Direção recomendada:

`Acompanhe a criação do site enquanto conversa com o assistente e ajusta cada etapa.`

### 6. Como funciona

Substituir textos técnicos como:

`O fluxo é o mesmo em praticamente todos os módulos.`

Por uma explicação orientada ao cliente.

Direção recomendada:

Título:

`Escolha uma tarefa e avance com orientação`

Etapas:

1. Escolha o que você precisa fazer.
2. Responda algumas perguntas.
3. Receba uma primeira versão.
4. Revise e use o resultado.

### 7. Módulos em destaque

Selecionar de quatro a seis módulos principais e dar mais destaque a eles.

Cada módulo deve conter:

* nome;
* tarefa resolvida;
* benefício;
* exemplo;
* link para demonstração.

Não repetir a mesma estrutura visual em quinze ou mais cards com igual importância.

### 8. Todos os módulos

Criar uma seção secundária mais compacta para os demais módulos.

O conteúdo deve continuar presente no HTML para mecanismos de busca.

É permitido utilizar:

* categorias;
* acordeões acessíveis;
* lista expandível;
* agrupamento por objetivo.

Não transformar toda a seção em carrossel.

### 9. Para quem é

Reescrever os casos de uso em linguagem baseada em situações reais.

Exemplos:

* autônomos que precisam divulgar e organizar o atendimento;
* pequenos negócios que querem vender e acompanhar clientes;
* profissionais que precisam criar conteúdo com frequência;
* pessoas que querem organizar currículo, documentos ou rotina.

Evitar títulos como “Casos de uso” quando uma expressão mais próxima do cliente for possível.

### 10. Diferenciais

Apresentar os diferenciais sem atacar diretamente outras ferramentas.

Explique:

* ferramentas guiadas;
* tarefas organizadas;
* ausência de tela em branco;
* interface em português;
* recursos reunidos;
* suporte humano.

A comparação com ChatGPT e Gemini pode permanecer no FAQ, desde que factual e respeitosa.

### 11. Segurança e confiança

Substituir:

`Sinais verificáveis, sem números inventados`

Por:

`Segurança e suporte para usar com tranquilidade`

Substituir o texto introdutório por algo semelhante a:

`Pagamentos protegidos, suporte em português e infraestrutura de fornecedores reconhecidos.`

Exibir apenas informações confirmadas.

Quando usar logos de fornecedores:

* confirmar autorização e contexto;
* não sugerir parceria inexistente;
* não apresentar uma lista de nomes sem explicar sua relevância.

### 12. Planos

Reescrever o título para ser comercial e claro.

Direção recomendada:

`Teste por 30 dias e escolha seu plano depois`

Texto:

`Comece sem cartão. Ao fim do período gratuito, escolha os recursos que fazem sentido para sua rotina.`

Apresentar o plano anual com clareza:

* valor total anual;
* valor equivalente por mês;
* forma de pagamento;
* diferença para o plano mensal.

Não apresentar apenas `R$ 29,70/mês` quando o pagamento real corresponder a uma contratação anual sem explicar isso no mesmo bloco.

Corrigir:

`upgrade paga só a diferença`

Para:

`Ao fazer upgrade, você paga apenas a diferença.`

Não usar selo “Mais popular”, “Mais escolhido” ou equivalente sem dados reais.

O selo “15 módulos” não funciona como prova de recomendação. Substituir por uma descrição útil ou remover.

### 13. FAQ

Substituir:

`Respostas diretas com base nas informações públicas da plataforma.`

Por:

`Confira as respostas para as dúvidas mais comuns antes de começar.`

Revisar todas as respostas para:

* manter o mesmo tom;
* remover linguagem técnica;
* evitar afirmações absolutas;
* evitar alegações não comprovadas;
* alinhar o conteúdo visível com o JSON-LD.

### 14. CTA final

Substituir o título atual por uma chamada orientada à ação.

Direção recomendada:

Título:

`Comece com uma tarefa que você precisa resolver hoje`

Texto:

`Crie sua conta, personalize seu assistente e teste sua primeira ferramenta por 30 dias. Sem cartão para começar.`

CTA:

`Testar grátis por 30 dias`

Não utilizar “Começar 30 dias grátis”.

### 15. Rodapé

Remover completamente:

`Landing estática para demonstração e futura integração.`

Verificar e corrigir:

* Política de Privacidade;
* Termos de Uso;
* central de ajuda;
* suporte;
* login;
* criação de conta;
* redes sociais.

Não apontar Política de Privacidade para `#faq`.

Não apontar Termos de Uso para `#packages`.

Caso as URLs corretas não estejam disponíveis, criar constantes ou placeholders claramente identificados no código, mas não mostrar textos provisórios para o visitante.

## Revisão de módulos e alegações sensíveis

### MyEasyJurídico

Evitar sugerir aconselhamento jurídico profissional.

Preferir:

`Organize documentos, use modelos de apoio e encontre informações com mais facilidade.`

Quando necessário, incluir aviso de que o recurso não substitui orientação jurídica profissional.

### MyEasyNutrição

Não prometer emagrecimento, tratamento ou plano clínico.

Evitar exemplos como:

`Quero um cardápio para emagrecer.`

Preferir exemplos relacionados a:

* organização de refeições;
* preferências alimentares;
* lista de compras;
* planejamento semanal.

Adicionar aviso de que o recurso não substitui nutricionista ou profissional de saúde quando aplicável.

### MyEasyFitness

Não utilizar “sem contratar personal” como principal benefício.

Apresentar o módulo como ferramenta de organização e planejamento geral.

Não sugerir substituição de avaliação profissional.

### MyEasyCursos

Confirmar:

* natureza do certificado;
* validade;
* entidade emissora;
* condições de conclusão.

Caso seja apenas um certificado da plataforma, comunicar dessa forma.

### MyEasyEmprego

Substituir promessas vagas como:

`Currículos alinhados ao que recrutadores buscam`

Por algo mais concreto:

`Organize suas experiências em um currículo claro e direcionado para a vaga.`

## Direção visual

Preservar a identidade principal, mas reduzir a aparência genérica de template de IA.

Aprimorar:

* hierarquia tipográfica;
* composição das seções;
* uso de imagens reais;
* destaque dos módulos principais;
* distribuição de espaços;
* diferenciação entre CTA principal e secundário.

Reduzir:

* excesso de cards;
* botões totalmente arredondados em todos os contextos;
* gradientes decorativos;
* efeitos de vidro;
* brilhos;
* sombras;
* elementos flutuantes;
* repetição de layouts em grade;
* repetição de etiquetas em caixa alta.

Não colocar toda informação dentro de uma caixa.

Não criar seções apenas para aumentar o comprimento da página.

Reservar o verde para:

* CTA principal;
* destaque de sucesso;
* informação realmente prioritária.

## Ícones

Não utilizar Font Awesome em nenhuma hipótese.

Não utilizar emojis como ícones.

Não misturar bibliotecas.

Manter uma única linguagem visual durante todo o projeto.

Utilizar:

* SVGs locais;
* biblioteca profissional como Lucide, Phosphor, Tabler ou Heroicons;
* espessura de traço consistente;
* tamanhos padronizados;
* alinhamento óptico;
* ícones semanticamente corretos.

A implementação atual já utiliza SVGs locais. Preserve essa estratégia.

Não utilizar o mesmo ícone de escudo para Stripe e auditoria de segurança. Cada conceito deve ter representação própria.

Não carregar bibliotecas completas quando apenas alguns ícones forem necessários.

## Código

Manter:

* HTML5;
* CSS;
* JavaScript puro;
* funcionamento estático;
* menu mobile;
* FAQ;
* seletor de cobrança;
* modais de demonstração;
* navegação por âncoras.

Não adicionar:

* frameworks;
* dependências desnecessárias;
* backend;
* banco de dados;
* APIs;
* autenticação;
* lógica real de pagamento;
* Font Awesome;
* comentários explicativos desnecessários.

Remover comentários existentes que não sejam indispensáveis.

Não adicionar comentários ao código.

Revise também as strings em `script.js`, pois os modais contêm parte importante da copy.

## Correções técnicas de SEO

Existe um erro crítico de domínio.

A página está publicada em:

`https://caio2121.github.io/myeasyaistatic/`

Mas o projeto contém referências a:

`https://caioa.github.io/myeasyaistatic/`

Corrigir todas as ocorrências.

Revisar:

* canonical;
* `og:url`;
* `og:image`;
* Twitter image;
* logo dos dados estruturados;
* IDs de dados estruturados;
* BreadcrumbList;
* FAQPage;
* `robots.txt`;
* `sitemap.xml`.

Centralizar a URL base para impedir novas divergências.

### Ambiente de homologação

Na versão do GitHub Pages:

* utilizar `noindex, nofollow`;
* não declarar a versão de homologação como canonical principal;
* evitar indexação duplicada;
* deixar claro no código qual URL será usada em produção.

### Ambiente de produção

Quando publicado no domínio oficial:

* canonical para `https://myeasyai.com/`;
* `index, follow`;
* Open Graph no domínio oficial;
* schema no domínio oficial;
* sitemap no domínio oficial;
* imagens sociais acessíveis no domínio oficial.

Não misturar URLs do GitHub Pages com URLs do domínio oficial no mesmo conjunto de metadados.

## SEO e GEO

Manter apenas um H1.

Criar uma hierarquia coerente de H2 e H3.

O conteúdo principal deve estar presente no HTML.

Garantir consistência entre:

* texto visível;
* title;
* meta description;
* Open Graph;
* FAQ;
* JSON-LD;
* planos;
* ofertas.

Reescrever o title para ser mais claro e menos carregado.

Direções possíveis:

`MyEasyAI | Ferramentas de IA prontas para seu negócio`

ou:

`MyEasyAI: crie, venda e organize com inteligência artificial`

Criar meta description com benefício, público e baixa fricção, sem repetir palavras artificialmente.

Revisar os dados estruturados:

* Organization;
* WebSite;
* SoftwareApplication;
* Offer;
* FAQPage.

Os preços das ofertas devem explicar corretamente se o valor é mensal, anual ou equivalente mensal de um plano anual.

Remover BreadcrumbList caso ele não agregue valor em uma página inicial de uma única página.

Manter o FAQ schema sincronizado com o FAQ visível.

Não adicionar dados estruturados sem correspondência com o conteúdo visível.

## Acessibilidade

Preservar os recursos existentes e adicionar:

* `prefers-reduced-motion`;
* remoção ou redução das animações de entrada e pulso quando solicitado pelo sistema;
* alvos de toque com pelo menos 44 por 44 pixels;
* contraste compatível com WCAG AA;
* foco visível;
* navegação completa por teclado;
* fechamento dos modais por Escape;
* retorno de foco ao botão que abriu o modal;
* textos alternativos adequados;
* `aria-hidden` em imagens exclusivamente decorativas;
* rótulos claros em botões;
* ausência de conteúdo essencial apenas em hover.

Avaliar se o mockup do hero deve ser uma imagem decorativa resumida por rótulo ou uma estrutura navegável. Não misturar as duas abordagens.

## Desempenho

Adicionar:

* largura e altura explícitas nas imagens;
* `loading="lazy"` nas imagens abaixo da primeira dobra;
* `decoding="async"` quando aplicável;
* carregamento prioritário apenas dos ativos realmente visíveis no hero;
* otimização de WebP, AVIF e SVG;
* remoção de ativos não utilizados;
* redução de CSS e JavaScript redundantes.

Avaliar o uso das fontes externas.

Caso sejam mantidas:

* carregar apenas pesos utilizados;
* manter `display=swap`;
* evitar famílias e pesos desnecessários.

Não prejudicar a identidade visual apenas para reduzir alguns quilobytes sem impacto relevante.

## Responsividade

Testar obrigatoriamente:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1280 px;
* 1440 px.

Validar:

* ausência de rolagem horizontal;
* botões sem quebra inadequada;
* cards sem alturas artificiais;
* mockups legíveis;
* modais utilizáveis;
* tabela ou seletor de planos legível;
* menu mobile;
* rodapé;
* textos sem linhas órfãs problemáticas;
* títulos sem quebras forçadas.

## Validações obrigatórias

Após as alterações:

1. Pesquisar todo o projeto por `caioa.github.io`.
2. Pesquisar todo o projeto pelo caractere Unicode U+2014.
3. Pesquisar todo o projeto por `Font Awesome`, `fontawesome`, `fa-` e imports relacionados.
4. Pesquisar todos os termos proibidos listados neste prompt.
5. Validar o HTML.
6. Validar o JSON-LD.
7. Testar todos os links.
8. Testar os modais.
9. Testar o menu mobile.
10. Testar o FAQ.
11. Testar o seletor mensal e anual.
12. Testar navegação por teclado.
13. Executar Lighthouse, caso disponível.
14. Executar axe ou ferramenta equivalente, caso disponível.
15. Não inventar pontuações de desempenho quando as ferramentas não puderem ser executadas.
16. Corrigir erros do console.
17. Confirmar que não existe rolagem horizontal.
18. Confirmar que nenhuma informação provisória está visível ao cliente.

## Critérios de aceite

A tarefa será considerada concluída quando:

* a landing inteira estiver revisada;
* toda a copy estiver em português brasileiro natural;
* o tratamento por “você” estiver consistente;
* títulos e CTAs estiverem comerciais;
* não houver linguagem de documentação;
* não houver textos de bastidor;
* não houver travessão longo;
* não houver Font Awesome;
* não houver emojis usados como ícones;
* os ícones seguirem um padrão profissional;
* não houver dados inventados;
* não houver alegações médicas ou jurídicas inadequadas;
* os metadados utilizarem o domínio correto;
* a homologação não competir com o domínio oficial na indexação;
* Política de Privacidade e Termos de Uso tiverem destinos corretos;
* a página estiver responsiva;
* os componentes existentes continuarem funcionando;
* não houver erros relevantes no console;
* o HTML e os dados estruturados estiverem válidos;
* as principais tarefas do produto forem compreendidas rapidamente;
* a página parecer um produto comercial finalizado, e não um protótipo.

## Entrega final do agente

Ao concluir, informe:

* arquivos alterados;
* seções reorganizadas;
* principais mudanças de copy;
* termos removidos;
* correções de SEO;
* correções de acessibilidade;
* correções de responsividade;
* links que ainda dependem de informação do cliente;
* informações comerciais que precisaram ser mantidas como pendentes;
* testes executados;
* resultados reais dos testes;
* limitações encontradas.

Não apenas descreva as alterações. Aplique todas as correções diretamente nos arquivos do repositório.
