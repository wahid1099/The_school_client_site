import initializationFirebase from "../../../FirebaseSetup/FirebaseInit";
import { useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializationFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  //registering user
  const RegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login user
  const LoginUser = (email, password, role) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //geting current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
    });
  }, []);

  //user Log out
  const LogOutUser = (navigate) => {
    signOut(auth)
      .then(() => {
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    setUser,
    user,
    RegisterUser,
    LoginUser,
    LogOutUser,
  };
};

export default useFirebase;
