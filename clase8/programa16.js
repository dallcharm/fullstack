//Joel tiene que pagar impuestos,
// él tiene una lista de ingresos y gastos, 
// cada ingreso está representado en número y significan pesos, 
// cada gasto tiene un concepto (texto) y el total del gasto en pesos. 
// Los impuestos que debe pagar son el 16% de sus ingresos menos el total de sus gastos
// que estén bajo el concepto de: “salud”

const JoelGasIng = [{
     ingresos: [40,80,1000,10000],
     gastos: [
               { concepto: "Colegiatura", cantidad: 50 },
               { concepto: "salud",      cantidad: 200 },
               { concepto: "Renta",       cantidad: 3000 }
     ]
          }
     ]
     

let impuestos = 0
let ingreso = 0
let gasto = 0
let deduccion = 0
//Calculo total de ingresos
for(var i = 0 ; i < JoelGasIng.length ; i++) {

     for(var j = 0 ; j < JoelGasIng[i].ingresos.length ; j++){
          
          ingreso += JoelGasIng[i].ingresos[j]

     }

     for(var j = 0 ; j < JoelGasIng[i].gastos.length ; j++){
          
          if (JoelGasIng[i].gastos[j].concepto !=="salud")
                gasto += JoelGasIng[i].gastos[j].cantidad
          else
                deduccion +=JoelGasIng[i].gastos[j].cantidad

     }
}
 impuestos = ingreso * 0.16 - deduccion
console.log("Los impuestos que deben pagar Joel son "+impuestos)

