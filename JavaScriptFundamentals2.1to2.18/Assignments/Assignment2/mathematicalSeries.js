const prompt=require("prompt-sync")();
let x = parseFloat(prompt("enter the value of x: "));
let N = parseInt(prompt("enter the number of terms (N):"));
if (!isNaN(x) && !isNaN(N) && N > 0) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += Math.pow(x, i) / i;
    }
    console.log(`sum of the series for x=${x} and N=${N}: ${sum.toFixed(4)}`);
} else {
    console.log("invalid input. Please enter valid numbers for x and N.");
}
