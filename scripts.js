let cart = [];
let cartCountElement = document.getElementById('cart-count');
let cartItemsElement = document.getElementById('cart-items');

function addToCart(productName, productPrice) {
    // Add product to cart array
    cart.push({ name: productName, price: productPrice });
    
    // Update cart count
    cartCountElement.innerText = cart.length;

    // Update cart items display
    updateCartDisplay();
}

function updateCartDisplay() {
    // Clear existing items
    cartItemsElement.innerHTML = '';

    // Add items to cart display
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
    });

    // Add total price
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    let totalElement = document.createElement('div');
    totalElement.innerHTML = `<strong>Total: $${totalPrice}</strong>`;
    cartItemsElement.appendChild(totalElement);
}
