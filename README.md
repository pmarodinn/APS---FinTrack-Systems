# FinTrack Systems

Este é um projeto desenvolvido para a matéria **Análise de Projetos e Sistemas**, com o objetivo de criar um painel de controle para gerenciar dados de uma escola fictícia chamada **FinTrack Systems**.

## Equipe
- **Pedro Schuves Marodin**
- **João Victor Castex da Motta Ferreira**
- **Viviane Ruotolo**

## Descrição do Projeto

O projeto **FinTrack Systems** foi desenvolvido para gerenciar informações de alunos, suas presenças, mensagens e outras funcionalidades relacionadas à administração de uma escola. A plataforma tem como foco proporcionar um ambiente de fácil navegação para os administradores e professores, oferecendo recursos como o controle de presença dos alunos, visualização de mensagens internas e a gestão de tarefas administrativas.

### Funcionalidades Principais:
- **Marcação de Presença**: Sistema de controle de presença dos alunos em aulas, com uma interface para marcar se o aluno está presente ou ausente.
- **Visualização de Mensagens**: Painel para visualizar mensagens importantes entre administradores e professores.
- **Dashboard**: Página inicial interativa com informações gerais sobre a escola e acessos rápidos.

A plataforma foi desenvolvida utilizando **Next.js** como framework para a criação de aplicações React, com integração para gráficos e controles interativos.

## Começando

### Rodando o servidor de desenvolvimento:

Primeiro, instale as dependências do projeto com o seguinte comando:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```
Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
Abra o navegador e vá até http://localhost:3000 para ver o painel em ação.

### Atenção

Caso ainda não tenha instalado os módulos, segue os snippets para instalação

```bash
npx create-next-app@latest

npm install next react react-dom

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init

npm install recharts
```
## Editando o Projeto
Você pode começar a editar a página principal modificando o arquivo app/page.tsx. A página será atualizada automaticamente à medida que você edita o arquivo.
