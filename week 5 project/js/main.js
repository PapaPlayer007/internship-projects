// JavaScript for managing orders and form submissions

// Placeholder for storing the order items
let orderItems = [];

// Function to add an item to the order
function addToOrder(itemName, itemPrice) {
    // Check if the item is already in the order
    const existingItem = orderItems.find(item => item.name === itemName);

    if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity += 1;
    } else {
        // If it doesn't exist, add it to the order
        orderItems.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }

    // Update the order summary display
    updateOrderSummary();
}

// Function to update the order summary
function updateOrderSummary() {
    const orderSummary = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    orderSummary.innerHTML = '';

    let totalPrice = 0;

    // Generate the order summary dynamically
    orderItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const orderItemElement = document.createElement('div');
        orderItemElement.className = 'order-item';
        orderItemElement.innerHTML = `
            <p>${item.name} x ${item.quantity} - ₹${itemTotal.toFixed(2)}</p>
        `;

        orderSummary.appendChild(orderItemElement);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to handle form submissions
function handleOrderFormSubmit(event) {
    event.preventDefault();

    if (orderItems.length === 0) {
        alert('Please add some items to your order before placing it.');
        return;
    }

    // Normally, here you would send the order data to a server
    alert('Order placed successfully!');

    // Clear the order
    orderItems = [];
    updateOrderSummary();

    // Reset the form
    event.target.reset();
}

// Event listener for form submission
document.getElementById('order-form').addEventListener('submit', handleOrderFormSubmit);

// Event listeners for menu items (This part assumes the buttons are in `menu.html`)
// Example of how to add the event listener in `menu.html` (not actual code):
// <button onclick="addToOrder('Chicken Biryani', 8.99)">Add to Order</button>
