### Overview
This project is a web application that allows users to create and store user profiles using local storage. It's built with HTML, CSS, and JavaScript, and it demonstrates how to handle user input, validate data, and manage user data in the browser's local storage.

### Key Components
1. **HTML Structure (`index.html`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/index.html)
   - Defines the structure of the user profile form.
   - Includes input fields for name, email, and age.
   - Contains a section to display the list of saved user profiles.

2. **JavaScript Logic**
   - **Main Script (`main.js`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/main.js)
     - Initializes the form and handles the form submission.
     - Clears local storage on window load and calls the load handler.
   - **User Model (`model/user.js`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/model/user.js)
     - Defines the `User` class with properties like username, email, and age.
   - **User Management (`model/userManagement.js`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/model/userManagement.js)
     - Manages user data operations like adding, removing, and loading users from local storage.
   - **UI Handler (`uiHandler/uiHandler.js`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/uiHandler/uiHandler.js)
     - Manages UI updates like showing user data and handling error messages.
   - **Validator (`validator/validator.js`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/validator/validator.js)
     - Contains functions for validating username and email.

3. **Event Handling (`eventHandler/eventHandler.js`):** [View File](https://github.com/LynchzDEV/User-Profile-Form-with-Local-Storage/blob/main/eventHandler/eventHandler.js)
   - Handles adding and removing users, and validation of user input.

### How to Use
1. **Open the Application:**
   - Load the `index.html` in a web browser.
2. **Add a User:**
   - Fill in the name, email, and age fields.
   - Click the "Save Profile" button.
   - If the input is valid, the user profile is saved to local storage and displayed on the page.
3. **Remove a User:**
   - Click the "remove" button next to a user profile to delete it from local storage and the UI.

### Understanding the Code
- **Form Submission:**
  - The form submission is handled in `main.js`, preventing the default form submission and calling the `addUserHandler`.
- **Data Validation:**
  - The `validator.js` file contains functions to validate user input.
- **Local Storage:**
  - User data is stored in the browser's local storage, allowing persistence across page reloads.
