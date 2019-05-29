const calificaciones = [5,9,8,8,8]
let promedio = 0
let suma = 0

for(var i = 0 ; i < calificaciones.length ; i++)
{
    suma += calificaciones[i]
}

promedio = suma / calificaciones.length

if (promedio >= 8)
    console.log("Tienes una beca este año, tu promedio es de "+promedio)
else
    console.log("No tienes una beca este año :(, tu promedio es de "+promedio)
