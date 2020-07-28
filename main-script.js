let subtotal = document.getElementById('subtotal').innerText;
let subtotalNumber = parseFloat(subtotal);

function mainFunction(plusKeyId, minusKeyId, productQuantity, productPrice) {

    //button id
    const minusBtn = document.getElementById(minusKeyId);
    const plusBtn = document.getElementById(plusKeyId);

    //value parse
    let quantityString = document.getElementById(productQuantity).value;
    let quantityNumber = parseInt(quantityString);
    let priceString = document.getElementById(productPrice).innerText;
    let price = parseFloat(priceString);


    //minus button event handling
    minusBtn.addEventListener('click', function () {
        if (quantityNumber > 0) {
            quantityNumber = quantityNumber - 1;
            subtotalNumber = subtotalNumber - price;
            updateStatus(quantityNumber, subtotalNumber, productQuantity, productPrice);
        }
    });


    //plus button event handling
    plusBtn.addEventListener('click', function () {
        quantityNumber = quantityNumber + 1;
        subtotalNumber = subtotalNumber + price;
        updateStatus(quantityNumber, subtotalNumber, productQuantity, productPrice)
    });

    //calculation function
    function updateStatus(quantityNumber, subtotalNumber, productQuantity, productPrice) {
        let totalPrice = quantityNumber * price;
        let tax = 15 * subtotalNumber / 100;
        let total = subtotalNumber + tax;
        document.getElementById(productQuantity).value = quantityNumber;
        document.getElementById(productPrice).innerText = totalPrice;
        document.getElementById('subtotal').innerText = subtotalNumber;
        document.getElementById('tax').innerText = tax;
        document.getElementById('total').innerText = total;
    }
}

//calling method
mainFunction('addFirstProduct', 'removeFirstProduct', 'firstProductQuantity', 'firstProductPrice');
mainFunction('addSecondProduct', 'removeSecondProduct', 'secondsProductQuantity', 'secondProductPrice');



// checkout product
document.getElementById('checkout-product').addEventListener('click', function () {
    document.getElementById('cart-area').style.display = 'none';
    document.getElementById('order-confirm-area').style.display = 'block';
});