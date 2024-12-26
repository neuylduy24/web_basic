document.addEventListener('DOMContentLoaded', function() {
  // Get cart items from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Select the cart-items list, total price element, and checkout button
  const cartItemsList = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutButton = document.getElementById('checkout-btn');
  // Initialize total price
  let totalPrice = 0;
  // Check if cart is empty
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    // Loop through cart items and display them
    cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`;
      // Add a button to remove the item from cart
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => removeItemFromCart(index));

      listItem.appendChild(removeButton);
      cartItemsList.appendChild(listItem);
      // Calculate total price
      totalPrice += item.price * item.quantity;
    });
  }
  // Display total price
  totalPriceElement.textContent = totalPrice;
  // Checkout event listener
  checkoutButton.addEventListener('click', () => {
    // Perform checkout logic (you can replace this with your own checkout process)
    if(cart.length === 0){
      alert('There are no products to checkout!');
    }else{
      alert('Payment success!');
      // Clear cart after checkout
      clearCart();
      window.location.href = "feedback.html";
    }
  });
});
// Function to remove item from cart
function removeItemFromCart(index) {
  // Get cart items from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Remove the item at the specified index
  cart.splice(index, 1);
  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  // Reload the page to reflect the changes
  location.reload();
}
// Function to clear cart after checkout
function clearCart() {
  // Clear localStorage cart
  localStorage.removeItem('cart');
  // Redirect to the cart page (optional)
  location.href = 'cart.html';
}
document.addEventListener('DOMContentLoaded', function() {
  updateCartDisplay();
});
function updateCartDisplay() {
  let cartItemsList = document.getElementById('cart-items');
  let totalPriceElement = document.getElementById('total-price');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItemsList.innerHTML = '';
  let totalPrice = 0;
  cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - Price: $${item.price}`;
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.value = item.quantity;
      quantityInput.min = '1';
      quantityInput.addEventListener('change', (event) => {
          updateQuantity(index, event.target.value);
      });
      listItem.appendChild(quantityInput);

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => removeItemFromCart(index));
      listItem.appendChild(removeButton);
      cartItemsList.appendChild(listItem);
      totalPrice += item.price * item.quantity;
  });
  totalPriceElement.textContent = totalPrice;
}
function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}


