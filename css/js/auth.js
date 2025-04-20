// Simple LocalStorage login/signup system

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        localStorage.setItem('faauztokUser', JSON.stringify({ username, password }));
        alert('Account created! Now login.');
        window.location.href = 'login.html';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const storedUser = JSON.parse(localStorage.getItem('faauztokUser'));
  
        if (storedUser && storedUser.username === username && storedUser.password === password) {
          alert('Login successful!');
          window.location.href = 'index.html';
        } else {
          alert('Wrong username or password.');
        }
      });
    }
  });
  