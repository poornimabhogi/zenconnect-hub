import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  isGuest?: boolean;
  username?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginAsGuest: () => void;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing stored user:", e);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setIsLoading(false);
  }, []);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      if (!credential) {
        throw new Error("Failed to get Google credentials");
      }

      const userData: User = {
        id: result.user.uid,
        email: result.user.email || '',
        name: result.user.displayName || undefined,
        avatar: result.user.photoURL || undefined,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", credential.accessToken || '');
      
      setUser(userData);
      
      toast({
        title: "Welcome!",
        description: "Successfully signed in with Google.",
      });
      
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to sign in with Google";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
      }

      const { user: userData, token } = await response.json();
      
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      
      setUser(userData);
      
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Signup failed");
      }

      const { access_token, ...userData } = await response.json();
      
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(userData));
      
      setUser(userData);
      
      toast({
        title: "Welcome!",
        description: "Your account has been created successfully.",
      });
      
      navigate("/");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsGuest = () => {
    const guestUser: User = {
      id: `guest-${Date.now()}`,
      email: 'guest@example.com',
      username: `Guest-${Math.floor(Math.random() * 1000)}`,
      name: `Guest-${Math.floor(Math.random() * 1000)}`,
      isGuest: true
    };
    
    setUser(guestUser);
    localStorage.setItem("user", JSON.stringify(guestUser));
    
    toast({
      title: "Welcome, Guest!",
      description: "You're browsing as a guest user.",
    });
    
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  const value = {
    user,
    login,
    signup,
    loginWithGoogle,
    loginAsGuest,
    logout,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
