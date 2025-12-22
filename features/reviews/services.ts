import { http } from '@/lib/api';
import { API_REVIEW_URL } from '@/features/shared/constants/api-url';
import { AddReviewPayload, AddReviewResponse } from './types';

export const reviewService = {
  addReview: async (payload: AddReviewPayload): Promise<AddReviewResponse> => {
    return http.post<AddReviewResponse>(API_REVIEW_URL, payload);
  },
};