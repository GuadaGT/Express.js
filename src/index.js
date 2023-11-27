require("dotenv").config();

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.end("Bienvenido a mi API.");
})
app.get("/cursos",(req,res)=>{
    res.end("Listado de cursos");
})

app.listen(process.env.PORT, ()=>console.log(`Servidor iniciado en ${process.env.PORT}`));

