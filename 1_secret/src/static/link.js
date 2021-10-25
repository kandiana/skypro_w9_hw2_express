const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = form.elements[0];
  const copied = document.querySelector('.copied');

  window.navigator.clipboard.writeText(input.value);

  copied.classList.remove('hidden');

  setTimeout(() => {
    copied.classList.add('hidden');
  }, 1000);
});
