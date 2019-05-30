const persona = {
	nombre: "John Doe",
tarjetas: [
     {
	credito: 19000 
     },
     {
	credito: 50000
     }
]
}

let suma = 0

for(var i = 0 ; i < persona.tarjetas.length ; i++) {
  
     suma += persona.tarjetas[i].credito
}
        
console.log("La suma total de bonos es "+suma)
