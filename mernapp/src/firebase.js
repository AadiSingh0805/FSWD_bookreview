// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7bVDEa9upW2NJd-l7rNFW8KgP06uV9hk",
  authDomain: "fswdmernapp.firebaseapp.com",
  projectId: "fswdmernapp",
  storageBucket: "fswdmernapp.appspot.com",  // ⚠️ fix: was `.storage.app`
  messagingSenderId: "952119352921",
  appId: "1:952119352921:web:429b25be2f899a2e895b48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth
export const auth = getAuth(app);
export default app;
