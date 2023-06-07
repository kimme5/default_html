const open = document.querySelector('.open');
const close = document.querySelector('.modal__closeBtn');
const modal = document.querySelector('.modal');

function init() {
  open.addEventListener('click', function () {
    modal.classList.remove('hidden');
  });
  close.addEventListener('click', function () {
    modal.classList.add('hidden');
  });
}

init();
