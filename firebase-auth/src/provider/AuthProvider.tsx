import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebaseSetup';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: User | null) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
