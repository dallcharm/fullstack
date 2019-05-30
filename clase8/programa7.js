const jugador = {
	nombre: "John Doe",
	partidas: [true, false, true, true]
}

let suma = 0

for(var i = 0 ; i < jugador.partidas.length ; i++) {
  
  if (jugador.partidas[i])
     suma ++
}
        
console.log("La suma total de partidas para el jugador es "+suma)
