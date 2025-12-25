import { http } from '@/lib/api';
import { API_AUTH_URL } from '@/features/shared/constants/api-url';
import {
  RegisterPayload,
  RegisterResponse,
  LoginPayload,
  LoginResponse,
  ProfileResponse,
  UpdateProfilePayload,
  UpdateProfileResponse,
} from './types';

export const authService = {
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    return http.post<RegisterResponse>(`${API_AUTH_URL}/register`, payload);
  },

  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    return http.post<LoginResponse>(`${API_AUTH_URL}/login`, payload);
  },

  getProfile: async (): Promise<ProfileResponse> => {
    return http.get<ProfileResponse>(`${API_AUTH_URL}/profile`);
  },

  updateProfile: async (payload: UpdateProfilePayload): Promise<UpdateProfileResponse> => {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('phone', payload.phone);
    if (payload.avatar) {
      formData.append('avatar', payload.avatar);
    }

    return http.put<UpdateProfileResponse>(`${API_AUTH_URL}/profile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};