/*
uma recursão acontece toda vez que uma função chama ela mesma
o fatorial de 5! é a mesma coisa de 5 x 4 x 3 x 2 x 1
se observar verá que 5! é a mesma coisa de 5 x o resultado da multiplicação de 4x3x2x1, pensando dessa forma o fatorial de 5! poderia ser reescrito da seguinte forma 5!= 5 x 4!
*/

function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(1))