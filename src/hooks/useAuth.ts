/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  type User as FirebaseUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import type { User, AuthError, UseAuthReturn } from "../types/user";

// Google provider instance
const googleAuthProvider = new GoogleAuthProvider();

// Convert Firebase User to our User interface
const mapFirebaseUser = (firebaseUser: FirebaseUser): User => ({
  email: firebaseUser.email!,
  name: firebaseUser.displayName || undefined,
  uid: firebaseUser.uid,
});

// Custom hook for authentication
export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(mapFirebaseUser(firebaseUser));
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Clear error helper
  const clearError = () => setError(null);

  // Handle Firebase auth errors
  const handleAuthError = (error: AuthError) => {
    console.error("Auth error:", error);

    switch (error.code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
        setError("Invalid email or password");
        break;
      case "auth/email-already-in-use":
        setError("An account with this email already exists");
        break;
      case "auth/weak-password":
        setError("Password should be at least 6 characters");
        break;
      case "auth/invalid-email":
        setError("Please enter a valid email address");
        break;
      case "auth/too-many-requests":
        setError("Too many failed attempts. Please try again later");
        break;
      case "auth/network-request-failed":
        setError("Network error. Please check your connection");
        break;
      case "auth/popup-closed-by-user":
        setError("Sign-in was cancelled");
        break;
      case "auth/popup-blocked":
        setError("Popup was blocked. Please allow popups and try again");
        break;
      default:
        setError(error.message || "An error occurred during authentication");
    }
  };

  // Sign in with email and password
  const signIn = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User state will be updated by onAuthStateChanged
    } catch (error: any) {
      handleAuthError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign up with email and password
  const signUp = async (
    email: string,
    password: string,
    name?: string
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the user's display name if provided
      if (name && userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name,
        });

        // Update local state with the new display name
        setUser({
          email: userCredential.user.email!,
          name: name,
          uid: userCredential.user.uid,
        });
      }
    } catch (error: any) {
      handleAuthError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      await signInWithPopup(auth, googleAuthProvider);
      // User state will be updated by onAuthStateChanged
    } catch (error: any) {
      handleAuthError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const handleSignOut = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      await signOut(auth);
      // User state will be updated by onAuthStateChanged
    } catch (error: any) {
      handleAuthError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signInWithGoogle,
    signOut: handleSignOut,
    clearError,
  };
};
