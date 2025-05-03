// 注册逻辑
const auth = firebase.auth();

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        alert(`Registration successful! Welcome, ${user.email}`);
        document.getElementById('registerForm').reset();
    } catch (error) {
        console.error('Error during registration:', error.code, error.message);
        alert(`Registration failed: ${error.message}`);
    }
});
