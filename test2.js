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

// Q2 Write a JavaScript function that generates all combinations of a string by the parameter
function comb(string)
{
  var arr = [];
  for (var x = 0, y=1; x < string.length; x++,y++) // definition condition increment
  {
    arr[x]=string.substring(x, y);
  }
  console.log(arr)

  var combinations = [];
  var temp= "";
  var len = Math.pow(2, arr.length);
  console.log(len)

    for(var i = 0; i < len ; i++)
    {
    temp= "";
        for (var j=0; j<arr.length;j++) {
            if ((i & Math.pow(2,j))){ 
            temp += arr[j];
            console.log(i)
            console.log(Math.pow(2,j))
            }
        }
         if (temp !== "")
        {
        combinations.push(temp);
        }
    }
  console.log(combinations.join("\n"));
}
console.log(comb("Dog"))

// Q1 Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1,num2){
    while(num1 != num2){
        if (num1 > num2)
        {
            num1 = num1 - num2;
        }
        else
        {
            num2 = num2 - num1;
        }
    }
    var gcd = num1;
    return gcd
}
 console.log(gcd(21,14))
