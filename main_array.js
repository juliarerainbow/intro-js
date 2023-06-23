//======================================= ARRAY

const pippo = ['pane','pasta','latte','caffè'];
console.log(pippo);

console.log(pippo.length);
//-----------------------------------AGGIUNGERE E TOGLIERE ELEMENTI

pippo.push('acqua');// <--- aggiungi in CODA ad un array
console.log(pippo);


pippo.unshift('biscotti');// <--- aggiungi in TESTA ad un array
console.log(pippo);


const elementoInCoda = pippo.pop();// <--- TOGLI in coda ad un array
console.log(elementoInCoda);
console.log(pippo);


const elementoInTesta = pippo.shift();// <--- TOGLI in testa ad un array
console.log(elementoInTesta);
console.log(pippo);

//-----------------------------------CICLI ED ARRAY

// const pluto = [1,3,'ciao',true, [1,2]] // evitare array di tipi diversi

//-----------------------------------for 
//con l'autocompletamento di for puoi cambiare tutti gli index..premendo tab puoi cambiare gli array, premendo tab puoi cambiare element

const pluto =[1,2,23,-4,345,0];

for (let i = 0; i < pluto.length; i++) {
    const element = pluto[i];
    console.log(element);
}
//-----------------------------------for of
for (const element of pluto) {
    console.log(element);
}
//-----------------------------------while
let i=0;

while(i < pluto.length) {
    console.log(pluto[i]);
    i++;
}

//----------------------------------- indici degli array

console.log('primo elemento',pluto[0]);
console.log('terzo elemento',pluto[2]);
console.log('sempre l\' ultimo',pluto[pluto.length - 1]);

//----------------------------------- ciclo dell'array al contrario
for (let i = pluto.length - 1; i > 0; i--) {
    console.log(pluto[i]);
}


//======================================= TRASFORMAZIONI DI ARRAY

////-----------------------------------MAPPING 
//la trasformazione è uguale per tutti e in uscita verrà mantenuto lo stesso numero di elementi

const paperino=[2, 5, -4, 2000, 7, 34];
//-----------------------------------
function multiplyArrayBy2(array){
    let accum = [];
    for (let i = 0; i < array.length; i++) {
        accum.push(((array[i]) * 2)) ;  
    }
    return accum;
}

console.log('multiply array by 2',multiplyArrayBy2(paperino));
//-----------------------------------
function divideBy2ifEven(array){
    const acc=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        let newElement;

        if(element % 2 === 0){
            newElement = element / 2;
        }else{
            newElement = element;
        }
        acc.push(newElement);
    }
    return acc;
}
console.log("divide by 2 if even ",divideBy2ifEven(paperino));

const paperone = ['qui','quo','qua'];

function upperCaseAll(array){
    const acc=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        let newElement=element.toUpperCase();
        acc.push(newElement);
    }
    return acc;
}

console.log('upperCaseAll',upperCaseAll(paperone));

////-----------------------------------FILTERING 
//da un array di numeri ne esce fuori uno filtrato, in uscita gli elementi saranno di meno


const paperoga=[3,5,6,9,8,111,-3,-8,0];

function removeEven(array){
    const acc=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element%2===0){
            acc.push(element);
        }
    }
    return acc;
}
console.log('Remove Even',removeEven(paperoga));

function removeNegative(array){
    const acc=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element >= 0 ){
            acc.push(element);
        }
    }
    return acc;

}
console.log('Remove Negative',removeNegative(paperoga));

function removeNegativeAndMultiplyby2(array){
    // const arrayWithoutNegative = removeNegative(array);
    // const arrayMultiplied =multiplyArrayBy2(arrayWithoutNegative);
    // return arrayMultiplied;

    return multiplyArrayBy2(removeNegative(array));
}
console.log('Array without Negative and Multiplied by 2',removeNegativeAndMultiplyby2(paperoga));


//REDUCING prendo tutti gli elementi dell'array il risultato è un elemento unico

//












// ESERCIZI

const numberArray=[23,45,12,-8,-8,23,45,1,45,34,2];
const stringArray=['23','PIPPO','pluto','la CASA blu','Osvaldo','','porchetta'];
//1)mapping funcion che prende in input un arrai di numeri e restituisce un array con tutti i numeri diminuiti di uno
//2)mapping function che prende in input un array di numeri e restituisce un array con il valore assoluto dei numeri.+8 -8 |8|
//3)mapping function che prende in input un array di numeri e restituisce un array di stringhe con scritto 'pari' se pari e 'dispari'se dispari.

//4)mapping function che prende in input un array di stringhe e le restituisce tutte maiuscole
//5)mapping function che prende in input un array di stringhe e restituisce un array di numeri con le lunghezze delle stringhe
//6)mapping function che prende in input un array di stringhe e restituisce le stringhe in formato camelCase
