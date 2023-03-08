// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLGuQwxiQwMrizLWU8_sBTbYzw84UtXvI",
    authDomain: "image-uploader-de42d.firebaseapp.com",
    projectId: "image-uploader-de42d",
    storageBucket: "image-uploader-de42d.appspot.com",
    messagingSenderId: "942462450445",
    appId: "1:942462450445:web:164338719389c575198e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;