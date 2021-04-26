const chalk = require('chalk');

Number.prototype.MaxNumber = function(){
    let number = myNumber.valueOf();
    let stringNum = number.toString();
    let arrayNum = stringNum.split('');
    let result = [];

    for(let i = 0; i <= arrayNum.length; i++){
        for(let x = 0; x < arrayNum.length; x ++){
            if(arrayNum[x].includes(i)){
                result.push(arrayNum[x]);
            }
        }   
    }
    // Matikan komentar untuk melihat isi array
    // console.log(result); 
    console.log(`Max : ${chalk.green(result[result.length - 1])}`);
}

Number.prototype.MinNumber = function(){
    let number = myNumber.valueOf();
    let stringNum = number.toString();
    let arrayNum = stringNum.split('');
    let result = [];

    for(let i = 0; i <= arrayNum.length; i++){
        for(let x = 0; x < arrayNum.length; x ++){
            if(arrayNum[x].includes(i)){
                result.push(arrayNum[x]);
            }
        }   
    }

    console.log(`Min : ${chalk.green(result[0])}`);
}

let myNumber = 50431;

console.log(`Number: ${chalk.yellow(myNumber)}`);
myNumber.MaxNumber();
myNumber.MinNumber();