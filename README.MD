### Backend con nodejs - Posts y usuarios

---------------------------


**Instalar nodejs:** https://nodejs.org/es/download/

**Instalar insomnia para probar nuestro rest:** https://insomnia.rest/blog/open-source-announcement

**Usar swagger para documentar nuestra api:** https://editor.swagger.io/

**Instalar mysqlserver o xampp e iniciar servicio mysql:** https://www.apachefriends.org/es/index.html

**O crear la bd en linea de preferencia:** https://remotemysql.com/databases.php?action=new

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
      pm2 start ecosystem.config.js --env development; pm2 logs

**Instalar https://vercel.com/dashboard para usar este proyecto en serveless en la nube:** npm i -g vercel

**Instalar y ejecutar con:** vercel

**Configurar vercel:** vercel.json

**Ejemplos:**
https://backendnodejs-posts-f88v3dc1z.vercel.app/post
https://backendnodejs-posts-f88v3dc1z.vercel.app/api/user

**Instalar redis para el manejo del cache https://redislabs.com/:** npm i -g redis

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


**Ejemplos para consumir la api:**

    list user: http://localhost:3000/api/user
    get user: http://localhost:3001/user/NOMUWpvTF8FsrgwijziOj
    list post: localhost:3002/post
    get post: localhost:3002/post/mj9uBWvmooTRW-DZwMUd3
    follow user: localhost:3000/api/user/follow/H1_EgK5wOerIeFt9U8st3
    get following: localhost:3000/api/user/NOMUWpvTF8FsrgwijziOj/following

    insert user: localhost:3000/api/user
    body:
    {	
    	"name": "nombre apellido", 
    	"username": "nombre", 
    	"password": "contra"
    }
    
    insert post: localhost:3002/post
    body:
    {
    	"text": "Un posts mas hoy lunes",
    	"user": "nombre"
    }
    
    login: localhost:3000/api/auth/login
    body:
    {
    	"username": "nombre",
    	"password": "contra"
    }
    
    update user: localhost:3000/api/user
    body:
    {
    	"id": "NOMUWpvTF8FsrgwijziOj",
    	"name": "nombre apellido",
    	"username": "nombre",
    	"password": "contra"
    }
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5PTVVXcHZURjhGc3Jnd2lqemlPaiIsInVzZXJuYW1lIjoicGVkcm8iLCJwYXNzd29yZCI6IiQyYiQwNSR2UDNBeDlNcEt0cEZMQWFPMWxXbDBlaS52NlVhQW9zTWV0S2YxNHg4bGI3MjNhLk44L0Y1bSIsImlhdCI6MTYxMDc0ODQ1MH0.B7MGnwAeoGe6UsPaykS5xDTCZTd_hXad6REXWjBOA3k
    
    remove post: localhost:3000/api/post/remove/NcaMurGb4jjWVHXj6cMsn