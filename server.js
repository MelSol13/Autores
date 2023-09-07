/*
-creamos server.js
-terminal: npm init -y (crea el package.json)
-en el package.json en start: cambiar a nodemon server.js
-terminal 1 Autores: npm install express mongoose cors
-crear siguientes carpetas:
    server
        config
            mongoose.config.js (aqui siempre el mismo codigo nada mas copiar de otros proyectos y cambiar nada mas el nombre para el examen por ejemplo se puede llamar exam) (luego de aqui trabajar primero models )
        controllers
        models
        routes
        ------------
        terminal 2: npx create-react-app client
        esperar el happy hacking
        cd client
        npm install axios react-router-dom
*/

const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

//permite accesar desde un origen distinto
app.use(
    cors({
        //URL de React
        origin: "http://localhost:3000"
    })
)

//Inicializar la BD
require("./server/config/mongoose.config");

//Importar Rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, ()=>console.log("Servidor Listo!"));