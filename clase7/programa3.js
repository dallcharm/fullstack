const calificaciones= [8,9,10,8,5,5,5,5,5,10,8,9,2,8]

let examenesReprobados = 0;

for(var index = 0 ; index < calificaciones.length ; index++)
{
    if (calificaciones[index] <= 5) {
        examenesReprobados ++
    }
}

console.log("La cantidad de examenes reprobados son "+ examenesReprobados)