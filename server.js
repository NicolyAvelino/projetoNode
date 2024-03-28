const app = require('./app'); 

require('dotenv').config({path:'variables.env'});

app.set('port', process.env.PORT || 5555); 
const server = app.listen(app.get('port'), () => {
    console.log("Servidor ON - porta: " + server.address().port);
}); 