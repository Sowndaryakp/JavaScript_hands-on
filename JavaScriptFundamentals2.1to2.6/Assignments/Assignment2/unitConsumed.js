const prompt = require("prompt-sync")();
let unitsConsumed = parseInt(prompt("enter the units consumed: "));
if(!isNaN(unitsConsumed)){
    const rate1 = 65, rate2=110, rate3 = 140;
    const minCharge=500;
    let totalBill = 0;
    if(unitsConsumed<=100){
        totalBill += minCharge + (unitsConsumed * rate1);
    }else if(unitsConsumed<=300){
        totalBill += minCharge + (100 * rate1)+(unitsConsumed-100)* rate2;
    }else{
        totalBill = minCharge + (100 * rate1)+ (200*rate2)+ (unitsConsumed-300)*rate3;
    }
    if(totalBill > 2000){
        totalBill+= 0.03 * totalBill;
    }
    console.log("units Consumed: " + unitsConsumed);
    console.log("total Bill: ₹" + totalBill.toFixed(2));
} else {
    console.log("invalid input. please enter a valid number.");
}