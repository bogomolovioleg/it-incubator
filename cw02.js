//We want to know the index of the vowels in a given word,
// for example, there are two vowels in the word super (the second and fourth letters).
function vowelIndices(word){
    let indexArr = [];
    let i = 1;
    for (let chart of word.toLowerCase()){
        if(chart == "a"||chart == "e" || chart == "i" || chart == "o" || chart == "u" || chart == "y"){
            indexArr.push(i);
            i++;
        } else i++;
    };
    return indexArr;  
};
console.log(vowelIndices("apple"));