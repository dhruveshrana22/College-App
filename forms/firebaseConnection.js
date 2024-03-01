// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGIP1BbSYmrMyulv7yqGPbYESIpkKYq5g",
    authDomain: "vyapar-d1337.firebaseapp.com",
    databaseURL: "https://vyapar-d1337-default-rtdb.firebaseio.com",
    projectId: "vyapar-d1337",
    storageBucket: "vyapar-d1337.appspot.com",
    messagingSenderId: "616593438286",
    appId: "1:616593438286:web:ff42b92b95fc7d8f14f51f",
    measurementId: "G-RE09QY9LD1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export { app };
