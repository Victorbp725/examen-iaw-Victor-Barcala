/* Ejercicio 1 (2,5 puntos)
Escribe un programa para tirar dados. El usuario tendrá que decidir entre dados de 6 caras o de 10 caras, así como cuántos quiere tirar. 
El programa tendrá que comprobar que la introducción de los datos es correcta y mostrará el resultado de cada uno de los dados en pantalla, 
así como su suma. 
Un ejemplo del output por terminal sería este: 
    Has tirado 3 dados de 6 caras.
    Los resultados han sido: 3 5 1
    El total es 9*/
    const input = require("prompt-sync")({sigint: true})
    
    const tipo = input ("¿ que tipo de dado quieres 6 o 10 caras ?")
    const cantidad = input ("¿ cuantos dados quieres tirar ?")

    let numerosDados6 = Math.floor(Math.random()*6);
    let numerosDados10 = Math.floor(Math.random()*10);

    console.log("has tirado " + cantidad + " dados de " + tipo + " caras")

    if (cantidad === 6){
        console.log("los resultados son: " + numerosDados6 ) 
    } else {
        console.log("los resultados son: " + numerosDados10)
    }

    


