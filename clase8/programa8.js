const temperaturas = [
  19, 24, 25, 30, 10
  ]
  

let mayor = temperaturas[1]

for(var i = 0 ; i < temperaturas.length ; i++) {
  
  if (temperaturas[i] > mayor)
     mayor = temperaturas[i]
}
        
console.log("La temperatura mayor es "+mayor)
