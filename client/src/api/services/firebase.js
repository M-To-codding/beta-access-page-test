// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import getAnalytics from "firebase/analytics";
import {collection, getDocs, query, limit} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = firebase.auth();
export const db = firebase.firestore();

export async function getProducts(db, count = 5) {
  const productsCol = query(collection(db, 'products'), limit(count));
  const productSnapshot = await getDocs(productsCol);
  const productsList = productSnapshot.docs.map(doc => doc.data());
  return productsList;
}