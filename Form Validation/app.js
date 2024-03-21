document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("form").addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the input values
        var nameInput = document.getElementById("name").value;
        var surnameInput = document.getElementById("surname").value;
        var phoneInput = document.getElementById("phone").value;
        var emailInput = document.getElementById("email").value;
        var passwordInput = document.getElementById("password").value;
        // Get the error elements
        var nameError = document.getElementById("nameError");
        var surnameError = document.getElementById("surnameError");
        var phoneError = document.getElementById("phoneError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
    // Validate Name
        if (nameInput.trim() === "") {
            nameError.textContent = "Name is required";
         } else if (nameInput.length < 3) {
            nameError.textContent = "Name must be minimum 3 characters";
         } else {
            // If validation passes, clear the error message
             nameError.textContent = "";    
        }
        
    // Validate Surname
        if (surnameInput.trim() === "") {
                surnameError.textContent = "Surname is required";
          } else if (surnameInput.length < 3) {
                surnameError.textContent = "Surname must be minimum 3 characters";
         } else {
                // If validation passes, clear the error message
                surnameError.textContent = "";    
        }

    // Validate Phone
        if (phoneInput.trim() === "") {
                phoneError.textContent = "Phone is required";
             } else if (phoneInput.length < 7 || phoneInput.length > 7 ) {
                phoneError.textContent = "Phone must be 7 characters";
             } else {
                // If validation passes, clear the error message
                 phoneError.textContent = "";    
            }

    // Validate Email 
         if (emailInput.trim() === "") {
        emailError.textContent = "Email is required";
     } else {
        // If validation passes, clear the error message
         emailError.textContent = "";    
    }

    // Validate Password
        if (passwordInput.trim() === "") {
            passwordError.textContent = "Password is required";
         } else if (passwordInput.length != 7  ) {
            passwordError.textContent = "Password must be 7 characters";
         }
         else {
            // If validation passes, clear the error message
             passwordError.textContent = "";    
        }

         if (!/[a-z]/.test(passwordInput) || !/[A-Z]/.test(passwordInput)) {
           return "Password must contain at least one lowercase and one uppercase letter";}
            else {
                // If validation passes, clear the error message
                 passwordError.textContent = ""; }
         






    });
});