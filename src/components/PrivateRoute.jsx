import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Redirection } from "../pages/Redirection";

export const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));

    return () => unsubscribe();
  }, []);

  if (user === null) {
    return <Redirection />;
  }

  return children;
};
