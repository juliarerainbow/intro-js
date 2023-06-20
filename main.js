// JS è un linguaggio di scripting
// è "dinamicamente tipato"
// è un "linguaggio prototipale", la programmazione ad oggetti ha un passaggio..
// dialetto di js "superset" typescript
// differenza tra linguaggi compilati e "interpretati" 
// i linguaggi compilati sono più performanti ma non riesce a funzionare su ogni macchina
// Java è diventato famoso perché funziona in ogni ambiente
// Javascript non viene compilato ma viene interpretato.

console.log('hello world!');

//=========================================== tipi in js
// per scrivere backtick alt+96 ``

// " "  ' ' ``
mystring="la mia stringa";      //-- tipo stringa

mynumber=2;                     // --tipo numero

mybool=false;                   //-- tipo bool

                                //-- tipo NaN       //rientra nei numeri ma è un numero che non è un numero

                                //-- tipo undefined //variabile non ancora definita
                                
                                //-- tipo null      //per forzare il valore vuoto
                                
//=========================================== "inscatolamento" => variabile

//  -- variabile con let

let pippo =5; //let può cambiare contenuto
console.log(typeof pippo);
pippo="viva il caffé!";
console.log(typeof pippo);
console.log(pippo);// avviene il dinamismo del tipo quindi manda la stringa a console

//  -- variabile con const

const PLUTO = 12; //const non può cambiare contenuto e viene compilato in tutti i posti quando viene letto ...velocizza il processo
console.log(PLUTO);

//  -- variabile con var ( guai a chi le usa! )

// la differenza tra var e let 
var paperino=true;
console.log(paperino);
paperino = -123;
console.log(paperino);
// topolino=5;
// let topolino; NON può essere inizializzato senza essere dichiarato

minnie=5;
var minnie; //hoisting cioè viene inizializzato prima dell'esecuzione
console.log(minnie);

//======================================= operazioni 

let qui =( 5 + 9 );
let qua =( 5 * 9 );
let quo =( 5 / 9 );
let paperone= 5 ** 3;
let basettoni= 6 % 2; //modulo: è il resto della divisione


console.log(qui);
console.log(qua);
console.log(quo);
console.log(paperone);
console.log(basettoni);


// standard camelcase se le variabili hanno più parole
let ilNumeroPiuPiccolo = -Infinity; //questo è il minimo valore che js può prendere
let ilNumeropiuGrande = Infinity; //questo è il massimo valore che js può prendere


// Math.smth è la libreria che si occupa dei numeri
const paperoga = Math.sqrt(16);
console.log(paperoga);
const rockerduck='pippo' / 3;
console.log(rockerduck); //NaN significa NON è un NUMERO


//========================================= BOOLEANS

const valoreTrue= true;
const valoreFalse=false;

console.log(valoreTrue);
console.log(valoreFalse);

//----------------------------------------- Operatori logici

//  ! ---------------------------  (NOT)

//!true => false
//!false => true
console.log(!valoreTrue);
console.log(!valoreFalse);

//  && ---------------------------  (AND)

//true && true = true
//true && false = false
//false && true = false
//false && false = false

console.log(valoreFalse && valoreTrue);
console.log(valoreTrue && valoreFalse);

//  || --------------------------- (OR)

// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log(valoreFalse || valoreTrue);
console.log(valoreTrue || valoreFalse);

console.log((valoreFalse||valoreTrue)&&valoreFalse); 

//========================================= STRINGS

// una stringa è considerata una serie di caratteri
const ORAZIO = 'Sono Javascript';
//per accedere al primo carattere della serie parto da zero
console.log(ORAZIO[0]);
console.log(ORAZIO[9]);
// le stringhe possono essere sommate tra di loro, questa operazione si chiama concatenazione

const CLARABELLA = 'perché sono malato di mente';
console.log(ORAZIO + ' ' + CLARABELLA)

const ALADIN = 27;
console.log(ORAZIO + 27); //cast implicito e trasforma il numero in stringa

//il rettangolo dell'intellisense è una proprietà
console.log(CLARABELLA.length); //<--- PROPRIETà

//il cubetto dell'intellisense significa metodo
console.log(CLARABELLA.toLowerCase()); //<--- METODO

//-------------undefined

// const macchiaNera;
// macchiaNera  = 5; //<--- La costante non può essere definita in seguito, non può essere inizializzata poi valorizzata
const macchiaNera=5; //<--- Così è come si definisce

let paperinik;
console.log(paperinik); //<--- undefined  variabile non definita
paperinik = 12;
console.log(paperinik);
paperinik=undefined; //<-- NO! valore solo per l'inizializzazione vuota
console.log(paperinik);
paperinik = null; //messo a null volontariamente
console.log(paperinik);

//livelli di importanza di best practices dati dal 1.programma 2.consigliati per metodologia su internet 3.azienda

//-------------- operatori di confronto

const nonnaPapera= 12;
const ciccio=24;
const joseCarioca='12';

//>(maggiore)
console.log(ciccio > nonnaPapera);

//>=(maggiore o uguale)
console.log(ciccio >= nonnaPapera);

//<(minore)
console.log(ciccio < nonnaPapera);

//<=(minore o uguale)
console.log(ciccio <= nonnaPapera);

//!==(diverso)
console.log(ciccio!==nonnaPapera);

//Un cast è un modo per informare esplicitamente il compilatore che si intende eseguire la conversione e che si è consapevoli che potrebbe verificarsi una perdita di dati o che il cast potrebbe non riuscire in fase di esecuzione. Per eseguire un cast, specificare il tipo a cui si sta eseguendo il cast tra parentesi davanti al valore o alla variabile da convertire.

//== (uguale con cast (avviene conversione))
console.log(nonnaPapera==joseCarioca);//<-- NO!
//== (strettamente uguales (non avviene conversione))
console.log(nonnaPapera===joseCarioca);

// ------- corto circuito degli operatori 

let biancaNeve='spaghetti';
let ariel='ciao';
let cenerentola = biancaNeve || ariel;

console.log(cenerentola);

//-------- alert e prompt
//chiama una finestra di dialogo
alert('Ciao a tutti');
const elsa = prompt('come ti chiami?');
console.log(elsa);



// ====================================== ciclo if else

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
const jasmine = prompt('dimmi un numero');

const isJasmineDivisibleBy3 = jasmine % 3 === 0;
const isJasmineDivisibleBy5 = jasmine % 5 === 0;

if(isJasmineDivisibleBy3 && isJasmineDivisibleBy5){
    alert('fizzbuzz');

}else if (isJasmineDivisibleBy3) {
    alert('fizz');
}else if ( isJasmineDivisibleBy5) {
    alert('buzz');
}else{
    alert('numero o pari o primo');
}


// if(isJasmineDivisibleBy3 && isJasmineDivisibleBy5){
//     alert('fizzbuzz');
// }
// if (isJasmineDivisibleBy3) {
//     alert('fizz');
// }
// if ( isJasmineDivisibleBy5) {
//     alert('buzz');
// }

//======================================= ciclo switch
const rapunzel=prompt('inserisci FIZZ,BUZZ o FIZZBUZZ')


switch (rapunzel) {
    case 'FIZZ':
        alert('vuoi un numero divisibile per 3');
        break;
    case 'BUZZ':
        alert('vuoi un numero divisibile per 5');
        break;
    case 'FIZZBUZZ':
        alert('vuoi un numero divisibile per 3 e per 5');
        break;
    default:
        alert('vuoi un numero o pari o primo')
        break;
}