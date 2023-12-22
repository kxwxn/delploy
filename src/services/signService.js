import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const onSigninSubmit = async (email, password, navigate) => {
  if (email === "" || password === "") return;
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    console.log("credential", credential);
    navigate("/");
  } catch (err) {
    console.log("error", err);
  } finally {
  }
};

export const onSignupSubmit = async (email, password, navigate) => {
  if (email === "" || password === "") return;
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("account created successfully!", credential);
    navigate("/");
  } catch (err) {
    console.log("error", err);
  } finally {
  }
};

export const signOut = () => {
  auth.signOut();
  console.log("You've signed out successfully", auth.currentUser);
  location.href = "/";
};
