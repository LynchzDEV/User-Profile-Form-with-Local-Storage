import { addUserHandler, loadHandler } from './eventHandler/eventHandler.js';

const userForm = document.getElementById('profileForm');
const submitBtn = userForm.querySelector('#profileForm button');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addUserHandler();
});

window.addEventListener('load', (event) => {
  event.preventDefault();
  localStorage.clear;
  loadHandler();
});
