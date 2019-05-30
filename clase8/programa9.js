const alumno = {
	nombre: "John Doe",
calificaciones: [7, 10, 9, 6]
}

let mayor = alumno.calificaciones[1]

for(var i = 0 ; i < alumno.calificaciones.length ; i++) {
  
  if (alumno.calificaciones[i] > mayor)
     mayor = alumno.calificaciones[i]
}
        
console.log("La calificacion mayor es "+mayor)
