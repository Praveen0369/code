// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1_EceCFAoFRbZaaJN_q6x6pCAQyEJDzg",
    authDomain: "auther-2f13b.firebaseapp.com",
    databaseURL: "https://auther-2f13b-default-rtdb.firebaseio.com",
    projectId: "auther-2f13b",
    storageBucket: "auther-2f13b.appspot.com",
    messagingSenderId: "104368194065",
    appId: "1:104368194065:web:76803ed61c847ff5bb67b0"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  // Sign up function
  function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        showMessage('User signed up successfully!', 'success');
      })
      .catch(error => {
        showMessage(error.message, 'error');
      });
  }
  
  // Sign in function
  function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        showMessage('User signed in successfully!', 'success');
      })
      .catch(error => {
        showMessage(error.message, 'error');
      });
  }
  
  // Show message function
  function showMessage(message, type) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.className = type;
  }
  
  // Form submission
  const authForm = document.getElementById('auth-form');
  authForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const signUpBtn = document.getElementById('signup-btn');
  
    if (signUpBtn.innerText === 'Sign Up') {
      signUp(email, password);
    } else {
      signIn(email, password);
    }
  });
  
  // Toggle between Sign Up and Sign In
  const signInBtn = document.getElementById('signin-btn');
  signInBtn.addEventListener('click', () => {
    const signUpBtn = document.getElementById('signup-btn');
    const authForm = document.getElementById('auth-form');
    const isSignUp = signUpBtn.innerText === 'Sign Up';
  
    if (isSignUp) {
      signUpBtn.innerText = 'Sign In';
      signInBtn.innerText = 'Sign Up';
      authForm.reset();
    } else {
      signUpBtn.innerText = 'Sign Up';
      signInBtn.innerText = 'Sign In';
      authForm.reset();
    }
  });
  
// Form submission
const signupFormFields = document.getElementById('signup-form-fields');
signupFormFields.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  signUp(email, password);
});

const signinFormFields = document.getElementById('signin-form-fields');
signinFormFields.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  signIn(email, password);
});
