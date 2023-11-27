const prompt=require("prompt-sync")();
let numberOfLines = parseInt(prompt("enter the number of lines for the pyramid:"));
if (!isNaN(numberOfLines)) {
    for (let i = 1; i <= numberOfLines; i++) {
        let line = "";
        for (let j = 0; j < numberOfLines - i; j++) {
            line += "  ";
        }
        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }
        for (let j = i - 1; j > 0; j--) {
            line += j + " ";
        }
        console.log(line);
    }
} else {
    console.log("invalid input. please enter a valid number.");
}
