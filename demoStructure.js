let sentence = "Une phrase qui contient des lettres";

function isVowel(letter){
    if(letter != undefined && "aeuioy".indexOf(letter) >=0){
        return true;
    }
    return false;
}

for(let letter of sentence){
    console.log(letter + " => " + isVowel(letter.toLowerCase()));
}