**Instalar nodejs:** https://nodejs.org/es/download/

**Inicializar proyecto de nodejs: **npm init 

**Instalar express:** npm i -D express
**Instalar nodemon:** npm i -D nodemon

**Configurar package.json:**
"scripts": {    
    "start": "node api/index.js",
    "dev": "nodemon --watch api api/index.js"
  }

**  Correr y Probar servidor:** npm run dev
**  Entrar al navegador:** http://localhost:3000/api/use