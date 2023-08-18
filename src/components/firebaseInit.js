// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC3JUksieykayzUsTg6gV4hHqBRQ-fOUZk',
  authDomain: 'blogging-app-d7510.firebaseapp.com',
  projectId: 'blogging-app-d7510',
  storageBucket: 'blogging-app-d7510.appspot.com',
  messagingSenderId: '975306553393',
  appId: '1:975306553393:web:f61003260c0b5d5d457d10',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
