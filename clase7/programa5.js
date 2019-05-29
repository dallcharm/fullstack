
let alumnos = [
{nombre: "Juan", materias : [
                {nombre: "Historia", promedio: 8},
                {nombre: "Geografia", promedio: 6}
                ]
},
{nombre: "Maria", materias: [
                {nombre: "Español", promedio: 4},
                {nombre: "Matematicas", promedio: 8}
                 ]
},
{nombre: "Luis", materias : [
                {nombre: "Sociales", promedio: 5},
                {nombre: "Español", promedio: 10}
                ]
},
{nombre: "Mario", materias : [
                {nombre: "Historia", promedio: 9},
                {nombre: "Geografia", promedio: 7}
                 ]
} ]

for(var index = 0 ; index < alumnos.length ; index++)
{
   // console.log(alumnos[index].nombre+ " "+alumnos[index].materias)

    for (index1 = 0 ; index1 < alumnos[index].materias.length; index1++){

    //    console.log(alumnos[index].materias[index1].nombre)
        if (alumnos[index].materias[index1].promedio < 6) {
        console.log("Alumno: "+ alumnos[index].materias[index1].nombre + " reprobó con promedio de " +alumnos[index].materias[index1].promedio)
        }

    }

    
   
}
