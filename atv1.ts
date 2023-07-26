const entrada1 = require("readline-sync");

let number = parseFloat(entrada1.question('Digite um numero: '))


if( number%1 === 0){
    console.log('n inteiro')
}

else{console.log('n Decimal')}