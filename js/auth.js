// Firebase Authentication 逻辑
const auth = firebase.auth();

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Registration successful!');
            document.getElementById('registerForm').reset();
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
            document.getElementById('loginForm').reset();
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});
