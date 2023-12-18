import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpGDRanTjSbymo0p4Gato1kuprM-cwbUA",
  authDomain: "portfolio-e296e.firebaseapp.com",
  projectId: "portfolio-e296e",
  storageBucket: "portfolio-e296e.appspot.com",
  messagingSenderId: "50809305442",
  appId: "1:50809305442:web:089c726fcd2a3704bf143b",
  measurementId: "G-VE5J1ZQKDZ",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
