// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAOLQ1K49OJh_CXWwrp3-jBLJXHVhe05R0',
	authDomain: 'mdev1005-dashboar.firebaseapp.com',
	projectId: 'mdev1005-dashboar',
	storageBucket: 'mdev1005-dashboar.firebasestorage.app',
	messagingSenderId: '320393429357',
	appId: '1:320393429357:web:1a82cec5f6ba0431c6da64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
