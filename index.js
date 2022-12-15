var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var tellmeBtn = document.querySelector('#tellme-btn');
var outputBox = document.querySelector('#output-box');

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((initial - current) / initial) * 100;
        showOutput(`Hey the loss is ${loss} and the percentage is ${lossPercentage}%`);
    }
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = ((current - initial) / initial) * 100;
        showOutput(`Hey the profit is ${profit} and the percentage is ${profitPercentage}%`);
    }
    else {
        showOutput("No pain ...... No gain ")
    }
}

function tellmeHandler(){
        var ip = Number(initialPrice.value);
        var qty = Number(stockQuantity.value);
        var curr = Number(currentPrice.value);
         calculateProfitAndLoss(ip, qty, curr);
}

tellmeBtn.addEventListener('click',tellmeHandler);


function showOutput(message) {
    outputBox.innerText = message;
}
