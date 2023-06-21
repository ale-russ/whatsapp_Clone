import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0XBF1qtPrEm2v-FzxAvfYbhPOf0EqzO8",
  authDomain: "whatsapp-clone-abfa0.firebaseapp.com",
  projectId: "whatsapp-clone-abfa0",
  storageBucket: "whatsapp-clone-abfa0.appspot.com",
  messagingSenderId: "685926004649",
  appId: "1:685926004649:web:3176173a770d0e4ed476b8",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
