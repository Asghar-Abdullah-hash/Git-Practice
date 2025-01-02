// todo It will split the words of a string and returns an array of words */
function longestWord(str){
    let words =str.split(" ");
    console.log(words);
}
longestWord("This is an example");

// todo Find the total number of words in a given string */
function longestWord(str){
    let words =str.split(" ");
    return totalWords = words.length;    
}
console.log(longestWord("This is an example"));
console.log(longestWord("I woke up early in the morning"));


// todo Find the longest word in a given string */
function longestWord(str){
    let words =str.split(" ");
    let longestWord ="";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }       
    }
    return longestWord;
}
console.log(longestWord("This is an example"));
console.log(longestWord("I woke up early in the morning"));


