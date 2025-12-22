export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  createdAt?: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export interface ProfileResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}