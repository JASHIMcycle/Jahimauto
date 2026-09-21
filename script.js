// Simple Cart System

let cart = [];

// Function to add product to cart
function addToCart(productName, price) {
  const product = { name: productName, price: price };
  cart.push(product);
  alert(productName + " কার্টে যোগ হয়েছে!");
  displayCart();
}

// Function to display cart items
function displayCart() {
  let cartSection = document.getElementById("cart");
  cartSection.innerHTML = "<h2>কার্ট</h2>";

  if (cart.length === 0) {
    cartSection.innerHTML += "<p>কার্ট খালি আছে</p>";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    cartSection.innerHTML += `<p>${item.name} - ৳${item.price}</p>`;
    total += item.price;
  });

  cartSection.innerHTML += `<h3>মোট: ৳${total}</h3>`;
}
