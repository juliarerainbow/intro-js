
function reduce(array, reduceFunc, startingValue){

    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        accumulator = reduceFunc(accumulator, current);
        
    }

    return accumulator;

}

//=============================================== SORTING    || COMPARAZIONE

const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

//sort() è una funzione di alto ordine che può prendere una funzione ||||| devo poter spiegare al programma come 
// sort() in place 

// stringsArray.sort();
// console.log(stringsArray);

numbersArray.sort();
console.log(numbersArray);

newArray= numbersArray.map(e => e + 1);

 //  !!! sono uguali...sort sovrascrive l'array originale
// const newArray = numbersArray.sort()

// console.log(numbersArray);
// console.log(newArray);


//ci sono 3 possibilità ordine giusto, ordine sbagliato, indifferente

//---------------------------------------------

//ordine ascendente 
function compareAscNumbers(n1,n2) {

    if(n1 < n2 ){
        return -1;
    }else if(n1>n2){
        return +1;
    }else{
        return 0;
    }

}


function compareAscendingNumbers2(n1,n2) {

    return n1 - n2          //alternativa

}


numbersArray.sort(compareAscNumbers);
console.log(numbersArray);

//---------------------------------------------

//ordine discendente
function compareDescNumbers(n1,n2) {

    if(n1 > n2 ){
        return -1;
    }else if(n1<n2){
        return +1;
    }else{
        return 0;
    }

}

function compareDescNumbers2(n1,n2) { 

    return  n2 - n1         //alternativa
    
}

numbersArray.sort(compareDescNumbers);
console.log(numbersArray);

//---------------------------------------------


// stringsArray.sort((s1,s2) => s1.localeCompare(s2));
// stringsArray.sort((s1,s2) => -s1.localeCompare(s2)); //per ordinarlo al contrario
// console.log(stringsArray);



const studente1 = { 
    name:'Manuela',
    yob: 1988,
    marks: [10,8,7,5],
}

const studente2 = { 
    name:'Damiano',
    yob: 1993,
    marks: [9,8,7,10],
}

const studente3 = { 
    name:'Cesare',
    yob: 2003,
    marks: [7,8,7,6],
}
const studente4 = { 
    name:'Isabella',
    yob: 1996,
    marks: [10,8,9,9],
}

const studente5 = { 
    name:'Stefania',
    yob: 1996,
    marks: [9,4,7,6],
}

const studente6 = { 
    name:'Ares',
    yob: 1993,
    marks: [10,10,10,10],
}

const studente7 = { 
    name:'Stefania',
    yob: 2000,
    marks: [10,10,9,10],
}

const studente8 = { 
    name:'Cesare',
    yob: 2003,
    marks: [9,9,9,9],
}

const students = [studente1,studente2,studente3,studente4,studente5,studente6,studente7,studente8]

//studenti in ordine(alfabetico) per nome
function compareStudentsByNameAsc(s1,s2) {

    return s1.name.localeCompare(s2.name);

} 
//--------------------------------------------------

//studenti in ordine(alfabetico) per nome
function compareStudentsByNameDesc(s1,s2) {

    return s2.name.localeCompare(s1.name);

} 

//--------------------------------------------------
//studenti in ordine per data di nascita
function compareStudentsByYOBDesc(s1,s2) {

    return s2.yob - s1.yob ;

} 

//--------------------------------------------------
//studenti in ordine per nome asc e per data di nascita desc
function compareStudentsByNameAndYear(s1,s2) {

    if ( s1.name.localeCompare(s2.name)===0){
        return s2.yob - s1.yob ;
        
    }else{
        return s1.name.localeCompare(s2.name);
    }
    
}

//--------------------------------------------------

function calculateAverage(arrayOfNumbers) {
    const sumOfArray = arrayOfNumbers.reduce((a,c)=> a + c);
    const average = sumOfArray / arrayOfNumbers.length;
    return average;
}

function compareByStudentMarksAverageAsc(s1,s2){

     return calculateAverage(s2.marks) - calculateAverage(s1.marks); 
    
}

//--------------------------------------------------
function compareStudentsByNameYearAndAverage(s1,s2) {

    if ( s1.name.localeCompare(s2.name)===0){
        // return s2.yob - s1.yob ;

        if(s2.yob - s1.yob === 0 ){
            return calculateAverage(s2.marks) - calculateAverage(s1.marks); 
        }else {
            return s2.yob - s1.yob
        }
        
    }else{
        return s1.name.localeCompare(s2.name);
    }

    
}

//--------------------------------------------------
students.sort(compareStudentsByNameYearAndAverage);
// students.sort(compareByStudentMarksAverageAsc);

console.log(students);

// ====================================================== FIND || "il primo che rispetta"

function filter(array, filterFunc){

    let tempArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (filterFunc(element)) {
            tempArray.push(element);
        }
    }

    return tempArray;
}

const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];
//come la filter function ritorna true e false
//filter che ridà il primo elemento che ha la caratteristica ricercata da un array

function isGreaterThan3Chars(element){

    if(element.length > 3){
        return true;
    }
    return false;
}

// console.log(stringsArray.filter(isGreaterThan3Chars));
// console.log(stringsArray.find(isGreaterThan3Chars));




function containsCASA(element) {

    if(element.includes('CASA')){
        return true;
    }
    return false;
}

console.log(stringsArray.filter(containsCASA));
console.log(stringsArray.find(containsCASA));


//=============================================== SOME   || "ce n'è "   

//cerca se nell'array c'è un elemento con quella caratteristica, ritorna true o false

function isGreaterThan30Chars(element) {
    if(element.length > 30){
        return true;
    }
    return false;
    
}

console.log(stringsArray.some(isGreaterThan3Chars));
console.log(stringsArray.some(isGreaterThan30Chars));