//Question 1//

let aNumber=[];
let count = 0;
do {
//tirer un numéro aléatoire entre 0 et 100//
    let number = Math.random() * 100;

//caster le nombre en entier
    number = Number.parseInt(number)

//l'enregistrer dans un tableau s'il n'est pas déjà dedans
    if (!aNumber.includes(number)) {
        aNumber.push(number)
    }
//compter le nombre de tentatives pour remplir le tableau
    count++

}while (aNumber.length < 100)

console.log("Tableau rempli en " + count + " tentatives")
console.log(aNumber)

//si tableau.length > 100 j'ARRÊTE

//mettre les chiffres dans l'ordre !
console.log("----------------------------")
console.log(aNumber.sort(mySort))

function mySort(a, b){
    return a - b
}

///////////////////////////////////////////////////////
//Question 2

console.log("----------------------")

let sentence="une chaine avec des lettres dans un certain ordre pour donner du sens";
let tab = sentence.split("")
console.log(tab.sort().join(""))

///////////////////////////////////////////////////////
//Question 3
//
console.log("----------------------")
let sentence2 = "une phrase sans majuscule";
let tab2 = sentence2.split(" ")
for(let i = 0; i < tab2.length;i++) {
    tab2[i] = tab2[i].charAt(0).toUpperCase() + tab2[i].slice(1)
}

console.log(tab2.join(" "))