import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAt-KTdJxU6ghlCPVaw6X1zD99qgPdBV3c",
  authDomain: "wdew-8153f.firebaseapp.com",
  projectId: "wdew-8153f",
  storageBucket: "wdew-8153f.firebasestorage.app",
  messagingSenderId: "529373794962",
  appId: "1:529373794962:web:3faa9f6e322b61f1eb8c4b",
  measurementId: "G-40KNT45XWF"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

