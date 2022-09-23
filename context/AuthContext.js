import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../pages/firebase";

const AuthContext = createContext();

// consumer
export function useAuth() {
  return useContext(AuthContext);
}

// provider
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // signup function
  async function signup(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout function
  function logout() {
    return signOut(auth);
  }

  const valueAble = {
    currentUser,
    loading,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueAble}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
