# 🎬 VendaTok — Landing Page

> 🇧🇷 Landing page institucional de alta conversão para a mentoria VendaTok, que ensina afiliados, criadores e pequenos negócios a transformar conteúdo em vendas dentro do TikTok Shop.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)

---

## 🚀 Acessar DEMO

**[🔗 Acessar a demonstração da VendaTok](https://vendatok.vercel.app/)**

---

# 🇧🇷 Português

## 📌 Sobre o projeto

A **VendaTok** é uma landing page de página única (one page), construída para vender uma mentoria voltada a quem quer aprender a vender pelo TikTok Shop. O objetivo da página não é explicar o produto de forma genérica — é conduzir o visitante por uma narrativa: mostrar o problema de quem posta todos os dias mas não vende, apresentar a virada de mentalidade proposta pela mentoria e fechar com uma oferta clara.

Este repositório contém o **código-fonte completo do frontend**, publicado como projeto de portfólio.

## 🎯 Proposta da página

A página parte de um problema real de quem já usa o TikTok Shop: gerar visualização não é o mesmo que gerar venda. A partir disso, a estrutura da página guia o visitante por uma sequência de raciocínio, até chegar na oferta da mentoria:

* Reconhecer o problema (postar sem vender)
* Entender a virada de mentalidade proposta (atenção não é o mesmo que intenção de compra)
* Conhecer o método em etapas
* Ver o que muda no antes e depois
* Ver prova social e para quem a mentoria é indicada
* Conhecer a oferta e decidir pela inscrição

## ✨ Estrutura da página

### 🎥 Hero

* Composição editorial assimétrica, sem o modelo tradicional de headline/subheadline/botão centralizados
* Headline principal, subtítulo curto, CTA e microcopy de confiança
* Entrada progressiva dos elementos (fundo, visual principal, headline, subtítulo e CTA em sequência), com indicador de scroll que some suavemente ao rolar

### 😬 O problema

* Seção editorial, sem cards e sem ícones, sobre a frustração de postar todos os dias sem ver retorno em vendas

### 🔁 A virada

* Composição tipográfica de impacto, com bastante espaço vazio, apresentando a mudança de mentalidade central da mentoria: transformar atenção em intenção de compra

### 🧭 O método

* Cinco etapas numeradas, apresentadas em progressão conforme o scroll (seleção de produto, criação de vídeo, apresentação sem parecer propaganda, geração de cliques e análise de resultado)
* Tipografia grande e números discretos, sem grade de cards

### 🎒 A experiência da mentoria

* O que o aluno recebe: aulas práticas, estratégias de conteúdo, seleção de produtos, roteiros, análise de vídeos, estratégias de conversão, acompanhamento e materiais de apoio
* Composição com texto e mockups, sem transformar o conteúdo em grade de cards

### 🔄 Resultado esperado

* Comparação direta entre o antes (postar sem entender por que não vende) e o depois (saber o que vender, como apresentar e como analisar o que funciona)

### 💬 Prova social

* Depoimentos com um destaque principal e os demais em posição secundária, sem grade de três cards iguais

### 🎯 Para quem é

* Seção curta indicando o público: afiliados, pequenos negócios, criadores e empreendedores iniciando no TikTok Shop

### 💰 Oferta

* Apresentação direta do que está incluso, formato, acesso, bônus (quando houver) e CTA — sem tabela de preços complexa

### 📣 CTA final e footer

* Chamada final de reforço com informação de segurança logo abaixo do botão
* Footer minimalista, com logo, links essenciais, termos e privacidade

## 🎨 Identidade visual

* Base predominantemente clara ou muito escura (definida conforme melhor resultado visual da página)
* Vermelho/coral como cor de destaque, usado com parcimônia
* Detalhes discretos inspirados na energia visual do TikTok, sem copiar a identidade da marca
* Tipografia forte e composição com bastante espaço negativo

## 🎬 Animações e experiência

* Animações leves de entrada (fade, reveal, translate pequeno) construídas com **GSAP** e **ScrollTrigger**
* Progressão da seção de método acompanhando o scroll
* Todas as animações respeitam `prefers-reduced-motion`
* Mobile como prioridade, com recomposição das seções (não apenas redução do layout desktop)

## 🧩 Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Next.js** | Ambiente de desenvolvimento e build |
| **React** | Construção da interface |
| **TypeScript** | Tipagem do projeto |
| **Tailwind CSS** | Estilização e responsividade |
| **GSAP + ScrollTrigger** | Animações e efeitos de scroll |

## 🚀 Executando localmente

```bash
git clone https://github.com/BeThomazzi/vendatok-mentoria.git
cd vendatok-mentoria
npm install
npm run dev
```

A aplicação estará disponível normalmente em `http://localhost:3000`.

---

## 👨‍💻 Autor

Desenvolvido por **Bernardo Thomazzi**.

**GitHub:** [@BeThomazzi](https://github.com/BeThomazzi)

---

# 🇺🇸 English

## 📌 About

**VendaTok** is a one-page landing page built to sell a mentorship focused on teaching people how to sell through TikTok Shop. The page's goal isn't to explain the product in a generic way — it's to guide the visitor through a narrative: show the problem of posting every day without generating sales, present the mindset shift the mentorship proposes, and close with a clear offer.

This repository contains the **complete frontend source code**, published as a portfolio project.

## 🎯 Page Concept

The page starts from a real problem faced by TikTok Shop users: getting views isn't the same as getting sales. From there, the page structure guides the visitor through a sequence of reasoning, leading up to the mentorship offer:

* Recognize the problem (posting without selling)
* Understand the proposed mindset shift (attention isn't the same as purchase intent)
* Learn the step-by-step method
* See the before and after
* See social proof and who the mentorship is for
* Learn about the offer and decide to sign up

## ✨ Page Structure

### 🎥 Hero (100vh)

* Asymmetrical editorial composition, moving away from the traditional centered headline/subheadline/button model
* Main headline, short subtitle, CTA and trust microcopy
* Progressive entrance of elements (background, main visual, headline, subtitle and CTA in sequence), with a scroll indicator that fades out smoothly once the user starts scrolling

### 😬 The Problem

* Editorial section, with no cards and no icons, about the frustration of posting every day without seeing a return in sales

### 🔁 The Shift

* High-impact typographic composition, with plenty of empty space, presenting the mentorship's central mindset shift: turning attention into purchase intent

### 🧭 The Method

* Five numbered steps, revealed progressively as the user scrolls (product selection, video creation, presenting without looking like an ad, generating clicks and analyzing results)
* Large typography and subtle numbering, with no card grid

### 🎒 The Mentorship Experience

* What the student actually gets: practical lessons, content strategy, product selection, scripts, video analysis, conversion strategies, ongoing support and supporting materials
* Composition with text and mockups, without turning the content into a card grid

### 🔄 Expected Outcome

* Direct comparison between the before (posting without understanding why it isn't selling) and the after (knowing what to sell, how to present it and how to analyze what works)

### 💬 Social Proof

* Testimonials with one featured highlight and the others in a secondary position, instead of a grid of three identical cards

### 🎯 Who It's For

* Short section indicating the audience: affiliates, small businesses, creators and entrepreneurs starting out on TikTok Shop

### 💰 Offer

* Direct presentation of what's included, format, access, bonuses (if any) and CTA — no complex pricing table

### 📣 Final CTA and Footer

* Final reinforcement call-to-action, with a security note right below the button
* Minimalist footer, with logo, essential links, terms and privacy

## 🎨 Visual Identity

* Predominantly light or very dark base (chosen based on whichever produces the best visual result)
* Red/coral as the accent color, used sparingly
* Subtle details inspired by TikTok's visual energy, without copying the brand's identity
* Bold typography and composition with plenty of negative space

## 🎬 Animations and Experience

* Light entrance animations (fade, reveal, small translate) built with **GSAP** and **ScrollTrigger**
* Progressive reveal of the method section tied to scroll position
* All animations respect `prefers-reduced-motion`
* Mobile-first priority, with sections recomposed for mobile (not just a shrunk desktop layout)

## 🧩 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Development environment and build tool |
| **React** | Interface development |
| **TypeScript** | Project typing |
| **Tailwind CSS** | Styling and responsive layouts |
| **GSAP + ScrollTrigger** | Animations and scroll effects |

## 🚀 Getting Started

```bash
git clone https://github.com/BeThomazzi/vendatok-mentoria.git
cd vendatok-mentoria
npm install
npm run dev
```

The application will usually be available at `http://localhost:3000`.

---

## 👨‍💻 Author

Developed by **Bernardo Thomazzi**.

**GitHub:** [@BeThomazzi](https://github.com/BeThomazzi)
