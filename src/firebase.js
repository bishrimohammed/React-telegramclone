// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdFrtQeZkNRHMeTvQHYDpbIbdzNX6D0vc",
  authDomain: "telegramprofilephoto.firebaseapp.com",
  projectId: "telegramprofilephoto",
  storageBucket: "telegramprofilephoto.appspot.com",
  messagingSenderId: "1090483089798",
  appId: "1:1090483089798:web:7628915158ae0a7a7ebc07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
