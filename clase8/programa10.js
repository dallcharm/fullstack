const persona = {
	nombre: "John Doe",
bonos: [100, 500, 1300]
}

let suma = 0

for(var i = 0 ; i < persona.bonos.length ; i++) {
  
     suma += persona.bonos[i]
}
        
console.log("La suma total de bonos es "+suma)
