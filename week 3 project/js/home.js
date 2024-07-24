// Function to add a product to the cart
function addToCart(productName, price) {
    // Create a new list item element
    var listItem = document.createElement("li");
    
    // Set the text content of the list item to the product name and price
    listItem.textContent = productName + " - $" + price.toFixed(2);
    
    // Append the list item to the cart items list
    document.getElementById("cartItems").appendChild(listItem);
    
    // Update the total price
    updateTotal(price);
}

// Function to update the total price
function updateTotal(price) {
    // Get the current total price
    var currentTotal = parseFloat(document.getElementById("cartTotal").textContent);
    
    // Add the price of the newly added product to the total
    var newTotal = currentTotal + price;
    
    // Update the total price display
    document.getElementById("cartTotal").textContent = newTotal.toFixed(2);
}

function checkout() {
    window.location.href = "html/payment.html";
}

function prodPage() {
    window.location.href = "html/products.html";
}
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    });
});


document.getElementById("userStatus").textContent = "Welcome, user!";