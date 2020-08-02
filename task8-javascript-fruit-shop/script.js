let budget_amount = 0;
let left_budget = 0;
let apple_quantity = 0;
let banana_quantity = 0;
let mango_quantity = 0;
let total_amount = 0;
let apple_price = 200; //per kg
let banana_price = 100; //per dozen
let mango_price = 250; //per kg

function addBudget() {
    budget_amount = document.getElementById("budget").value;
    console.log(budget_amount);
    if (budget_amount == "") {
        alert("Enter your budget amount first, to proceed further!");
    }
    else {
        budget_amount =  parseInt(budget_amount);
        left_budget = document.getElementById("left-amount");
        left_budget.innerHTML = budget_amount;
    }
}

function addFruits(fruit_name) {
    if (fruit_name == "apples") {
        if (apple_price <= budget_amount) {
            document.getElementById("apple-quantity").innerHTML = ++apple_quantity;
            total_amount += apple_price;
            budget_amount -= apple_price;
        }
        else {
            alert("Opps!!! You do not have enough money to buy this fruit!")
        }
    }
    else if (fruit_name == "bananas") {
        if (banana_price <= budget_amount) {
            document.getElementById("banana-quantity").innerHTML = ++banana_quantity;
            total_amount += banana_price;
            budget_amount -= banana_price;
        }
        else {
            alert("Opps!!! You do not have enough money to buy this fruit!")
        }
    }
    else if (fruit_name == "mangoes") {
        if (mango_price <= budget_amount) {
            document.getElementById("mango-quantity").innerHTML = ++mango_quantity;
            total_amount += mango_price;
            budget_amount -= mango_price;

        }
        else {
            alert("Opps!!! You do not have enough money to buy this fruit!")
        }
    }
    document.getElementById("total-amount").innerHTML = total_amount;
    left_budget.innerHTML = budget_amount


}

function removeFruits(fruit_name) {
    if (fruit_name == "apples") {
        if (apple_quantity > 0) {
            document.getElementById("apple-quantity").innerHTML = --apple_quantity;
            total_amount -= apple_price
            budget_amount += apple_price;
        }
        else {
            alert("Number of this fruit is 0 now!!!");
        }
    }
    else if (fruit_name == "bananas") {
        if (banana_quantity > 0) {
            document.getElementById("banana-quantity").innerHTML = --banana_quantity;
            total_amount -= banana_price
            budget_amount += banana_price;
        }
        else {
            alert("Number of this fruit is 0 now!!!");
        }
    }
    else if (fruit_name == "mangoes") {
        if (mango_quantity > 0) {
            document.getElementById("mango-quantity").innerHTML = --mango_quantity;
            total_amount -= mango_price
            budget_amount += mango_price;
        }
        else {
            alert("Number of this fruit is 0 now!!!");
        }
    }
    document.getElementById("total-amount").innerHTML = total_amount;
    left_budget.innerHTML = budget_amount
}