import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase"; // import auth from "firebase.js"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  /* Create function to create user by email and password using "createUserWithEmailAndPassword()" */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* Create function to logout using "signout()" */
  const logout = () => {
    return signOut(auth);
  };

  /* Create function to login by email and password using "signInWithEmailAndPassword()" */
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* using useEffect() to run "onAuthStateChanged()" oncetime at initial render */
  useEffect(() => {
    /* 
      Attach the observer using the "onAuthStateChanged()" method. 
      When a user successfully signs in or signs up, 
      you can get information about the user in the observer. 
    */
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser); // debug
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ createUser, user, setUser, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
