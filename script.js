'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open modal for button clicks
btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
// Scrolling info when Learn More is clicked
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({
    behavior: 'smooth'
  })
})
////////////////////////////////////////////////
//Page Navigation with event delegation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault(); 
//     console.log('LINK');
//     const id = this.getAttribute('href');
//     console.log('id:' , id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'});
//   })
// })
// Event delegation - 
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener(
  'click', function (e) {
    console.log(e.target); // this is where the event actaully happened
    e.preventDefault(); 
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      console.log('LINK');
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({
        behavior : 'smooth'
      });
    }
  }
)