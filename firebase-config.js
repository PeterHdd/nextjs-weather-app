import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_Api_Key,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Project_Id,
  storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Messaging_SenderId,
  appId: process.env.NEXT_PUBLIC_AppId,
  measurementId: process.env.NEXT_PUBLIC_MeasurementId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
