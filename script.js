
const cookie = document.querySelector('.politics-cookies');

document.querySelectorAll('.carrosel').forEach(carrosel => {
  const container = carrosel.querySelector('.card-container');
  const nextBtn = carrosel.querySelector('.next');
  const prevBtn = carrosel.querySelector('.prev');
  
  const scrollAmount = 400; 

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  
  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
});

function cookieHidden() {
  cookie.style.display = 'none';
}

const cart = document.querySelector('.products-list'); 
const cartCount = document.getElementById('cart-count');

document.querySelectorAll('.btn-card button').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const productName = card.querySelector('.description-card h3').textContent;

    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
      <i class="fa-solid fa-image fa-3x" style="color: #B197FC;"></i>
      <p>${productName}</p>
      <i class="fa-solid fa-trash-can trash-btn"></i>
    `;
    const trashBtn = product.querySelector('.trash-btn');
    trashBtn.addEventListener('click', () => {
      product.remove();
      const products = cart.querySelectorAll('.product');
      cartCount.textContent = products.length;
    });

    cart.appendChild(product);

  const currentCount = parseInt(cartCount.textContent, 10) || 0;
  cartCount.textContent = currentCount + 1;

  });
});
