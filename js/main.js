document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      const name = card.querySelector('h3').textContent;
      alert('Вы выбрали: ' + name + '. Приходите за свежим!');
    });
  });
});
