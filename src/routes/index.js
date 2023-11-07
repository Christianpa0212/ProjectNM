const router = require ('express').Router();
//const express = require('express);
//const router = express.Router();

routers.get('/',(req,res)=>{
    res.send('Pagina Index')
});


module.exports= router;