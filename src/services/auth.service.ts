import { User } from '@/types/auth.types';

const API_URL = import.meta.env.VITE_API_URL;

export const authService = {
  async login(username: string, password: string): Promise<{ user: User; access_token: string }> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Login failed');
    }

    const { token, ...userData } = await response.json();
    return {
      user: userData,
      access_token: token,
    };
  },

  async signup(username: string, email: string, password: string): Promise<{ user: User; access_token: string }> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Signup failed');
    }

    const { token, ...userData } = await response.json();
    return {
      user: userData,
      access_token: token,
    };
  },

  async handleGoogleUser(googleUser: any): Promise<{ user: User; access_token: string }> {
    // This method would handle sending Google user data to your backend
    // and receiving your application's JWT token in response
    const response = await fetch(`${API_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(googleUser),
    });

    if (!response.ok) {
      throw new Error('Google authentication failed');
    }

    return response.json();
  }
};