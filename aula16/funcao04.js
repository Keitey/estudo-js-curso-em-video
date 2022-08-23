/*
fatorial é uma operação matemática muito comum e ele é representado pelo símbolo de exclamação, o fatorial de 5! por exemplo seria 5x4x3x2x1
O primeiro exemplo vai mostrar como fazer um fatorial da maneira tradicional e a segunda de forma recursiva, ou seja, quando a função chama ela mesma
*/
//primeira opção 
function fatorial(n){
    let fat = 1
    for(c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))