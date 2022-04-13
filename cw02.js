//We want to know the index of the vowels in a given word,
// for example, there are two vowels in the word super (the second and fourth letters).
function vowelIndices(word){
    let indexArr = [];
    let i = 1;
    for (let chart of word.toLowerCase()){
        if( chart == 'a' || 'e' || 'i' || 'o' || 'u' || 'y'){
            indexArr.push(i++);
        };
        i++;
    };
    return indexArr;  

}