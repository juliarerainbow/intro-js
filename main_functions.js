//========================================= FUNZIONI

function square(specialNumber){
    const result = specialNumber*specialNumber;
    return result;
}
const pippo= square(16);
console.log(pippo);

//----------------------------------------------------

function logUppercase(stringToLog){
    const uppercaseString = stringToLog.toUpperCase();
    console.log(uppercaseString);
}
logUppercase('viva');

//----------------------------------------------------

function gentleAlert(){
    alert('Caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare');
}
gentleAlert();

//----------------------------------------------------

function logMultipleTimes(mystring, times){
    for (let i = 0; i < times; i++) {
        console.log(mystring);
    }    
}
logMultipleTimes('ciao',100);

//----------------------------------------------------

function isEven(number){
    if(number % 2 ===0 ){
        return true;
    }else{
        return false
    }
}
console.log(isEven(15));

//----------------------------------------------------

function pow(base,exponent){
    const result = base ** exponent;
    return result;
}
console.log(pow(2,10));

//----------------------------------------------------

function lastCharUppercase(selectedString){
    const char = selectedString[selectedString.length-1];
    return char.toUpperCase();
}

console.log(lastCharUppercase('clarabella'));

//========================================= SINTASSI ALTERNATIVE

function square2(number){
    return number*number;
}
console.log(square2(3));
//---------------------------------------------------- anonymous function
// funzione anonima associata ad una variabile

const square3=function(number){
    return number*number;
}
console.log(square3(10));
//---------------------------------------------------- lambda/arrow function
// viene usato per le funzioni di alto ordine

const square4= (number) => { return number * number; }
const square5= (number) => number * number; 
const square6= number => number * number; //se prende solo un parametro
console.log(square3(4));

//---------------------------------------------------- 

const pow1 = (base, exponent) => base ** exponent;
console.log(pow(4,3));

//---------------------------------------------------- PARAMETRI

function logParameters(parameter1,parameter2){
    console.log('parametro1 '+ parameter1, 'parametro2 '+ parameter2);
}

logParameters('pippo',5);
logParameters(5);
logParameters(); 
//---------------------------------------------------- 

function pow2(base,exponent){
    if(exponent !== undefined){
        return base**exponent;
    }else{
        return base**2;
    }

}
console.log(pow2(4,7));
console.log(pow2(4));
console.log(pow2("",4)); //0
console.log(pow2()); //NaN
//---------------------------------------------------- 

function pow3(base,exponent){
    if(base === undefined){
        return "cosa stai facendo?";
    }
    //il return fa uscire fuori dal ciclo
    if(exponent !== undefined){
        return base**exponent;
    }else{
        return base**2;
    }

}
console.log(pow3(4,7));
console.log(pow3(4));
console.log(pow3("",4)); 
console.log(pow3()); 

//---------------------------------------------------- VALORI DI DEFAULT
function pow4(base,exponent=2){
    return base ** exponent;
}
console.log(pow4(5, 3));
console.log(pow4(5));
//---------------------------------------------------- 

const myNewString ='25';
console.log(myNewString * 2);

const myNumber= parseInt(myNewString);//parseInt prende più parametri ...ad esempio radice(binario/esadecimali)
console.log( myNewString , typeof myNewString, myNumber, typeof myNumber);


//---------------------------------------------------- OPERATORE TERNARIO
function min(firstNumber,secondNumber){
    // const mimum = firstNumber > secondNumber ? secondNumber : firstNumber;
    // return minimum; 
    return firstNumber > secondNumber ? secondNumber : firstNumber;
    }
    console.log(min(10,1));

//---------------------------------------------------- 
























//1)
//funzione 'pow' 
//che non faccia uso dell'operatore '**'
//nè della libreria Math

function pow6(base, exponent){
    let accum = 1;
    for (let i = 0; i < exponent; i++) {
        accum *= base;
    }
    return accum;
}
console.log("---------------------",pow6(5,4));
//2) 
// definire una funzione 'correctCase' che 
// prende in input una stringa e la restituisce
// trasformando la prima lettera in maiuscola
// es. 'la casa blu' => 'La casa blu'

function correctCase(string){

    let changeChar=string[0].toUpperCase();
    let newString= string.replace(string[0],changeChar)
    return newString;
}
console.log(correctCase('la casa blu'))
//3)
//definire una funzione 'min' che dati due numeri
// restituisca il minore



//---------------------------------------------------- 
function minValue(value1,value2){
    if( value1 < value2 ){
        return value1;
    }else{
        return value2;
    }
}

console.log(minValue(10,1));
//4)
//definire una funzione 'clamp' che prende come parametri 
//tre numeri : valore, massimo e minimo.
//se valore è minore di minimo, restituisce minimo
//se valore è maggiore di massimo, restituisce massimo
//altrimenti restituisce valore,
//es. v=12, min=20, max= 100 => 20

function clamp(value,min,max){

    //if(min>=max){
    //     return 'max number must be greater than min'
    // }
    if(value<min){
        return min;
    }
    if (value>max){
        return max;
    }
    return value;
}

//5)
// definire una funzione 'chessboard' che prevede come parametro 'size' e stampa la schacchiera

function chessboard(value){
let chess='';
for (let i = 0; i < value; i++) {
    for (let j = 0; j < value; j++) {
        if(( i - j ) % 2 === 0){
            chess+='  ';
        }else{
            chess+='❤️';
        }
    }
    chess+='\n';
}
return chess;
}

console.log(chessboard(10));

//6) 
// definire una funzione 'ellipse' che prende come parametro una stringa 
// se la stringa è minore di 20 caratteri la ritorna non modificata
// altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

function ellipse(string,size = 20){
    if(string.length > size){
        return string.substring(0, size) + '...';
    }    
    return string;
}

console.log(ellipse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',3));

//7)
//definire una funzione 'reverseString' che data una stringa la restituisca al contrario. 

function reverseString(string){
    let mystring=string.split("");
    mystring.reverse();
    return mystring.join("")
}

console.log(reverseString('pippo'));
function reverseString1(string){
     let newString = ''; //<---- accumulatore
   
     for (let i = (string.length - 1); i >= 0; i--) {
        const char = string[i];
        //newString = newString + char; //<---- accumulatore
        newString += char; //<---- accumulatore
        return char;
    }
}
console.log(reverseString1('pippo'));
