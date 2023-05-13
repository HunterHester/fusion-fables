// create login form handler (POST)
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
  
// create signup form handler (POST)
const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#signupEmail').value.trim();
  const username = document.querySelector('#signupUsername').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();
  const confirmPassword = document.querySelector('#confirmPassword').value.trim();

  if (email && username && password && confirmPassword) {
    if(password === confirmPassword) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(`Failed to register: ${response.message}`);
      }
    } else {
      alert('Passwords do not match!');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);