//your code here
// Get references to HTML elements
const cartItemsList = document.getElementById("cart-items");
const clearCartButton = document.getElementById("clear-cart");

// Load items from Local Storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadCartItems();
});

// Function to load cart items from Local Storage
function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Clear the cart items list
    cartItemsList.innerHTML = "";

    // Display each item in the cart
    cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;