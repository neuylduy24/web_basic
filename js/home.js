function addToCart(productName, productPrice) {
  // Check if there is an existing cart in localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === productName);
  if (existingProduct) {
    // If the product exists, increment its quantity
    existingProduct.quantity++;
  } else {
    // If the product doesn't exist, add it to the cart
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }
  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
  // Redirect to the cart page
  // window.location.href = 'cart.html';
}
let slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slide");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }