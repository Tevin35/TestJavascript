console.log("Hello JS")

/*
Déclaration d'une variable
 */

let aNumber = 12;

let result = multiply(aNumber);

//déclaration d'une fonction
// mot clé function
function multiply(number) {
    return number * 2;
}

console.log("Le double de " + aNumber + " est " + result);

// changement dynamique du type de la variable
aNumber = "toto";

console.log(aNumber)

/////////////////////////////////////////////////////////
var aGlobalVariable = "Bonjour global";

treatment();
function treatment() {

    if(true){

    let aLocalVariable = "Bonjour local";
    aVariableWithoutVar = "Bonjour super global";
    var aGlobalVariable = "Bonjour global";
    console.log("Local => " + aLocalVariable);
    console.log("Global => " + aGlobalVariable);

    }


}
console.log("---------------------------------------")

/*//console.log("Local =>" + aLocalVariable);
console.log("Global =>" + aGlobalVariable);
console.log("Local =>" + aVariableWithoutVar);*/

console.log("---------------------------------------")

let aUndefinedVariable;
console.log(aUndefinedVariable);
//utilisation du triple = qui teste le type de la variable
console.log(aUndefinedVariable == undefined);
console.log(aUndefinedVariable === null);

//type NaN

console.log(3 * "coucou");
