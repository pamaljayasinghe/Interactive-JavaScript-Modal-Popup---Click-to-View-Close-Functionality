'use strict';
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelectorAll('.close-modal');

for (let i = 0; i < modal.length; i++) {
  openBtn[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  closeBtn[i].addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });

  document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (!modal[i].classList.contains('hidden') && e.key === 'Escape') {
      modal[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}
