const entrada2 = require("readline-sync");

    let paga = parseFloat(entrada2.question("digite seu salario bruto: "));

    if(paga <= 1320){

        console.log("o seu salario é de = " + (paga - (paga * 0.075)));
    }

    else if(paga> 1320 && paga <= 2571.29){

        if(paga > 2112){

            console.log("o seu salario liquido é de = " + (paga - ((paga * 0.09) + (paga * 0.075))));
        }

        else{

            console.log("o seu salario liquido é de = " + paga + (paga * 0.09))
        }
    }

    else if(paga> 2571.29 && paga <= 3856.94){

        if(paga <= 2826.65){

            console.log("o seu salario é de = " + (paga - ((paga * 0.12) + (paga * 0.075))));
        }

        else if(paga > 2826.65 && paga <= 3751.05){

            console.log("o seu salario é de = " + (paga - ((paga * 0.12) + (paga * 0.15))));
        }

        else if(paga > 3751.05){

            console.log("o seu salario é de = " + (paga - ((paga * 0.12) + (paga * 0.225))));
        }

    }

    else if(paga > 3856.94){

        if(paga <= 4664.68){

            console.log("o seu salario é = " + (paga - ((paga* 0.14) + (paga * 0.225))));
        }

        else{

            console.log("o seu salario é = " + (paga - ((paga * 0.14) + (paga * 0.275)))); 
        }
    }