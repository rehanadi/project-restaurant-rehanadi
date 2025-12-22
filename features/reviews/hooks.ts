import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { reviewService } from './services';
import { getErrorMessage } from '@/lib/api';

export const useAddReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reviewService.addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      toast.success('Review created successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};