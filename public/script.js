// Import the functions you need from the SDK (if using modules)
// Otherwise just initialize below

const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-PROJECT.appspot.com",
  messagingSenderId: "YOUR-SENDER-ID",
  appId: "YOUR-APP-ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now you can use Firebase services, for example:
const auth = firebase.auth();
const db = firebase.firestore();
