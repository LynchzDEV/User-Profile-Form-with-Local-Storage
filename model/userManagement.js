import { User } from './user.js';

let users = [];

function load(userList) {
  User.setRunningId(userList[0].id);

  userList.forEach((user) => {
    addUser(user.username, user.email, user.age);
  });
}

function addUser(username, email, age) {
  let newUser = new User(username, email, age);
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser.id;
}

function findIndexUser(findId) {
  return users.findIndex((user) => user.id === findId);
}

function removeUser(id) {
  const index = findIndexUser(id);
  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
}

function getUsers() {
  return users;
}

export { addUser, removeUser, getUsers, load };
