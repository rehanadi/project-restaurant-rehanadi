import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { authService } from './services';
import { RegisterPayload, LoginPayload, UpdateProfilePayload } from './types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import { setCredentials, setUser } from './stores';
import { CACHE_DURATION } from "../shared/constants/duration";

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authService.register(payload),
    onSuccess: () => {
      toast.success('Registration successful');
      router.push('/login');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: (data) => {
      dispatch(
        setCredentials({
          token: data.data.token,
          user: data.data.user,
        })
      );

      toast.success('Login successful');
      router.push('/');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useGetProfile = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['auth', 'profile'],
    queryFn: async () => {
      const response = await authService.getProfile();
      dispatch(setUser(response.data));
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
    refetchOnMount: 'always',
    retry: 1,
  });
};

export const useUpdateProfile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateProfilePayload) => authService.updateProfile(payload),
    onSuccess: (data) => {
      dispatch(setUser(data.data));
      
      // Invalidate and refetch profile query
      queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
      queryClient.refetchQueries({ queryKey: ['auth', 'profile'] });

      toast.success('Profile updated successfully');
      router.push('/profile');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};