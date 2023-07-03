// control alt L per turbo console log sulla variabile

//scrivere una funzione che dato un array di numeri
//li eleva al quadrato e rimuove i negativi

const testArray= [2,-12.0,27,4,-3,12];


//map e filter
function squareAllAndRemoveNegative(arr) {
    const onlyPositiveArray = arr.filter(el => el >= 0);
    const mappedArray = onlyPositiveArray.map(el => el**2);
    return mappedArray;
}

console.log("----", squareAllAndRemoveNegative(testArray));


function squareAllAndRemoveNegative2(arr) {
    return arr.filter(el => el >= 0)
              .map(el => el**2);  
}
console.log("----", squareAllAndRemoveNegative2(testArray));
   

function squareAllAndRemoveNegative3(arr) {
    const accumulator=[];
    for (const number of arr){
        if(number >=0){
            accumulator.push(number**2);
        }
    }
    return accumulator;
}
console.log("----", squareAllAndRemoveNegative3(testArray));

function squareAllAndRemoveNegative4(arr) {

    return arr.reduce((acc,curr)=>{
        if(curr >=0){
            acc.push(curr**2);
            return acc
        }
        return acc;
    },[])
}
console.log("----", squareAllAndRemoveNegative4(testArray));

function squareAllAndRemoveNegative5(arr) {

    return arr.reduce((a,c) => c >= 0 ? [...a, c ** 2] : a , [])

}
console.log("----", squareAllAndRemoveNegative5(testArray));

//scrivi una funzione che dato un array di numeri
// somma tutti quelli divisibili per 3;

function sumDivisibileByThree(arr) {

    const divisibleBy3Array = arr.filter(el => el % 3 === 0);
    const sumArray=divisibleBy3Array.reduce((a,c)=> a + c,0);
    return sumArray;
    
}

function sumDivisibileByThree1(arr) {

    return arr.filter(el => el % 3 === 0)
              .reduce((a,c)=> a + c,0);
    
}

function sumDivisibileByThree2(arr) {

    let accumulator=0;

    for(const number of arr){

        if (number % 3 ==0){
            accumulator= accumulator + number;
        }
    }

    return accumulator;
    
}

function sumDivisibileByThree3(arr) {

    return arr.reduce((a,c) => {
        if(c % 3 ==0){
            a = a + c;
        }
        return a;
    } , 0)
}


// function sumDivisibileByThree4(arr) {

//     return arr.reduce((a,c) => c >= 0 ? [...a, a+ c] : a , [])

    
// }

console.log("---- ~ sumDivisibileBy3:", sumDivisibileByThree(testArray));
console.log("---- ~ sumDivisibileBy3:", sumDivisibileByThree1(testArray));
console.log("---- ~ sumDivisibileBy3:", sumDivisibileByThree2(testArray));
// console.log("---- ~ sumDivisibileBy3:", sumDivisibileByThree4(testArray));




//data una stringa di elementi separati da virgole
//converti gli elementi in numeri
//togliere quelli che  non sono numeri
//e sommare i numeri tra loro 

const testString = '2000,10,pippo,345,-234,ciambella,2,';

function convertToNumbersAndSumAll(string) {
   const stringArray = string.split(',');
    const numbersArray=stringArray.map(el=> parseFloat(el));
    const onlyNumbersArray = numbersArray.filter(el => !isNaN(el));
    // const onlyNumbersArray = numbersArray.filter(isANumber);
    // function isANumber(element) {
    //     if(isNaN(element)){
    //         return false;
    //     }else {
    //         return true
    //     }
    // }

    const sumAll = onlyNumbersArray.reduce((a,c) => a + c, 0);
    return sumAll;
    

}


function convertToNumbersAndSumAll2(string) {
    return string.split(',')
                 .map(el=> parseFloat(el))
                 .filter(el => !isNaN(el))
                 .reduce((a,c) => a + c, 0);
 }



 function convertToNumbersAndSumAll3(string) {
    const stringArray = string.split();

    let accumulator=0;
    for (const str of stringArray) {

        const number= parseFloat(str);
        if(!isNaN(number)){
            accumulator=accumulator+number;
        }
    }
    return accumulator;
 }


console.log("---- ~ convertToNumbersAndSumAll:", convertToNumbersAndSumAll(testString))

console.log("---- ~ convertToNumbersAndSumAll:", convertToNumbersAndSumAll2(testString))
 
console.log("---- ~ convertToNumbersAndSumAll:", convertToNumbersAndSumAll2(testString))



//1) dato un array di stringhe,
// eliminare tutte quelle che NON contengono la lettera p
// e ritornare la somma delle lunghezze

const test1 = ['pippo','pluto','qui','quo','qua','paperone']; //18

function returnStringLengthWithoutPWords(array) {
    return array.filter((str)=> str.includes('p'))
                .map((str) => str.length)
                .reduce((a,c) => a + c,0);
}


console.log("---- ~ returnStringLengthWithoutPWords:", returnStringLengthWithoutPWords(test1));


//2) dato un array di numeri, moltiplicali per il loro indice
// rimovere quelli maggiori di 1000
// e restituiscili in formato stringa, separati da punto e virgola


const test2 =[100,10,24,-20,300,6,100,300];


function nomeFunzione(arr) {
    // return arr.reduce((a,c,i,o)=> c * i > 1000? c * i  + '' : a,0)


    return arr.reduce((a,c,i,o)=> c * i > 1000? (c * i) + '' : a,0)


}
console.log("-------",nomeFunzione(test2));

//3) data una stringa, eliminare tutte le parole più corte di 4 caratteri
// e restituirle in un array ordinate per lunghezza dalla più lunga.

const test3 = 'ho fatto il bucato ieri sera ma si è tinto tutto di rosso';



//eloquent js fino al capitolo 5 (higher order funcion)
//codewars


//CAP 4 ES 1-------------------------------------
function range(start,end){
    const tempArray = [];


    if(end < start){
        return tempArray;
    }
    for (let i = start; i <= end; i++) {
        tempArray.push(i);
    }
    return tempArray;
}

console.log(range(0,100,2));
// console.log(range(100,0,2,true));

// function range(start,end,step = 1, reversed = false){
//     const tempArray = [];

//     if(reversed){
//         if (start < end){
//             return tempArray;
//         }
//         for (let i = start; i >= end; i -= step) {
//             tempArray.push(i);
//         }
//     }else{
//         if(end < start){
//             return tempArray;
//         }
//         for (let i = start; i <= end; i+=step) {
//             tempArray.push(i);
//         }
//         return tempArray;
//     }
//     return tempArray;
// }

// console.log(range(0,100,2));
// console.log(range(100,0,2,true));


function sum(numbers) {

    return numbers.reduce((a,c)=> a + c , 0 );
    
}
console.log(sum(range(0,10)));


//CAP 4 ES 2-------------------------------------

const tempArray=['qui','quo','qua'];

function reverseArray(array) {
    const tempArray = [];

    for (let i = array.length - 1; i >=0 ; i--) {
        const element = array[i];
        tempArray.push(element);
    }
    return tempArray;
}

console.log(reverseArray(tempArray));
