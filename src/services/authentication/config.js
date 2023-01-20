import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAymFlmfRqkENIQMwVC-EVYco72motoOwY",
  authDomain: "mealstogo-acd3a.firebaseapp.com",
  projectId: "mealstogo-acd3a",
  storageBucket: "mealstogo-acd3a.appspot.com",
  messagingSenderId: "187736566939",
  appId: "1:187736566939:web:c83adc4017287e56aaaa3e",
};

export const firebaseApp = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
