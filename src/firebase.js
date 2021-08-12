import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkLkekuSP14g7UBL5gp7k8r8-T5uQp1Cc",
    authDomain: "ecommerce-b0cbe.firebaseapp.com",
    projectId: "ecommerce-b0cbe",
    storageBucket: "ecommerce-b0cbe.appspot.com",
    messagingSenderId: "169984706781",
    appId: "1:169984706781:web:a93d98487b6eb3f44cb334"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}