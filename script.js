'use strict';

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

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
//can use getElementsByTageName to delete.
//cannot delete with querySelector node list
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//.insertAdjacentHTML - quick and most used. check bankist app
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'Cookie here. <button class="btn btn--close--cookie">Got it!</button>';
// cannot have message element at multiples places. 
// So the append moves the element as the last child. 
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));// this create two

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  message.remove();
  // older method by dom traversing
  // message.parentElement.removeChild(message); 
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes - src, class, alt, id

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful';

// Non- standard attribute
console.log(logo.designer); // prints undefined
console.log('desginer is ', logo.getAttribute('designer')); //prints designer is ash
logo.setAttribute('company', 'Bankist'); // creates a new attribute called company="Bankist"

console.log('logo.src is:', logo.src); // this is the absolute url 
console.log('logo.getAttribute is:', logo.getAttribute('src')); // this is the relative url 

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // prints http://127.0.0.1:8080/#
console.log(link.getAttribute('href')); // prints #


//Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes
