const express = require("express");

const rutaMat = express.Router();
const datos = require("../../data/data.js");

rutaMat.get("/",(req,res)=>{
    //Para que se vea a través del plugin de JSON
    res.setHeader("Content-type", "application/json");
    //Para pasar el array a objeto"String" debemos de parsearlo con el 
    //Stringfy
    res.end(JSON.stringify(datos.mates));
})

module.exports = rutaMat;