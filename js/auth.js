// 引入 Firebase Authentication
const auth = firebase.auth();

// 注册功能
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

// 登录功能
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

// 监听用户登录状态
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user.email);
    } else {
        console.log('No user is signed in.');
    }
});
