// Question 1 //
// copié collé de https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100 //
var arr = [];
while(arr.length < 99){
    var r = Math.floor(Math.random() * 99) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

//Question 2//
console.log("------------------------------");
// "une chaine avec des lettres dans un certain ordre pour donner du sens" //
// c/c de https://www.codegrepper.com/code-examples/javascript/sort+string+in+javascript+alphabetically //

const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join(' ');

// Example
console.log(sort('une chaine avec des lettres dans un certain ordre pour donner du sens'));

//Question 3//
console.log("------------------------");
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


