import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNGJEr23_k_doOvCcjXWt6UMohpS9c6fs",
  authDomain: "fake-olx.firebaseapp.com",
  databaseURL: "https://fake-olx.firebaseio.com",
  projectId: "fake-olx",
  storageBucket: "fake-olx.appspot.com",
  messagingSenderId: "269139740728",
  appId: "1:269139740728:web:5ea60e5e1cf0e14d8c3ecd",
  measurementId: "G-0T6TYCLMGP",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
