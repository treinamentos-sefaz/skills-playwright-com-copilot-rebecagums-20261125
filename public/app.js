const form = document.getElementById('newsletter-form');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = 'Inscrição confirmada!';
});
