function validateForm() {
		var emailInput = document.getElementById('email').value;
		var passwordInput = document.getElementById('password').value;
		var ageInput = document.getElementById('age').value;
		var errorMessage = document.getElementById('errorMessage');

		if (emailInput == "") {
			errorMessage.textContent = 'Please enter valid email!';
		}else if(passwordInput == ""){
			errorMessage.textContent = 'Please enter valid password!';
		} else if(ageInput < 18){
				errorMessage.textContent = 'You must be 18 or older to login.';
		} else {
				// Your login logic here
				alert('Login successful!');
				errorMessage.textContent = ''; // Clear any previous error messages
				window.location.replace("index.html");
		}
}
