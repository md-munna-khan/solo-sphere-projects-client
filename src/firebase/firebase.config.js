


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA_wPiqRjWDsf8AcsCf8iV7yR3wEOz_1Lw",
  // authDomain: "solo-sphere-a067c.firebaseapp.com",
  // projectId: "solo-sphere-a067c",
  // storageBucket: "solo-sphere-a067c.firebasestorage.app",
  // messagingSenderId: "154988414067",
  // appId: "1:154988414067:web:02698f454c2fc758295606"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
console.log(firebaseConfig)
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);