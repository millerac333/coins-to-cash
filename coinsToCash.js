let piggyBank = {
    pennies: 333,
    nickels: 25,
    dimes: 10,
    quarters: 15 
};

console.log(piggyBank.pennies);


let dollarAmount = 0;

let totalInBank = () => {
    let dollarAmount = ((piggyBank.pennies * .01) + (piggyBank.nickels * .05) + (piggyBank.dimes * .10) + (piggyBank.quarters * .25));
    return dollarAmount.toFixed(2) 
}

console.log(`$${totalInBank()}`);

