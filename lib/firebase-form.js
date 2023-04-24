import { db } from "@component/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const submitFormDocument = async ({ username, email, message }) => {
  try {
    const docRef = await addDoc(collection(db, "form"), {
      username: "username",
      email: "email",
      message: "message",
    });
    return 0;
  } catch (e) {
    return -1;
  }
};
