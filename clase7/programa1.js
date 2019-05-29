const asistencia = [true,true,false,true,true,true]
let porcentaje = 0
let suma = 0

for(var index = 0 ; index < asistencia.length ; index++)
{
    if (!asistencia[index]) {
        suma ++
    }
}

porcentaje = suma * (100 / asistencia.length)

console.log("Tu porcentaje de faltas es "+porcentaje)