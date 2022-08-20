const colors  = require ('colors') ; 


const argv = require("yargs")
.option('b', {
    alias: 'base',
    demandOption: true,
    //default: '/etc/passwd',
    //describe: 'x marks the spot',
    type: 'number',
    describe:"es la base de la tabla de multiplication".rainbow
     

})
.check((argv,options) => {
    if(isNaN(argv.b)){
        throw "la base tiene que ser un numero".rainbow
    }else{
    return true;}
})





 .option('l', {
    alias: 'listar',
    //demandOption: true,
    default: false,
    //describe: 'x marks the spot',
    type: 'boolean',
    describe: 'muestra la tabal en consola'
})

.option('h', {
    alias: 'hasta',
    //demandOption: true,
    default: 10,
    //describe: 'x marks the spot',
    type: 'number',
    describe:"muesta solo las multiplicaciones requeridas".rainbow
})
.argv;

module.exports = argv;