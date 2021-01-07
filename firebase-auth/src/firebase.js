import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD62yC83kAZDJE-zDcU9pn1R9KC4Nz5l3E",
    authDomain: "fir-auth-dev-1d3ed.firebaseapp.com",
    projectId: "fir-auth-dev-1d3ed",
    storageBucket: "fir-auth-dev-1d3ed.appspot.com",
    messagingSenderId: "730621304762",
    appId: "1:730621304762:web:1f928e2eeb402d455bc783",
    measurementId: "G-ZZWDM5LWMP"
});

const auth = app.auth();
export { auth };
export default app;