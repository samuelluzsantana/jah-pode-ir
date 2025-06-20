# 🕒 Já pode ir embora?

> Uma aplicação web divertida e intuitiva para calcular quando você pode sair do trabalho

[![Deploy com Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ja-pode-ir-embora.vercel.app/) [![Licença MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) [![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

![GitHub stars](https://img.shields.io/github/stars/samuelluzsantana/jah-pode-ir?style=social)

**Já pode ir embora?** é uma aplicação web feita com 💚 para estagiários, CLTs e PJs descobrirem — de forma rápida, divertida e estilosa — se já cumpriram sua jornada de trabalho.

A experiência mistura humor, confetes, ícones animados, áudios engraçados e até Rickrolls para transformar um momento trivial do dia em algo mais leve e memorável.

<div align="center">
  <img src="https://i.imgur.com/y1UytS4.gif" alt="Demonstração do projeto" width="100%" />
</div>

## 🌟 Sobre o Projeto

**Já pode ir embora?** é uma aplicação web moderna desenvolvida para estagiários, CLTs e PJs que querem descobrir de forma rápida e divertida se já cumpriram sua jornada de trabalho.

### ✨ Características Principais

- 📊 **Cálculo automático** da jornada de trabalho
- 🎯 **Interface intuitiva** com processo em etapas
- 🎉 **Feedback visual** com confete e animações
- 🎵 **Experiências personalizadas** por tipo de contrato

## 📊 Status do Projeto

![GitHub repo size](https://img.shields.io/github/repo-size/samuelluzsantana/ja-pode-ir-embora) ![GitHub code size](https://img.shields.io/github/languages/code-size/samuelluzsantana/ja-pode-ir-embora) ![GitHub top language](https://img.shields.io/github/languages/top/samuelluzsantana/ja-pode-ir-embora) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/samuelluzsantana/ja-pode-ir-embora)

## 🛠️ Tecnologias

### Core

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces
- **[TypeScript](https://typescriptlang.org/)** - Tipagem estática

### UI/UX

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Magic UI](https://magicui.design/)** - Componentes animados (confetti, shine border)
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos
- **[Iconsax](https://iconsax.io/)** - Conjunto adicional de ícones

### Interatividade

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **[Lottie](https://lottiefiles.com/)** - Animações vetoriais
- **[useSound](https://github.com/joshwcomeau/use-sound)** - Efeitos sonoros

### Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

- **[Vercel](https://vercel.com/)** - Hospedagem e CI/CD

## 🎯 Como Funciona

### 1. Seleção do Tipo de Contrato

- **Estagiário**: 6 horas de trabalho
- **CLT**: 8 horas de trabalho
- **PJ**: Experiência especial com surpresa 🎶

### 2. Definição dos Horários

- Horário de entrada com validação
- Intervalo personalizável ou pré-definido

### 3. Resultado Inteligente

- ✅ **Pode sair**: Confete e parabenização
- ⏰ **Ainda trabalhando**: Tempo restante detalhado
- 🎵 **PJ**: 🤫🤫🤫 (é segredo)

## 📁 Estrutura do Projeto

```
ja-pode-ir-embora/
├── src/
│   ├── components/
│   │   └── ja-pode-ir-embora/
│   │       ├── Home.tsx              # Componente principal
│   │       ├── Footer.tsx            # Rodapé da aplicação
│   │       ├── IrEmboraIcon.tsx      # Ícone personalizado
│   │       ├── ProgressStepper.tsx   # Indicador de progresso
│   │       └── steps/
│   │           ├── UserTypeStep.tsx     # Seleção de contrato
│   │           ├── EntryTimeStep.tsx    # Horário de entrada
│   │           ├── BreakTimeStep.tsx    # Configuração do intervalo
│   │           ├── ResultStep.tsx       # Resultado final
│   │           └── PJScreen.tsx         # Tela especial para PJ
│   ├── utils/
│   │   └── timeUtils.ts             # Utilitários de cálculo de tempo
│   └── pages/
│       └── index.tsx                # Página principal
├── public/                          # Assets estáticos
├── next.config.js                   # Configuração do Next.js
├── tailwind.config.js              # Configuração do Tailwind
└── package.json                    # Dependências do projeto

```

## 🚀 Instalação e Execução

### Pré-requisitos

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/samuelluzsantana/ja-pode-ir-embora.git

# Navegue até o diretório
cd ja-pode-ir-embora

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev

```

Abra [http://localhost:3000](http://localhost:3000/) no navegador.

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Iniciar servidor de produção
npm run start

```

## 📊 Scripts Disponíveis

Script

Descrição

`dev`

Inicia servidor de desenvolvimento

`build`

Gera build para produção

`start`

Inicia servidor de produção

`lint`

Executa linting do código

`type-check`

Verifica tipagem TypeScript

Contribuições são sempre bem-vindas! Para contribuir:

1.  **Fork** o projeto
2.  Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3.  **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4.  **Push** para a branch (`git push origin feature/MinhaFeature`)
5.  Abra um **Pull Request**

### 🐛 Reportando Bugs

Encontrou um bug? [Abra uma issue](https://github.com/samuelluzsantana/ja-pode-ir-embora/issues) com:

- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do ambiente (SO, navegador, etc.)

## 👨‍💻 Autor

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samuelluzsantana) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/samuelluzsantana) [](https://samuelluzsantana.dev/) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:slsamuelluz@gmail.com)

</div>

**Samuel Luz Santana**

- 💼 LinkedIn: [@samuelluzsantana](https://linkedin.com/in/samuelluzsantana)
- 🐙 GitHub: [@samuelluzsantana](https://github.com/samuelluzsantana)

## 🙏 Agradecimentos

- 🎨 Inspiração no design: Comunidade brasileira de desenvolvedores
- 🎵 Rick Astley pelo eterno "Never Gonna Give You Up"
- ☕ Café, muito café
- 🤔 Change it pela ideia

---

<div align="center">

**Feito com ❤️ e ⚛ por [sxwuell](https://www.instagram.com/sxwuell/)**

⭐ Se você gostou do projeto, não esqueça de dar uma estrela!

</div>
