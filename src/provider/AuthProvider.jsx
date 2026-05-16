import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  // console.log(user);
  const [loading, setLoading] = useState(true)

  const CreateNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword (auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut (auth)
  }

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  const authInfo = {
    user, setUser, CreateNewUser, logOut, userLogin, loading, updateUserProfile
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;