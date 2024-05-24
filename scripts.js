let cart = [];

        function addToCart(product, price) {
            cart.push({ product, price });
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.product} - $${item.price}`;
                cartItems.appendChild(li);
            });
        }

        function showReceipt() {
            const name = document.getElementById('customer-name').value;
            const address = document.getElementById('customer-address').value;
            const contact = document.getElementById('customer-contact').value;
            const delivery = document.getElementById('delivery-method').value;
            const payment = document.getElementById('payment-method').value;

            const receipt = document.getElementById('receipt');
            receipt.innerHTML = '<h3>Customer Information</h3>';
            receipt.innerHTML += `<p>Name: ${name}</p>`;
            receipt.innerHTML += `<p>Address: ${address}</p>`;
            receipt.innerHTML += `<p>Contact Number: ${contact}</p>`;
            receipt.innerHTML += `<p>Delivery Method: ${delivery}</p>`;
            receipt.innerHTML += `<p>Payment Method: ${payment}</p>`;
            receipt.innerHTML += '<h3>Order Summary</h3>';

            let total = 0;
            cart.forEach(item => {
                const p = document.createElement('p');
                p.textContent = `${item.product}: $${item.price}`;
                receipt.appendChild(p);
                total += item.price;
            });
            const totalP = document.createElement('p');
            totalP.innerHTML = `<strong>Total: $${total}</strong>`;
            receipt.appendChild(totalP);

            document.getElementById('receipt-popup').style.display = 'flex';
        }

        function closeReceipt() {
            document.getElementById('receipt-popup').style.display = 'none';
        }
