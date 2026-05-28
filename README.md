# 🔍 Visualizador de Perfil do GitHub

Uma aplicação web moderna e responsiva que utiliza a API do GitHub para proporcionar uma experiência fluida de busca de usuários, exibindo perfis detalhados e seus repositórios mais relevantes com uma interface elegante.

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 Funcionalidades Principais

- **Busca Dinâmica:** Pesquisa instantânea por nome de usuário com suporte à tecla "Enter".
- **Feedback Visual de Carregamento:** Spinner animado durante as requisições à API.
- **Tratamento de Erros:** Alertas amigáveis para usuários não encontrados ou falhas de conexão.
- **Dashboard de Perfil:** Exibição de bio, avatar, seguidores e seguindo.
- **Grade de Repositórios:** Listagem dos 10 repositórios mais recentes, ordenados por data de criação.
- **Métricas por Card:** Visualização rápida de Stars, Forks, Watchers e a linguagem principal de cada projeto.

## 🎨 Experiência Visual e Design

O projeto foca em uma estética moderna (Glassmorphism sutil) e interatividade:
- **Background Animado:** Efeito de gradiente dinâmico (`gradientShift`) que se altera suavemente.
- **Sistema de Design:** Uso extensivo de Variáveis CSS (Design Tokens) para cores, espaçamentos e sombras, garantindo consistência.
- **Interatividade:** Microinterações de hover nos cards de repositório e botões.
- **Tipografia:** Integração com a fonte 'Inter' via Google Fonts para melhor legibilidade.
- **Ícones:** Utilização da biblioteca `Devicons` para uma identidade visual alinhada ao mundo dev.

## 🛠️ Detalhes Técnicos

### Integração com GitHub API
A aplicação consome dois endpoints principais:
1.  **Perfil:** `GET https://api.github.com/users/{username}`
2.  **Repositórios:** `GET https://api.github.com/users/{username}/repos?per_page=10&sort=created`

### Organização de Código
- **Modularização:** O projeto é dividido em módulos (`githubApi.js`, `profileView.js`), facilitando a manutenção.
- **Async/Await:** Fluxo assíncrono limpo para lidar com as promessas da API.
- **Responsividade:** Layout adaptável via Media Queries para Desktop, Tablet e Mobile.

## 📁 Estrutura de Arquivos

```text
src/
├── css/
│   ├── animations.css  # Definições de @keyframes e transições
│   ├── reset.css       # Normalização de estilos cross-browser
│   ├── responsive.css  # Media queries para adaptabilidade
│   └── styles.css      # Core design, variáveis e layouts base
└── js/
    ├── githubApi.js    # Funções isoladas de fetch (camada de dados)
    ├── index.js        # Lógica de controle e eventos (controller)
    └── profileView.js  # Template strings e manipulação do DOM (view)
```

## 🔧 Como Executar Localmente

1. **Requisito:** Tenha um servidor local (ex: VS Code Live Server).
2. Clone o repositório.
3. Inicie o servidor a partir do arquivo `index.html`.
4. *Dica:* Como a API do GitHub possui limite de requisições para IPs não autenticados, evite buscas excessivas em um curto período.

## 💡 Evolução e Aprendizado

Este projeto demonstra o domínio de conceitos fundamentais para um desenvolvedor Front-end:
- **Manipulação de DOM** sem frameworks (Vanilla JS).
- **Consumo de APIs Externas** e tratamento de dados JSON.
- **UX/UI Design** focado no desenvolvedor.
- **Arquitetura de CSS** organizada e escalável.

---
Desenvolvido com 💙 para o portfólio de [Lucas Freitas]
