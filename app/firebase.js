// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBUguhk7M62VZvjFjk2asCeM8atUelHjEQ',
	authDomain: 'pantrytracker-7ed7d.firebaseapp.com',
	projectId: 'pantrytracker-7ed7d',
	storageBucket: 'pantrytracker-7ed7d.appspot.com',
	messagingSenderId: '353561436552',
	appId: '1:353561436552:web:a38226e78eec952d0a5a3d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
