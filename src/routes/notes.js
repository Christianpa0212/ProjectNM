const router = require ('express').Router();
//const express = require('express);
//const router = express.Router();

routers.get('/notes',(req,res)=>{
    res.send('Pagina de Notas')
});


module.exports= router;