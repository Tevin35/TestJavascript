let sentence = "Une phrase qui contient des lettres";

function isVowel(letter){
    //indexOf renvoie la position de letter depuis la chaîne de caractères, -1 si pas trouvé
    if(letter != undefined && "aeuioy".indexOf(letter) >=0){
        return true;
    }
    return false;
}
// boucler sur un tableau ou un string
// pour un objet utilisé for... in
for(let letter of sentence){
    console.log(letter + " => " + isVowel(letter.toLowerCase()));
}

console.log("Ma phrase fait " + sentence.length + " caractères");

let aSentence = sentence.split("");

aSentence.sort();

console.log(aSentence);
//////////////////////////////////////

let number = Math.random()*100;
console.log("Nombre aléatoire = " + number)

/*
* Permet d'enlever les chiffres après la virgule */
let number2 = Number.parseInt(number);
console.log("Nombre entier = " + number2)

///////////////////////////////////
/* 1er mai 2022 */
let workFiesta = new Date(2022, 4, 1);

console.log(workFiesta.getFullYear());
console.log(workFiesta.getDate());
console.log(workFiesta.getUTCDate());
// console.log(workFiesta.toLocaleDateString("")) //




