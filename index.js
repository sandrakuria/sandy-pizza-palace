function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    console.log(selectedSize);
    return parseInt(selectedSize);
}
function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value; 10
    console.log(selectedCrust)
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    console.log(selectedNumber)
    return parseInt(selectedNumber);
}
//       function toppings (){
//             var to
//   }
function mushrooms() {
    var black olives = 0;
    var addblackolives = document.getElementById("toppingone");
    if (addblackolives.checked === true) {
        blackolives = 200;
    }
    console.log(black olives)
    return parseInt(black olives);
}
function bacon() {
    var bacon = 0;
    var addbacon = document.getElementById("toppingone");
    if (addbacon.checked === true) {
        bacon = 150;
    }
    return parseInt(bacon);
}
function pineapple() {
    var pineapple = 0;
    var pineapple = document.getElementById("toppingone");
    if (addpinapple.checked === true) {
        pineapple = 180;
    }
    return parseInt(pineapple);
}
function peporroni() {
    var peporroni = 0;
    var addpepporroni = document.getElementById("toppingone");
    if (addpepporroni.checked === true) {
        peporroni= 160;
    }
    return parseInt(peporroni);
}
function extracheese() {
    var extracheese = 0;
    var extraCheese = document.getElementById("toppingone");
    if (extraCheese.checked === true) {
        cheese = 110;
    }
    return parseInt(extracheese);
}
function mushrooms() {
    var mushrooms = 0;
    var mushrooms = document.getElementById("toppingone");
    if (addmushrooms.checked === true) {
        mushrooms = 210;
    }
    return parseInt(mushrooms);
}
function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    console.log(totalPrice);
    alert("Your order of " + getNumber() + " your request has been processed.Your total amount payable is " + totalPrice + ".")
}
// Delivery form inputs and alerts
$(document).ready(function () {
    $("#delivery").submit(function () {
        // var name = $("input#name").val();
        var name = (prompt("Enter your name"));
        var contact = (prompt("Enter your contact"));
        var location = (prompt("Enter location"));
        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the Pizza Palace");
        $(this).get(0).reset();
        event.preventDefault();
    });
});