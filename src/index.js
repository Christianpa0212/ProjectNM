const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require ('express-session');

const { mainModule } = require('process');
//Initializations
const app = express();
require('./database');

//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
/*app.engine('.hbs',exphbs({
    defaultLayout: 'main' ,
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));*/
app.set('view engine','.hbs');

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'miclave',
    resave:true,
    saveUninitialized: true
}));

//Global Variable
//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Server
app.listen(app.get('port'),()=>{
    console.log('SERVER ONLINE IN PORT', app.get('port'));
});
