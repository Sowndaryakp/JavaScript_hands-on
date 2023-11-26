const prompt=require("prompt-sync")();
let amount = parseInt(prompt("enter the amount in rupees:"));
if (!isNaN(amount)) {
    const denominations = [1000, 500, 100, 50, 20, 10, 5, 1];
    let notesCount = 0;
    for (let i = 0; i < denominations.length; i++) {
        let currentDenomination = denominations[i];
        let currentNotes = Math.floor(amount / currentDenomination);
        
        notesCount += currentNotes;
        console.log("₹" + currentDenomination + " notes: " + currentNotes);
    }
    console.log("Total number of notes: " + notesCount);
} else {
    console.log("Invalid input. Please enter a valid number for the amount.");
}
