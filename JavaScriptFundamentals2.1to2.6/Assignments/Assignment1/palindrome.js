// 4. Write a JavaScript program that takes a string as input and checks if it is a palindrome
//  (a word or phrase that reads the same backward as forward).
let input=prompt("Enter a string: ");
let x=input.length;

if(goo(input)){
    alert("palindrome");
}
else{
    alert("not a palindrome");
}

function goo (input){
    for(let i=0;i<(x-1)/2;i++)
    {
        if(input[i]!=input[x-i-1]){
            return 0;
        }else{
            return 1;
        }
    }
}
