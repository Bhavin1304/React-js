import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
 
  apiKey: "AIzaSyBYgmWnZHN9FRya0F0Ty1eiK9bwTxtzRhg",
  authDomain: "chat-aea74.firebaseapp.com",
  projectId: "chat-aea74",
  storageBucket: "chat-aea74.firebasestorage.app",
  messagingSenderId: "795194914314",
  appId: "1:795194914314:web:c2e92e563e952c259d51f3",
  measurementId: "G-9BY8178967"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);