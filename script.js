// definisco la funzione
function reverseWord (word){
    let parola = word.split(``).reverse().join(``)
    if(parola === word){
        console.log(`è ok`)
    }
    else{
        console.log(`mi sa di no`)
    }
    
    
    
}

// corpo del programma
let parola = prompt(`inserisci la tua parola:`)
reverseWord(parola)
