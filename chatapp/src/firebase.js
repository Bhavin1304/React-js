import {initializeApp} from 'firebase/app'
import { getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBEF9WUmNDop1zADgk4wVJJ-cvRRoX4rYs",
  authDomain: "chta-app-2099c.firebaseapp.com",
  projectId: "chta-app-2099c",
  storageBucket: "chta-app-2099c.firebasestorage.app",
  messagingSenderId: "875645109384",
  appId: "1:875645109384:web:96069c5fdcb080a7e48b3d",
  measurementId: "G-8TRD8E8CGC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
