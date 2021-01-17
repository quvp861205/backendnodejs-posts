### Backend con nodejs - Posts y usuarios

---------------------------


**Instalar nodejs:** https://nodejs.org/es/download/

**Instalar insomnia para probar nuestro rest:** https://insomnia.rest/blog/open-source-announcement

**Usar swagger para documentar nuestra api:** https://editor.swagger.io/

**Instalar mysqlserver o xampp e iniciar servicio mysql:** https://www.apachefriends.org/es/index.html



**Inicializar proyecto de nodejs:** npm init 

**Instalar express:** npm i -D express

**Instalar nodemon:** npm i -D nodemon

**Instalar body-parser:** npm i -D body-parser

**Instalar nanoid:** npm i -D nanoid

**Instalar  jsonwebtoken para autenticaion:** npm i -D jsonwebtoken

**Instalar  bcrypt para encriptar contraseñas:** npm i -D bcrypt

**Instalar mysql:**   npm i -D mysql

**Instalar request para consumir microservicios mysql:** npm i -D request

**Instalar pm2 para gestionar los microservicios:** npm i -g pm2

  **Utilizandolo:** 
  
      pm2 start api/index.js --name api-principal
      pm2 start mysql/index.js --name api-mysql
      pm2 start post/index.js --name api-post
      pm2 status
      pm2 logs
      pm2 delete [api-principal|api-mysql|api-post]
      ó
      pm2 delete all
      Ejecutando: pm2 start ecosystem.config.js --env [development|production]

**Instalar swagger para documentacion del proyecto (http://localhost:3000/api-docs):** 
npm i -D swagger-ui-express

**Configurar package.json:**
```json
"scripts": {    
    "start": "node api/index.js",
    "dev": "nodemon --watch api api/index.js"
  }
```

**Correr y Probar servidor:** npm run dev

**Correr y Probar servidor:** npm run dev
**Entrar al navegador:** http://localhost:3000/api/user

**Modelo de base de datos para el backend:**
[![modelo de bd](https://github.com/quvp861205/backendnodejs-posts/blob/master/modelo%20de%20base%20de%20datos.jpg?raw=true "modelo de bd")](https://github.com/quvp861205/backendnodejs-posts/blob/master/modelo%20de%20base%20de%20datos.jpg?raw=true "modelo de bd")
