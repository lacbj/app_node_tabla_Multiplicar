
const colors  = require ('colors') ; 
const fs = require("fs");

const crearArchivo = async (base = 5,listar = false,hasta= 10) => {
   try {
 
    
        let tabla = hasta;
        let salida ="";
        let consola = "";
    
        for (var i = 1; i <= tabla; i++) {
            salida += `${base} x ${i} = ${base * i }\n`;
            consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i }\n`;
         }

            if(listar) {    

                console.log("================== ".green);
                console.log("TABLA DEL  ; ".green,colors.blue(base));
                console.log("=================== ".green);
                console.log(consola);
                console.log("se imprimio la lista en consola".yellow);
                

            }else{
                console.log("no se imprimio en consola".red)
            }




    
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            return` tabla del:${base}.txt`;




   }catch (err) {

    throw (err);
   }


    
       /* fs.writeFile(`tabla-${base}`,salida, (err) => {
            if (err) throw err;
            resolve(`tablas-${base}-creada`);
        })*/



}


module.exports = {
    crearArchivo
}


