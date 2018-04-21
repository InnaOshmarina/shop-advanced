import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBzgmRqR2uIS5vti_ggU4Xi1yh7UaLUbik",
    authDomain: "shop-advanced.firebaseapp.com",
    databaseURL: "https://shop-advanced.firebaseio.com",
    projectId: "shop-advanced",
    storageBucket: "shop-advanced.appspot.com",
    messagingSenderId: "487473069972"
});

export const db = app.database();
export const categoryRef = db.ref('categories');
export const productRef = db.ref('products');
