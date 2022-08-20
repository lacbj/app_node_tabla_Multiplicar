 


const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./yargs/yargs");




console.clear();



 crearArchivo(argv.b ,argv.l,argv.h)
 .then(nombreArchivo => console.log(`${nombreArchivo} creada`.green))
 .catch(err => console.log(err));
    