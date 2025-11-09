# Roteirando ✈️

[![Deploy with Vercel](https://vercel.com/button)](https://roteirando-zeta.vercel.app/roteiros)

`Roteirando` é uma aplicação web de planejamento de viagens, permitindo que usuários criem, gerenciem e visualizem roteiros personalizados. O projeto foi desenvolvido como o Projeto de Disciplina para a pós-graduação em Engenharia de Software, demonstrando a aplicação prática de um sistema CRUD completo com React.

## 🚀 Demo

Você pode acessar a aplicação em produção no seguinte link:
**https://roteirando-zeta.vercel.app/**

---

## 📸 Screenshots

<img width="1321" height="527" alt="image" src="https://github.com/user-attachments/assets/9099cd53-33ca-4d3b-9c4d-c0ed7eff98f8" />

<img width="1313" height="516" alt="image" src="https://github.com/user-attachments/assets/171119a1-b874-4cca-86e1-b8147bf433c5" />

<img width="1334" height="598" alt="image" src="https://github.com/user-attachments/assets/6a40feb3-3cc4-42cf-92ab-e92135a64200" />


---

## ✨ Funcionalidades Principais

* **CRUD de Roteiros:** Crie, Leia, Atualize e Delete (CRUD) roteiros de viagem.
* **Persistência Local:** Os roteiros são salvos no `LocalStorage` do navegador, persistindo os dados entre sessões.
* **Integração com API Externa:** Busca de informações climáticas em tempo real da cidade de destino, utilizando a **OpenWeatherMap API**.
* **Navegação SPA:** Experiência de Página Única (SPA) com navegação fluida usando **React Router**.
* **Feedback de UI:** Renderização condicional para estados de *loading*, *erro* (ex: "Cidade não encontrada") e *listas vazias*.
* **Formulários Controlados:** Gerenciamento de estado de formulários com `useState` para criação e edição.

---

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **Core:** React (v18+)
* **Build Tool:** Vite
* **Linguagem:** JavaScript (ES6+)
* **Estilização:** TailwindCSS
* **Navegação:** React Router DOM (v6)
* **Requisições HTTP:** Axios
* **Gerenciamento de Estado:** Context API + Hooks (useState, useEffect, useContext)
* **Hook Personalizado:** `useLocalStorage` para abstração da persistência.
* **Deploy:** Vercel

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para executar a aplicação localmente:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/srmatheusmaciel/roteirando.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd roteirando 
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Crie um arquivo `.env` na raiz do projeto:
    ```bash
    touch .env
    ```
5.  Adicione sua chave da OpenWeatherMap ao arquivo `.env`:
    ```env
    VITE_OPENWEATHER_API_KEY=sua_chave_de_api_aqui
    ```
6.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
7.  Abra o navegador em `http://localhost:5173` (ou o endereço fornecido pelo Vite).

---

## 📜 Licença

Este projeto está sob a licença MIT.

---
Desenvolvido por **Matheus Maciel**.
