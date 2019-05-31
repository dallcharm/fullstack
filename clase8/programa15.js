const alumnos = [{
     name: "Aaron",
     materias: [
               { nombre: "Fotografia", calificacion: 10 },
               { nombre: "Literatura",  calificacion: 9 },
               { nombre: "Filosofia",   calificacion: 6 }
     ]
     },
     {
     name: "Maru",
     materias: [
               { nombre: "Trigonometria", calificacion: 10 },
               { nombre: "Calculo",       calificacion: 6 },
               { nombre: "Algebra",       calificacion: 5 }
     ]
     },
     {
          name: "Luis",
          materias: [
                    { nombre: "Arte",         calificacion: 5 },
                    { nombre: "Dibujo",       calificacion: 6 },
                    { nombre: "Diseno",       calificacion: 8 }
          ]
          }
     ]
     

let promedioAlto= 0
let nombreAlto = ""

for(var i = 0 ; i < alumnos.length ; i++) {
     let promedio = 0
     let contador = 0
     let suma = 0
     for(var j = 0 ; j < alumnos[i].materias.length ; j++){
          contador++
          suma += alumnos[i].materias[j].calificacion
          console.log(alumnos[i].name+ " "+ alumnos[i].materias[j].calificacion)
     }

     promedio = suma /contador
     console.log(alumnos[i].name+ " promedio: "+promedio)
     if ( promedio > promedioAlto ) {
          nombreAlto = alumnos[i].name
          promedioAlto = promedio
          console.log("Promedio actual "+promedioAlto+" promedio mas alto: "+nombreAlto)
     }
}

console.log("El alumno con el promedio más alto es: "+nombreAlto)