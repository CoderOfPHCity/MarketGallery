
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCVCbIAmFUjD6peu-cpgqeb3WTBOaM73X8",
  authDomain: "market-app-40aff.firebaseapp.com",
  projectId: "market-app-40aff",
  storageBucket: "market-app-40aff.appspot.com",
  messagingSenderId: "777883677340",
  appId: "1:777883677340:web:e5b96f5cc4f1de99eeb359",
  measurementId: "G-EMJMCBDB15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();