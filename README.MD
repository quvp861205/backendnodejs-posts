### Backend con nodejs - Posts y usuarios

---------------------------


**Instalar nodejs:** https://nodejs.org/es/download/

**Inicializar proyecto de nodejs:** npm init 

**Instalar express:** npm i -D express

**Instalar nodemon:** npm i -D nodemon

**Configurar package.json:**
```json
"scripts": {    
    "start": "node api/index.js",
    "dev": "nodemon --watch api api/index.js"
  }
```

**Correr y Probar servidor:** npm run dev
**Entrar al navegador:** http://localhost:3000/api/use

**Modelo de base de datos para el backend:**
[![modelo de bd](https://github.com/quvp861205/backendnodejs-posts/blob/master/modelo%20de%20base%20de%20datos.jpg?raw=true "modelo de bd")](https://github.com/quvp861205/backendnodejs-posts/blob/master/modelo%20de%20base%20de%20datos.jpg?raw=true "modelo de bd")
