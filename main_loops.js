// ====================================== CICLO IF-ELSE

// const mulan = prompt('dimmi un numero');
// if(mulan<50){
//     console.log('numero piccolo');
// }else{
//     console.log('numero grande')
// }

// console.log('fine del programma');

//----------------------------------------------------

// const mulan = prompt('dimmi un numero');
// if((mulan % 2) === 0){
//     alert('numero pari');
// }else{
//     alert('numero dispari');
// }

// console.log('fine del programma');

//----------------------------------------------------
// const jasmine = prompt('dimmi un numero');

// const isJasmineDivisibleBy3 = jasmine % 3 === 0;
// const isJasmineDivisibleBy5 = jasmine % 5 === 0;

// if(isJasmineDivisibleBy3 && isJasmineDivisibleBy5){
//     alert('fizzbuzz');

// }else if (isJasmineDivisibleBy3) {
//     alert('fizz');
// }else if ( isJasmineDivisibleBy5) {
//     alert('buzz');
// }else{
//     alert('numero o pari o primo');
// }
//----------------------------------------------------

// if(isJasmineDivisibleBy3 && isJasmineDivisibleBy5){
//     alert('fizzbuzz');
// }
// if (isJasmineDivisibleBy3) {
//     alert('fizz');
// }
// if ( isJasmineDivisibleBy5) {
//     alert('buzz');
// }

//======================================= CICLO SWITCH
// const rapunzel=prompt('inserisci FIZZ,BUZZ o FIZZBUZZ')


// switch (rapunzel) {
//     case 'FIZZ':
//         alert('vuoi un numero divisibile per 3');
//         break;
//     case 'BUZZ':
//         alert('vuoi un numero divisibile per 5');
//         break;
//     case 'FIZZBUZZ':
//         alert('vuoi un numero divisibile per 3 e per 5');
//         break;
//     default:
//         alert('vuoi un numero o pari o primo')
//         break;
// }



//======================================= CICLO WHILE

// finchè la condizione restituisce true, continua a ciclare
// let indice = 0;

// while (indice < 10) {
// console.log('sono un\' istruzione che deve essere ripetuta');
// indice++;
// }
// log di tutti i numeri pari minori di 100

//----------------------------------------------------
// let mioNum=0;
// while(mioNum < 100){
     
//     if((mioNum % 2) === 0){
//         console.log(mioNum);
//     }
//     mioNum++;
// }
//----------------------------------------------------
// while (true) {
//     const input = prompt('scrivi una frase o scrivi FINE per terminare');

//     if(input === 'FINE'){
//         break;
//     }else{
//         alert(`la lunghezza della frase inserita è di ${input.length} caratteri`);
//     }
// }

//======================================= CICLO DO-WHILE

// viene utilizzato per far si che venga eseguito almeno una volta
// let indice = 0;

// do {
//     console.log('sono un\' istruzione che deve essere ripetuta');
//     indice++;
// } while (indice < 10);

//======================================= CICLO FOR

// for (let index = 0; index < 10; index++) {
//     console.log('sono un\' istruzione che deve essere ripetuta'); 
// }

//----------------------------------------------------
// quando si usano gli indici conviene usare i cicli for 

// for (let index = 0; index < 100; index+=2) {
//     console.log(index);
// }
//----------------------------------------------------
// for (let index = 0; index < 100; index++) {
//     if (index<50){
//         console.log(index*2);
//     }else{
//         console.log(index/2);
//     }
// }
//----------------------------------------------------

// ciclo che scrive i numeri da 100 a 0

// for (let index = 100; index >= 0; index--) {
//     console.log(index);
    
// }
//----------------------------------------------------
// ciclo da 100 a 0 che se il numero pari scriva pari se è dispari che scriva dispari

// for (let i = 100; i >= 0; i--) {

//     if((i % 2) === 0 )
//     {
//         console.log('pari');
//     }else{
//         console.log('dispari');
//     }    
// }

//----------------------------------------------------
// let paperone=prompt('scrivi una frase');

// for (let i = 0; i < paperone.length; i++) { 
//     console.log(paperone[i]);
// }
//----------------------------------------------------
// let char ="#";
// for (let i = 0; i <= 7; i++) {
//     console.log(char);
//     char=char+"#";  
// }

//----------------------------------------------------
// let startingString2 = '#';

// while(startingString2.length<8){
//     console.log(startingString2);
//     startingString2=startingString2+'#';

// }

//----------------------------------------------------
// for (let i = 1; i < 101; i++) {
//     if(i%3===0||i%5===0){
//         console.log('fizzbuzz');
//     }else if (i %3===0){
//         console.log('fizz');
//     }else if(i %5===0){
//         console.log('buzz');
//     }else{
//         console.log(i);
//     }
// }

//----------------------------------------------------
// for (let i = 0; i <= 7; i++) {
//     if(i % 2 === 0 ){
//         console.log("# # # # # # # # ");
//     }else{
//         console.log(" # # # # # # # #");
//     }
 
// }

//======================================= CICLI NESTATI

// for(let i = 0; i < 10 ; i++){

//     for(let j = 0 ; j < 10 ; j++){

//         console.log('riga: ' + i +',colonna:' + j);
//     }
// }


//----------------------------------------------------
// const mysize = prompt('crea la tua scacchiera, inserisci un numero');
// let mystring='';

// for(let i = 0; i < mysize ; i++){


//     for(let j = 0 ; j < mysize ; j++){

//         if(i % 2 === 0 && j % 2 === 0 || i % 2 != 0 && j % 2 != 0 ){
//             mystring+='   ';
//         }else if(i % 2 === 0 && j % 2 != 0 || i % 2 != 0 &&  j % 2 === 0 ){
//             mystring+='❤️';
//         }
//     }
//     mystring+='\n';

// }
// console.log(mystring);


//----------------------------------------------------








// const mysize = prompt('crea la tua scacchiera, inserisci un numero');
// let mystring='';

// for(let i = 0; i < mysize ; i++){
//     for(let j = 0 ; j < mysize ; j++){
//         if(i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0 ){
//             mystring+='   ';
//         }else{
//             mystring+='❤️';
//         }
//     }
//     mystring+='\n';
// }
// console.log(mystring);





const mysize = prompt('crea la tua scacchiera, inserisci un numero');
let mystring='';

for(let i = 0; i < mysize ; i++){
    for(let j = 0 ; j < mysize ; j++){

        // visto che un numero pari meno un numero pari da come risultato un numero pari e un numero dispari meno un numero dispari da come risultato un numero dispari, questa è una possibile soluzione 
        if(( i - j ) % 2 === 0){
            mystring+='  ';
        }else{
            mystring+='❤️';
        }
    }
    mystring+='\n';
}
console.log(mystring);





// let chessboard='';
// let size=5;

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if (i%2===0){
//             if (j%2===0) {
//                 chessboard=chessboard+ ' ';
//             } else {
//                 chessboard=chessboard+ "#";
//             }
//         }else{
//             if (j%2===0) {
//                 chessboard=chessboard+ "#";
//             } else {
//                 chessboard=chessboard+ " ";
//             }
//         }
//     }
//     chessboard+='\n';
// }
// console.log(chessboard);



i