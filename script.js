
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