let cart = [];
let totalPrice = 0; 
function addToCart(productName, productPrice) {
    cart.push({name:productName, price:productPrice});
    totalPrice += productPrice;
    const cartItems = document.getElementById('cartItems');
    const totPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    totPrice.textContent = `TOTAL: ₹${totalPrice}`;
}

document.getElementById('contBtn').addEventListener('click', () => {
    const num = '+917483286254';
    location.href = `tel:${num}`;
});

function buy() {
    window.location.href = 'payment.html';
}

function bev() {
    window.location.href = 'bevarages.html';
}