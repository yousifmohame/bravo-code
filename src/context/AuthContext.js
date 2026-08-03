"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

// 1. Create the context which will be shared
const AuthContext = createContext();

// 2. Create the Provider component that will wrap your app
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function from Firebase listens for any change in authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // If logged out, currentUser is null
      setLoading(false); // Auth check is complete, stop loading
    });

    // Cleanup the listener when the app is closed to prevent memory leaks
    return () => unsubscribe();
  }, []); // The empty array makes this effect run only once

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {/* Don't render the app until the initial auth check is done */}
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

// 3. Create a simple custom hook to easily access the context data
export const useAuth = () => useContext(AuthContext);
