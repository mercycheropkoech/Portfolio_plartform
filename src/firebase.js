import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlSPe4I_do_8ypdnVYNXot6eUQPm8_nFE",
  authDomain: "portfolio-platform-d5fc5.firebaseapp.com",
  projectId: "portfolio-platform-d5fc5",
  storageBucket: "portfolio-platform-d5fc5.firebasestorage.app",
  messagingSenderId: "423363024858",
  appId: "1:423363024858:web:b7948046b91ab2036a12e3",
  measurementId: "G-EP01R1GL5Y"
};

const app = initializeApp(firebaseConfig);

// optional but safe
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();