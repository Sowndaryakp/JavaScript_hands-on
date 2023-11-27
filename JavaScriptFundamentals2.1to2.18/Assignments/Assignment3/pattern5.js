const prompt=require('prompt-sync')();
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3 
// 2 2
// 1

for(let z=5;z>=1;z--){
    for(let i=1;i<=z;i++){
        process.stdout.write(z+" ");
    }
    console.log("");
}