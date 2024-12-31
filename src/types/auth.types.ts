export interface User {
  id: string | number;
  email?: string;
  name?: string;
  username?: string;
  avatar?: string;
  isGuest?: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginAsGuest: () => void;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}