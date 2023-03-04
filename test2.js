// Q4 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(string){
    var split = string.split(" ")
    var longest = 0;
    var longestWord =  null;

    split.map(val => {
        if (longest < val.length) {
            longest = val.length;
            longestWord = val;
        }
        
    })
    return longestWord
}
console.log(longestWord("My name is Didum Senila Fernando"))

// Q3 Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabetSort(string){
    var word = string.split("").sort().join("")
    return word
}
console.log(alphabetSort("hello"))
