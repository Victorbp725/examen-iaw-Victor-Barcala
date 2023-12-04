
const input = require("prompt-sync")({sigint: true})
//soy una intervencin divina
// llama a esto input
let texto = input("Introduce un texto -> ")
const consotantes = "qwrtypsdfghjklñzxvbnmmQWRTYPSDFGHJKLÑZXCVBNM"

let consotantesTotales = 0

for (let x = 0; x < consotantes.length; x++) {
    for (let n = 0; n < texto.length; n++) {
        if (texto.charAt(n) == consotantes.charAt(x)) {
            consotantesTotales = consotantesTotales + 1
        }      
    }   
}
console.log("Las consotantes totales son -> " + consotantesTotales)


