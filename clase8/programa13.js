const stores = [{
     name: "Amazon",
     stock: [
               { marca: "Huawei", modelo: "P30", precio: 11999 },
               { marca: "Apple", modelo: "iPhone x", precio: 18000 },
               { marca: "Motorola", modelo: "Moto X", precio: 9000 }
     ]
     },
     {
     name: "Liverpool",
     stock: [
               { marca: "Huawei", modelo: "P30", precio: 13500 },
               { marca: "Apple", modelo: "iPhone x", precio: 20000 },
               { marca: "Motorola", modelo: "Moto X", precio: 10000 }
     ]
     }
     ]
     

let precio = 0

for(var i = 0 ; i < stores.length ; i++) {
     
     for(var j = 0 ; j < stores[i].stock.length ; j++){

          if ( j=== 1)
               precio = stores[i].stock[j].precio
          else if (stores[i].stock[j].precio > precio) 
               precio = stores[i].stock[j].precio    

     }
}

for(var i = 0 ; i < stores.length ; i++) {
     
     for(var j = 0 ; j < stores[i].stock.length ; j++){

           if (stores[i].stock[j].precio === precio) 
               console.log("Marca: "+stores[i].stock[j].marca+" Modelo: "+stores[i].stock[j].modelo+ " Tienda: "+stores[i].name) 

     }
}
        

