// // Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// import "firebase/compat/firestore"
// import "firebase/compat/auth"



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD4cpoW6MMRgJ7t3xQ_AVrIGqBHfAertP4",
//   authDomain: "clone-9fe1f.firebaseapp.com",
//   projectId: "clone-9fe1f",
//   storageBucket: "clone-9fe1f.firebasestorage.app",
//   messagingSenderId: "880700408898",
//   appId: "1:880700408898:web:4ff49bdc6825782d6e19db",
//   measurementId: "G-WVZHPBP6HM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = app.firestore();
// // import firebase from "firebase/compat/app";
// // import { initializeApp } from "firebase/app";  // ✅ Import initializeApp
// // import { getAnalytics } from "firebase/analytics";
// // import { getAuth } from "firebase/auth";
// // import "firebase/compat/firestore";
// // import "firebase/compat/auth";

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyD4cpoW6MMRgJ7t3xQ_AVrIGqBHfAertP4",
// //   authDomain: "clone-9fe1f.firebaseapp.com",
// //   projectId: "clone-9fe1f",
// //   storageBucket: "clone-9fe1f.firebasestorage.app",
// //   messagingSenderId: "880700408898",
// //   appId: "1:880700408898:web:4ff49bdc6825782d6e19db",
// //   measurementId: "G-WVZHPBP6HM"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);  // ✅ Now it works
// // const analytics = getAnalytics(app);
// // export const auth = getAuth(app);
// // export const db = firebase.firestore();  // ✅ Use firebase.firestore() for compat

// // Import necessary Firebase functions
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD4cpoW6MMRgJ7t3xQ_AVrIGqBHfAertP4",
//   authDomain: "clone-9fe1f.firebaseapp.com",
//   projectId: "clone-9fe1f",
//   storageBucket: "clone-9fe1f.firebaseapp.com",
//   messagingSenderId: "880700408898",
//   appId: "1:880700408898:web:4ff49bdc6825782d6e19db",
//   measurementId: "G-WVZHPBP6HM"
// };

// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = getFirestore(app);  // ✅ Corrected Firestore import

// export default app;
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4cpoW6MMRgJ7t3xQ_AVrIGqBHfAertP4",
  authDomain: "clone-9fe1f.firebaseapp.com",
  projectId: "clone-9fe1f",
  storageBucket: "clone-9fe1f.firebaseapp.com",
  messagingSenderId: "880700408898",
  appId: "1:880700408898:web:4ff49bdc6825782d6e19db",
  measurementId: "G-WVZHPBP6HM"
};

// ✅ Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const analytics = firebase.analytics();

export default app;

