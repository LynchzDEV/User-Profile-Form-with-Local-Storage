function showUser(id, username, email, age) {
  const listDiv = document.querySelector('.user-list');
  const userDiv = document.createElement('div');
  const userId = document.createElement('p');
  const userName = document.createElement('p');
  const userEmail = document.createElement('p');
  const userAge = document.createElement('p');
  const removeBtn = document.createElement('button');

  userDiv.classList.add('userInfo');
  userDiv.id = id;
  userId.textContent = 'ID: ' + id;
  userName.textContent = 'Name: ' + username;
  userEmail.textContent = 'Email: ' + email;
  userAge.textContent = 'Age: ' + age + ' years old';
  removeBtn.textContent = 'remove';

  userDiv.appendChild(userId);
  userDiv.appendChild(userName);
  userDiv.appendChild(userEmail);
  userDiv.appendChild(userAge);
  userDiv.appendChild(removeBtn);

  listDiv.appendChild(userDiv);
}

function removeUserDiv(id) {
  const removeDiv = document.getElementById(id);
  if (removeDiv) {
    removeDiv.remove();
  }
}

function invalidMessage(errMsg) {
  const form = document.querySelector('#profileForm');
  let msgDiv = form.querySelector('.error-message');

  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.classList.add('error-message');
    form.appendChild(msgDiv);
  }
  msgDiv.innerHTML = '<br>' + errMsg;
  msgDiv.style.color = 'red';

  const btn = form.querySelector('button');
  form.insertBefore(msgDiv, btn.nextSibling);
}

export { showUser, removeUserDiv, invalidMessage };
