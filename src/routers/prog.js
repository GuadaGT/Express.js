const express = require("express");

const rutaProg = express.Router();
const datos = require("../../data/data.js");

rutaProg.get("/",(req,res)=>{
    //Para que se vea a través del plugin de JSON
    res.setHeader("Content-type", "application/json");
    //Para pasar el array a objeto"String" debemos de parsearlo con el 
    //Stringfy
    res.end(JSON.stringify(datos.prog));
})

rutaProg.post("/", (req,res)=>{
    //ñadir nuevo cursos de programación
    datos.prog.push({"titulo":req.body.titulo,"nivel":req.body.nivel});
    res.end("Curso añadido");
})

rutaProg.get("/filtrar/:nivel",(req,res)=>{
    listaDeCursosPorNivel = datos.prog.filter(
        (c)=>c.nivel==req.params.nivel
    );
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(listaDeCursosPorNivel));
})


module.exports = rutaProg;