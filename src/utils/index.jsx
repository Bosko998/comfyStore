import axios from "axios";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCMEcfpG6w7oYSSaGZ8tYzLkPWbLa9q9vc",
  authDomain: "comfystore-5389f.firebaseapp.com",
  projectId: "comfystore-5389f",
  storageBucket: "comfystore-5389f.appspot.com",
  messagingSenderId: "768804879307",
  appId: "1:768804879307:web:6dd5f21acabde84492d44e",
  measurementId: "G-B0MS7NTKXT",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCol = collection(db, "users");
export const getUsers = async () => {
  const userSnapshot = await getDocs(usersCol);
  const usersList = userSnapshot.docs.map((doc) => doc.data());
  return usersList;
};
export const writeUsers = async (payload) => {
  // let users = {
  //   username: "test",
  //   email: "test@gmail.com",
  //   password: "test",
  // };
  try {
    const docRef = await addDoc(usersCol, payload);
    toast.success("New user has been added!");
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
