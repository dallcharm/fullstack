let alumnos = [
{nombre: "Juan", calificaciones: [10,5,7,8,9],promedio: 0},
{nombre: "Maria", calificaciones: [10,5,5,5,6],promedio: 0},
{nombre: "Luis", calificaciones: [6,5,5,5,6],promedio: 0},
{nombre: "Mario", calificaciones: [4,5,3,5,6],promedio: 0}]
let examenesReprobados = 0;

for(var index = 0 ; index < alumnos.length ; index++)
{
    let sumaTemp = 0
    for (index1 = 0 ; index1 < alumnos[index].calificaciones.length ; index1++){
         sumaTemp += alumnos[index].calificaciones[index1]
    }

    alumnos[index].promedio = sumaTemp / alumnos[index].calificaciones.length

    if (alumnos[index].promedio < 6)
        console.log("Alumno: "+ alumnos[index].nombre + " reprobó con promedio de " +alumnos[index].promedio)

}