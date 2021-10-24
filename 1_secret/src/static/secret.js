const secret = document.querySelector('.secret');

if (secret) {
  const secretContent = secret.value;
  const hiddenContent = secretContent.replace(/[^\n\r]/g, '*');
  const button = document.querySelector('.button');

  secret.value = hiddenContent;
  secret.style.height = `${Math.min(secret.scrollHeight, 200) + 20}px`;

  button.addEventListener('click', (event) => {
    const target = event.target;

    switch (target.textContent) {
      case 'Показать секрет':
        secret.value = secretContent;
        target.textContent = 'Скрыть секрет';
        break;

      case 'Скрыть секрет':
        secret.value = hiddenContent;
        target.textContent = 'Показать секрет';
    }
  });
}
