let alumnos = [
  {nombre: "Juan", edad: 50,promedio: 0},
  {nombre: "Maria", edad: 25,promedio: 0},
  {nombre: "Luis",  edad: 18,promedio: 0},
  {nombre: "Mario", edad: 34,promedio: 0}]

let mayor = 0

for(var i = 0 ; i < alumnos.length ; i++) {
  
  if (alumnos[i].edad > mayor)
     mayor = alumnos[i].edad 
}
    
for(var i = 0 ; i < alumnos.length ; i++) {
  
  if (alumnos[i].edad === mayor)
  console.log("El alumno con mayor edad es "+alumnos[i].nombre)
}

