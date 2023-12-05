import {
  showUser,
  removeUserDiv,
  invalidMessage,
} from '../uiHandler/uiHandler.js';
import {
  addUser,
  removeUser,
  load,
  getUsers,
} from '../model/userManagement.js';
import { usernameValidator, emailValidator } from '../validator/validator.js';

export function addUserHandler() {
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const ageField = document.getElementById('age');
  const name = nameField.value;
  const email = emailField.value;
  const age = ageField.value;

  if (!validation(name, email) || (!name && !email && !age)) {
    return;
  } else {
    const userId = addUser(name, email, age);
    showUser(userId, name, email, age);

    const userDiv = document.getElementById(userId);
    const removeBtn = userDiv.querySelector('button');

    if (removeBtn) {
      removeBtn.addEventListener('click', (event) => {
        removeUserHandler(event);
      });
    }
  }
}

function removeUserHandler(event) {
  const userid = parseInt(event.target.parentElement.id);
  removeUserDiv(userid);
  removeUser(userid);
}

function validation(name, email) {
  if (!usernameValidator(name)) {
    invalidMessage(
      'Username is invalid, make sure your username contain uppercase character, number, without special character and atleast 5 characters long'
    );
    return false;
  } else if (!emailValidator(email)) {
    invalidMessage('Email is invalid, make sure you type properly email');
    return false;
  } else {
    invalidMessage('Added successfully!');
    return true;
  }
}

export function loadHandler() {
  const storageUsers = localStorage.getItem('users');
  let users = [];

  if (storageUsers) {
    users = JSON.parse(storageUsers);
  }

  if (Array.isArray(users) && users.length > 0) {
    load(users);
  }

  const currentUses = getUsers();
  currentUses.forEach((user) => {
    showUser(user.id, user.username, user.email, user.age);

    const userDiv = document.getElementById(user.id); // Fix: Changed 'userId' to 'user.id'
    const removeBtn = userDiv.querySelector('button');

    if (removeBtn) {
      removeBtn.addEventListener('click', (event) => {
        removeUserHandler(event);
      });
    }
  });
}
