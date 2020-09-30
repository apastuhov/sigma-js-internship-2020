# sigma-js-internship-2020

This is an educational project for group JS internship within Sigma Software at 2020

# Intro

Current project is a simple social network platform "XYZ". User can do various actions, among them:

- Register within system
- Login
- Fulfill personal page with data
- Find new friends within the platform
- Connect with friends
- Chat with friends
- Review friends pages
- Leave text comments on friends or personal pages

# Before starting working on the project make sure that the following tools are installed:

- Editor or IDE (WebStorm, VS Code etc.)
- Git
- Latest LTS version of NodeJS & NPM. You can install NVM to manage different versions of NodeJS
  ```sh
  nvm install --lts
  # restart terminal and check node version, it should be the same as .nvmrc file
  node --version
  ```
- Google Chrome browser
- Docker

To install dependencies - run `npm ci` from the root of the project.

## Mongo setup

Setup docker on your machine. From root of the project run `docker-compose up`

# Design

[![](https://img.shields.io/badge/source-figma-blue?style=flat)](https://www.figma.com/file/gAndxaAQxPZ20cYJdKxRuH/Fullstack-Internship)

There are no requirements for the application design at all. Be creative!

Each page must contain:

- Header
- Main which depends on the current URL
- Footer

# Constraints

You must become familiar and use

BE:

- NodeJs
- Experess
- MongoDB
- TypeScript

FE:

- React (hooks)
- TypeScript
