const usernameValidator = (username) => {
  if (!username && username.length < 5) {
    return false;
  }
  const validationRegex = /[A-Z]/;
  const exclusionRegex = /[$@#%^&*()_+!]|[0-9]/;
  return validationRegex.test(username) && !exclusionRegex.test(username);
};

const emailValidator = (email) => {
  if (!email) {
    return false;
  }
  const validationRegex = /@.*\.com$/;
  return validationRegex.test(email);
};

export { usernameValidator, emailValidator };
