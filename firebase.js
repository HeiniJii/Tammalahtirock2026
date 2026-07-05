// ====================================================
// TAMMALAHTIROCK
// Firebase
// ====================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyDUiv-KI9gupgdfZF6iQZbOAt2G1MlSu1g",

    authDomain: "tammalahtirock.firebaseapp.com",

    projectId: "tammalahtirock",

    storageBucket: "tammalahtirock.firebasestorage.app",

    messagingSenderId: "44309979611",

    appId: "1:44309979611:web:f059a68bb0f0fa1f1a47fe"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);