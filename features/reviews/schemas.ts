import { z } from 'zod';

export const addReviewSchema = z.object({
  rating: z.number().min(1, 'Please select a rating').max(5),
  comment: z.string().min(1, 'Comment is required').trim(),
});

export type AddReviewFormData = z.infer<typeof addReviewSchema>;