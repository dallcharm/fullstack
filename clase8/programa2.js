const array = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
    
let suma = 0

for(var i = 0 ; i < array.length ; i++)
{
    for(var j = 0 ; j < array[i].length ; j++)
        
        suma += array[i][j]
}
console.log("La suma total del arreglo es de "+suma)
