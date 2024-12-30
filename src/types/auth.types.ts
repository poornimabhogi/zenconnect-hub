export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  isGuest?: boolean;
  username?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginAsGuest: () => void;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}