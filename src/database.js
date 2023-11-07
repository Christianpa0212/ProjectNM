const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/Tubase'); LOCAL
//mongoose.conect('mongodb://El-Contenedor/Tubase'); DOCKER
mongoose.connect('MONGOATLAS')
.then(db=> console.error(err));


