import React, { createContext, useState, useEffect } from "react";
import { firebaseApp } from "./config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();
const auth = getAuth(firebaseApp);

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      console.log("onAuthStateChanged NOT REGISTERED", user);
    }
  });

  const onRegister = (email, password, repeatedPassword) => {
    setLoading(true);
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setLoading(false);
        setUser(userCredentials);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const onLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.toString());
      });
  };

  useEffect(() => {
    setError(null);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        user,
        error,
        onRegister,
        onLogin,
        isAuthenticated: !!user,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
