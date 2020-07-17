let budget_amount = 0;
let apple_quantity = 0;
let total_amount = 0;
let apple_price = 10;

function add() {
    if (total_amount <= budget_amount) {
        budget_amount = parseInt(document.getElementById("budget").value);
        document.getElementById("quantity").innerHTML = ++apple_quantity;
        total_amount = apple_price * apple_quantity;
        document.getElementById("total-amount").innerHTML = total_amount;
        budget_amount = budget_amount - apple_price;
    }
    else {
        alert("Total Amount is exceed from the from the Budget!!!")
    }

}

function subtract() {
    if (apple_quantity > 0) {
        budget_amount = parseInt(document.getElementById("budget").value);
        document.getElementById("quantity").innerHTML = --apple_quantity;
        total_amount = apple_price * apple_quantity;
        document.getElementById("total-amount").innerHTML = total_amount;
        budget_amount = budget_amount + apple_price;
    }
    else{
       alert("No of Items are 0 now!!!");
    }
}