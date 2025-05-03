// 登录逻辑
const auth = firebase.auth();

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        alert(`Login successful! Welcome back, ${user.email}`);
        document.getElementById('loginForm').reset();
    } catch (error) {
        console.error('Error during login:', error.code, error.message);
        alert(`Login failed: ${error.message}`);
    }
});
