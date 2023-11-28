require("dotenv").config();

const express = require("express");
const app = express();

app.set("views engine", "ejs");
app.use(express.json());
//Para añadirlo a través del http pero a través de un formulario.
app.use(express.urlencoded());

const rProg = require("./routers/prog.js");
app.use("/api/cursos/prog",rProg);
/*const rMat = require("./routers/mates.js");
app.use("/api/cursos/matematicas",rMat);*/

const datos = require("../data/data.js");
app.get("/cursos", (req,res)=>{
    res.render("../views/pages/cursos.ejs",{misdatos: datos.prog});
})
/*app.get("/api",(req,res)=>{
    res.end("Bienvenido a mi API.");
})
app.get("/api/cursos",(req,res)=>{
    res.end("Listado de cursos");
})*/

app.use("/", express.static("./archivos_estaticos"));

app.listen(process.env.PORT, ()=>console.log(`Servidor iniciado en ${process.env.PORT}`));