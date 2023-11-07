const router = require ('express').Router();
//const express = require('express);
//const router = express.Router();

routers.get('/users/signup',(req,res)=>{
    res.send('Pagina de Registro de Usuarios')
});

routers.get('/users/signin',(req,res)=>{
    res.send('Pagina de Login de Usuarios')
});
module.exports= router;