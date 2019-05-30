const stock = [
	{ marca: "Huawei", modelo: "P30", precio: 13500 },
	{ marca: "Apple", modelo: "iPhone x", precio: 20000 },
	{ marca: "Motorola", modelo: "Moto X", precio: 10000 }
]

let precio = 0

for(var i = 0 ; i < stock.length ; i++) {
  
     if (i === 1)
          precio = stock[i].precio
     else if (stock[i].precio > precio)
          precio = stock[i].precio
}

for(var i = 0 ; i < stock.length ; i++) {
  
     if (stock[i].precio === precio)
           console.log("Marca: "+stock[i].marca+" Modelo: "+stock[i].modelo)
}
        

