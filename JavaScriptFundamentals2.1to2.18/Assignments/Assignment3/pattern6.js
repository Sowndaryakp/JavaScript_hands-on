const prompt=require("prompt-sync")();
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
for(let z=1;z<=5;z++){
    for(let i=z;i>=1;i--){
        process.stdout.write(i+" ");
    }
    console.log("");
}