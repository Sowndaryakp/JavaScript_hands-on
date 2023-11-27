const prompt=require("prompt-sync")();
for (let i = 1; i <= 1000 - 2; i++) {
    let num1 = i;
    let num2 = i + 1;
    let num3 = i + 2;
    if (num2 * num2 === num1 * num3 + 1) {
        console.log(`${num1}, ${num2}, ${num3} - ${num2}^2 = ${num1 * num3 + 1}`);
    }
}
