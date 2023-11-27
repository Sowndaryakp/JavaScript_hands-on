const prompt=require("prompt-sync")();
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for(let z=1;z<=5;z++){
    for(let i=1;i<=z;i++){
        process.stdout.write(i+" ")
    }
    console.log("");
}
