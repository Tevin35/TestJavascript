// Question 1 //
// copié collé de https://stackoverflow.com/questions/71188915/use-for-loop-to-iterate-from-0-to-100-and-print-the-sum-of-all-evens-and-the-sum //
/*let i;
let sumE = 0;
let sumO = 0;

for (i = 0; i <= 100; i++) {
    i % 2 === 0 ? (sumE += i) : (sumO += 1);
}

console.log(sumE, sumO);*/

//Nombre de tirages nécessaires : 2550//

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10]);

console.log(shuffle);

//Question 2//
// "une chaine avec des lettres dans un certain ordre pour donner du sens" //
// c/c de https://www.codegrepper.com/code-examples/javascript/sort+string+in+javascript+alphabetically //

const sort = str => str.split(' ').sort((a, b) => a.localeCompare(b)).join('');

// Example
console.log(sort('une chaine avec des lettres dans un certain ordre pour donner du sens'));

//Question 3//
// c/c de https://www.tutorialspoint.com/how-to-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript //
function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var majuscule = 0; majuscule < separateWord.length; majuscule++) {
        separateWord[majuscule] = separateWord[majuscule].charAt(0).toUpperCase() +
            separateWord[majuscule].substring(1);
    }
    return separateWord.join(' ');
}
console.log(capitalizeTheFirstLetterOfEachWord("une phrase sans majuscule"));


