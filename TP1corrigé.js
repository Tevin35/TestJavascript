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

