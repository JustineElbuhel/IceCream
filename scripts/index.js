"use strict"

window.onload = init;

//When the window loads it is listening for click events on the radio and total calculation button
function init() {
    let cupToppingsDiv = document.getElementById("cone");
    cupToppingsDiv.onclick = onHideOrShowCupToppings;

    let calculateTotal = document.getElementById("calculateTotalBtn");
    calculateTotal.onclick = onCalculateTotal;
}


function onHideOrShowCupToppings() {
    let coneRadio = document.getElementById("cone");
    let cupTopping = document.getElementById("cupToppingsDiv");

    if(coneRadio.checked) {
        cupTopping.style.display = "none";
    }
    else {
        cupTopping.style.display = "block";
    }
}


function onCalculateTotal() {
    //Extract number of scoops
    let numberOfScoops = document.getElementById("numberOfScoops").value;

    //Scoop cost calculation
    const scoopCost = 2.25;
    let costPerExtraScoop = 1.25 * (numberOfScoops - 1);
    let scoopsTotalCost = scoopCost + costPerExtraScoop;
    

    //TODO Cup toppings calculation
    let toppingsTotal;

    //sprinkles costs .50
    let sprinklesCost = 0;
    let sprinkles = document.getElementById("sprinkles").checked;
    if(sprinkles) {
        sprinklesCost = .50
    }


    //fudge costs 1.25
    let fudgeCost = 0;
    let fudge = document.getElementById("fudge").checked;
    if(fudge) {
        fudgeCost = 1.25
    }

    //whipped cream costs .25
    let whippedCreamCost = 0;
    let whippedCream = document.getElementById("whippedCream").checked;
    if(whippedCream) {
        whippedCreamCost = .25
    }

    //cherry costs .25
    let cherryCost = 0;
    let cherry = document.getElementById("cherry").checked;
    if(cherry) {
        cherryCost = .25
    }
    
    //Calculate toppings combined
    toppingsTotal = sprinklesCost + fudgeCost + whippedCreamCost + cherryCost;


    const overallTotalBeforeTax = scoopsTotalCost + toppingsTotal;
    const taxRate = .0863;
    let taxTotal = taxRate *overallTotalBeforeTax;
    const completeTotal = overallTotalBeforeTax + (taxTotal);

    //TODO Replace html to new variables
    let replacedTotalBeforeTax = document.getElementById("baseCost").innerHTML.replace("xx.xx", overallTotalBeforeTax.toFixed(2));
    let replacedTax = document.getElementById("taxCost").innerHTML.replace("xx.xx", taxTotal.toFixed(2));
    let replacedTotal = document.getElementById("totalCost").innerHTML.replace("xx.xx", completeTotal.toFixed(2));

    //TODO Display ice cream receipt
    document.getElementById("baseCost").innerHTML = replacedTotalBeforeTax;
    document.getElementById("taxCost").innerHTML = replacedTax;
    document.getElementById("totalCost").innerHTML = replacedTotal;

}