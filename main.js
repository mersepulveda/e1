//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
for (let i =1; i<=10; i++){
        console.log(i);
if (i % 2 ==0)
    console.log("es un número par")
else 
    console.log("es un número impar")
}

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
//y si ninguno lo es, indicar por consola que son iguales.

let numero1= 2
let numero2= 7

if (numero1<numero2){
    console.log(`${numero1} es menor que ${numero2}`);
}

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
for (let i =1; i<=15; i++){
    console.log(i);
if (i % 5 ==0)
console.log("es múltiplo de 5")
else 
console.log("no es múltiplo de 5")
}

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
for (let i =1; i<=10; i++){
    console.log(i);
}

//5 - Crear unMa función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
let nombre ="Mercedes, "
let cadenaPalabra = nombre.repeat(4)

console.log(cadenaPalabra)


//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let array= ["hola",5,"Tito",true,"perro"]
console.log(array)

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. 
const arr=[1,2,3,4,5,6,7,8,9,10]

for (let i=0; i< arr.length; i++){
    if ( arr [i]===6){
        continue
    }
    console.log (arr[i]);
}

 //8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

 const arrNumeros= [3,6,9,12,15];
 const factor=4

 const arrayMapeo= arrNumeros.map((e) =>{
    console.log(e);
    return e*factor;
 })
 console.log(arrNumeros)
 console.log(arrayMapeo)
