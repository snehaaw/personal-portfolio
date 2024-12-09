import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABKpNbQhD0nfQkQhe1bvZPy75884QUms0",
  authDomain: "personal-portfolio-9c091.firebaseapp.com",
  projectId: "personal-portfolio-9c091",
  storageBucket: "personal-portfolio-9c091.firebasestorage.app",
  messagingSenderId: "1094299024453",
  appId: "1:1094299024453:web:51a1959e0469b58e39f72c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the auth instance
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };