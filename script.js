// // definisco la funzione
// function reverseWord (word){
//     let parola = word.split(``).reverse().join(``)
//     if(parola === word){
//         console.log(`la parola è palindroma`)
//     }
//     else{
//         console.log(`la parola non è palindroma`)
//     }

// }


// // corpo del programma
// let parola = prompt(`inserisci la tua parola:`)
// reverseWord(parola)







// variabile che contiene il numero del pc
let numPc;
// variabile che contiene somma del numeroUtente e numeroComputer
let risultatoSommoNum
// Funzione per generare un numero casuale tra 1 e 5
function generoRandom (){
    return Math.floor(Math.random() * 5)+ 1;
};
// Funzione per stabilire se un numero è pari o dispari
function sommoNum (numeroUtente, numeroPc){
    let risultato;
    risultato = parseInt(numUser) + numeroPc;
    if(risultato % 2 == 0){
        console.log(`il risultato è pari`)
    }
    else{
        console.log(`il risultato è dispari`)
        
    }  
}
/////// Corpo del programma
let pariDispari = prompt(`scegli se pari o dispari`);
let numUser =prompt(`scegli il tuo numero`);
// chiamo la funzione per far generare numeri al pc 
numPc = generoRandom();
console.log(`questo è il ${numPc}`)
// chiamo la funzione per sommare numeroUtente col numeroComputer 
risultatoSommoNum = sommoNum (numUser, numPc);
console.log(`xxxxxxxdai ${risultatoSommoNum}`)


// Sommiamo i due numeri


// Stabiliamo se la somma è pari o dispari

// Dichiariamo chi ha vinto
