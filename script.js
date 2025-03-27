// definisco la funzione
function reverseWord (word){
    let parola = word.split(``).reverse().join(``)
    if(parola === word){
        console.log(`la parola è palindroma`)
    }
    else{
        console.log(`la parola non è palindroma`)
    }

}

// corpo del programma
let parola = prompt(`inserisci la tua parola:`)
reverseWord(parola)
