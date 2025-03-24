// definisco la funzione
function reverseWord(word){
    let result = " "
    for(let i=word.length -1; i>=0;i--)
        result += word[i]
    console.log(result)
    return

}

// corpo del programma
let word = prompt(`Inserisci una parola`)
reverseWord(word)
console.log()
