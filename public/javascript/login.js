const loginFormEl = document.querySelector('.login-form');
const signupFormEl = document.querySelector('.signup-form');

async function login(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
}


function signup(event) {
    event.preventDefault();
}

loginFormEl.addEventListener('submit', login);
signupFormEl.addEventListener('submit', signup);