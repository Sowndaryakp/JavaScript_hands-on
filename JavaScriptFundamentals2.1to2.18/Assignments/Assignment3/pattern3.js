const prompt=require("prompt-sync")();
// *
// * *
// * * *
// * * * *
// * * * * *
let n = prompt("enter a number: ");
for(let j=1;j<=n;j++){
    for(let i=1;i<=j;i++){
        process.stdout.write("*")
    }
    console.log("");
}