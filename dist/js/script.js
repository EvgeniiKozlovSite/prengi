const forma = document.querySelector('.modal'),
    overlay = document.querySelector('.modal__overlay'),
    btn = document.querySelectorAll('div.btn'),
    close = document.querySelector('.modal__close');

/* btn.addEventListener('click', () => {
    forma.classList.add('active');
}); */
overlay.addEventListener('click', () => {
    forma.classList.remove('active');
});
close.addEventListener('click', () => {
    forma.classList.remove('active');
});

btn.forEach(function(btn) {
    btn.addEventListener('click', () => {
        forma.classList.add('active');
    });
});



/* document.querySelectorAll(`div.btn`).forEach((div) => { // Находим все кнопки с классом pin-code
    div.addEventListener(`click`, (event) => { // для каждой кнопки создаем нажатие
      const divCurrentCell = document.querySelector(`div.modal:not(.active)`); // которое находит первый div с классом pin-status и без класса status-active
      if (divCurrentCell) { // если такой div существует
        divCurrentCell.classList.add(`active`); // даем ему класс status-active
        divCurrentCell.innerText = div.innerText; // и бонус от меня :)
      }
    });
  }); */