<h1 align="center"> 
	Alfood Projeto React/React Hooks - TypeScript - ViteJs.
</h1>
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-instalação">Instalações</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;

![Aluroni](https://github.com/LivioAlvarenga/aluroni/blob/master/files/capa.gif?raw=true#vitrinedev)

&nbsp;
<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

🚀 O Alfood é um site que lista restaurantes e pratos do menu. 
É um MVP que tá só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas.

&nbsp;

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/aluroni?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/aluroni/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/aluroni" alt="issue site aluroni" /></a>
  <a href="https://github.com/LivioAlvarenga/aluroni"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/aluroni" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/aluroni"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/aluroni" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/aluroni"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/aluroni" alt="repository size" /></a>
  <a href="https://aluroni-livio-alvarenga.vercel.app/"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
<p>

&nbsp;

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| :sparkles: Nome       | **Alfood Projeto React/React Hooks - TypeScript - ViteJs.** |
| :label: Tecnologias   | React, React-Router, TypeScript, ViteJs, Tailwindcss, Radix UI, NodeJs, JavaScript, HTML5, CSS3, Prettier, Eslint      |
| :rocket: URL          | https://aluroni-livio-alvarenga.vercel.app/                                                                            |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://html5.org/"><img alt="html 5 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E34F26&logo=HTML5&label=Markup Language&message=HTML5&color=E34F26"></a>
  <a href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img alt="CSS 3 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1572B6&logo=CSS3&label=Style&message=CSS3&color=1572B6"></a>
  <a href= "https://sass-lang.com/"><img alt="SASS badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=CC6699&logo=Sass&label=used&message=SASS&color=CC6699"></a>
  <a href= "https://tailwindcss.com/"><img alt="Tailwind CSS badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=06b6d4&logo=Tailwind CSS&label=Style&message=Tailwind CSS&color=06b6d4"></a>
  <a href= "https://www.typescriptlang.org/"><img alt="TypeScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=3178c6&logo=TypeScript&label=Language&message=TypeScript&color=3178c6"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://reactjs.org/"><img alt="React badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=61dafb&logo=React&label=Framework&message=React&color=61dafb"></a>
  <a href= "https://reactrouter.com/"><img alt="React Router badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=ca4245&logo=React Router&label=Library&message=React Router&color=ca4245"></a>
  <a href= "https://vitejs.dev/"><img alt="site Vite" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=646cff&logo=Vite&label=Tooling&message=Vite&color=646cff"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
  <a href= "https://eslint.org/"><img alt="code standardization eslint" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=4B32C3&logo=ESLint&label=Code Standardization&message=ESLint&color=4B32C3"></a>
</p>

---

&nbsp;
<a id="-instalação"></a>

## ⚙️ Instalações

### Criando projeto com ViteJs e React e TypeScript

```bash
npm create vite@latest alfood -- --template react-ts

# Instalando dependências
cd alfood
npm install

# Instalando vite-tsconfig-paths para fazer imports absolutos
npm install -D vite-tsconfig-paths

# Em vite.config.ts adicione import e plugin
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});

# Em tsconfig.json adicione a baseURL em compilerOptions
"baseUrl": "./src"

# Instalando react-router-dom
npm install react-router-dom

```

### Configurando ESlint

```bash
# Instalando Eslint
npm init @eslint/config

# √ How would you like to use ESLint? · style
# √ What type of modules does your project use? · esm
# √ Which framework does your project use? · react
# √ Does your project use TypeScript? · Yes
# √ Where does your code run? · browser
# √ How would you like to define a style for your project? · prompt
# √ What format do you want your config file to be in? · JSON
# √ What style of indentation do you use? · 2
# √ What quotes do you use for strings? · double
# √ What line endings do you use? · windows
# √ Do you require semicolons? · Yes

# rodando o eslint e forçando os ajustes com --fix
npx eslint ./src --fix

# Adicionar no arquivo .eslintrs.json no campo rules a opção abaixo para não precisarmos importar o react no inicio do arquivo, as versões acima de 17 do react não tem necessidade de realizar a importação
"react/react-in-jsx-scope": "off"

# Adicionar em ident a opção { "SwitchCase": 1 }, para corrigir erro de edentação em switchCase
"indent": ["error", 2, { "SwitchCase": 1 }],

# Adicionar ignorePatterns "*.config.cjs" para ignorar os arquivos de configuração. Ou adicione no top dos arquivos /* eslint-env node */, pois Node é o ambiente real durante a compilação.
"ignorePatterns": ["*.config.cjs"]
```

### Instalações para suporte

```bash
# Instalar sass para compilar css
npm install -D sass

```

&nbsp;

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

- Em construção



&nbsp;

### 🧭 Rodando a aplicação web (Modo desenvolvimento)

```bash
# Clone este repositório
$ git clone https://github.com/livioalvarenga/alfood.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd alfood
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# A aplicação será aberta na porta:5173 - acesse http://localhost:5173
```

&nbsp;

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
