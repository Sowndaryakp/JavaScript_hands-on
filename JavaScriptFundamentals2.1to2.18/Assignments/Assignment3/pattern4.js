const prompt=require('prompt-sync')();
// 1 1 1 1 1
// 2 2 2 2
// 3 3 3
// 4 4
// 5
for(let z=1;z<=5;z++){
    for(let i=1;i<=6-z;i++){
        process.stdout.write(z+" ");
    }
    console.log("");
}