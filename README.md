    💡 Este repositório Possui versões em Português (pt-BR) e Inglês(US).
    💡 This repository has versions in Portuguese (pt-BR) and English (US).

<!-- ===================================================================== -->
<!-- VERSÃO EM PORTUGUÊS -->
<details>
<summary>Português (pt-BR)</summary>

![Cronologia](assets/imgs/logo/medium-white-logo.png)

## Sumário

- [Introdução](#introducao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Metodologias e Arquitetura](#metodologias-e-arquitetura)
- [Diagramação](#diagramacao)
- [Instalação](#instalacao)

## Introdução

**Cronologia** é um projeto desenvolvido com o objetivo de explorar e aplicar conceitos e tecnologias em estudo, alinhando-se ao meu interesse em história.

O jogo foi criado para ser desafiador e educativo, no qual você precisa organizar o maior número possível de eventos históricos em ordem cronológica!

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- ✔️ HTML5
- ✔️ CSS3
- ✔️ SASS
- ✔️ JavaScript
- ✔️ Node.js
- ✔️ Fastify
- ✔️ PostgreSQL
- ✔️ DBML

## Metodologias e Arquitetura

A arquitetura do projeto segue os seguintes padrões:

- 📂 **Padrão Arquitetural:** MVC (Model, View, Controller);
- 📂 **Metodologias CSS:** BEM (Block Element Modifier), Padrão 7-1 SASS;

## Diagramação

- Entidade e Relacionamento - [PDF](db/cronologia_diagram.pdf) / [SVG](db/cronologia_diagram.svg)

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- 🔧 Node.js - `v22.14.0`

## Instalação

Siga os passos abaixo para configurar o ambiente do projeto:

```bash
# Clone este repositório
git clone https://github.com/OGustavoCosta/Cronologia

# Acesse a pasta do projeto
cd Cronologia

# Instale as dependências
npm install  # ou yarn install

# Crie o banco de dados usando o arquivo em bd/Cronologia_postgreSQL.sql
# (Caso queira criar em outro SGBD, estou deixando o arquivo .bdml para criação)

# Configure as variáveis de ambiente do banco de dados

# Inicie a aplicação
npm start  # ou yarn start
```
</details>

<!-- ===================================================================== -->
<!-- VERSÃO EM INGLÊS -->
<details>
<summary>English (US)</summary>

![Cronologia](assets/imgs/logo/medium-white-logo[english].png)

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Methodologies and Architecture](#methodologies-and-architecture)
- [Diagramming](#diagramming)
- [Installation](#installation)

## Introduction

**Cronologia** is a project developed with the goal of exploring and applying concepts and technologies under study, aligning with my interest in history.

The game was designed to be both challenging and educational, where you need to arrange as many historical events as possible in chronological order!

## Technologies Used

This project was developed using the following technologies:

- ✔️ HTML5
- ✔️ CSS3
- ✔️ SASS
- ✔️ JavaScript
- ✔️ Node.js
- ✔️ Fastify
- ✔️ PostgreSQL
- ✔️ DBML

## Methodologies and Architecture

The project architecture follows these standards:

- 📂 **Architectural Pattern:** MVC (Model, View, Controller);
- 📂 **CSS Methodologies:** BEM (Block Element Modifier), 7-1 SASS Pattern;

## Diagramming

- Entity and Relationship - [PDF](db/cronologia_diagram.pdf) / [SVG](db/cronologia_diagram.svg)

## Prerequisites

Before starting, make sure you have the following requirements installed:

- 🔧 Node.js - `v22.14.0`

## Installation

Follow the steps below to set up the project environment:

```bash
# Clone this repository
git clone https://github.com/OGustavoCosta/Cronologia

# Access the project folder
cd Cronologia

# Install dependencies
npm install  # or yarn install

# Create the database using the file in bd/Cronologia_postgreSQL.sql
# (If you want to create it in another DBMS, I am also providing the .bdml file for creation)

# Configure the database environment variables

# Start the application
npm start  # or yarn start
