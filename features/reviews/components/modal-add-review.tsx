'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addReviewSchema, AddReviewFormData } from '../schemas';
import { useAddReview } from '../hooks';

interface ModalAddReviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
}

const ModalAddReview = ({
  open,
  onOpenChange,
  transactionId,
  restaurantId,
  menuIds,
}: ModalAddReviewProps) => {
  const { mutate: addReview, isPending } = useAddReview();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<AddReviewFormData>({
    resolver: zodResolver(addReviewSchema),
    defaultValues: {
      rating: 0,
      comment: '',
    },
  });

  const rating = watch('rating');

  const onSubmit = (data: AddReviewFormData) => {
    addReview(
      {
        transactionId,
        restaurantId,
        star: data.rating,
        comment: data.comment,
        menuIds,
      },
      {
        onSuccess: () => {
          handleClose();
        },
      }
    );
  };

  const handleClose = () => {
    reset();
    onOpenChange(false);
  };

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[361px] md:max-w-[439px]">
        <DialogHeader className="-mt-1">
          <DialogTitle>Give Review</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-md">Give Rating</span>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => field.onChange(index + 1)}
                      className="transition-transform hover:scale-110"
                    >
                      <Icon
                        icon="material-symbols:star-rounded"
                        className={cn(
                          'size-10 cursor-pointer md:size-12.25',
                          index < rating ? 'text-yellow-500' : 'text-neutral-300'
                        )}
                      />
                    </button>
                  ))}
                </div>
              )}
            />
            {errors.rating && (
              <span className="text-primary-100 md:text-md text-sm font-medium">
                {errors.rating.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Please share your thoughts about our service!"
                  className="min-h-[235px] resize-none"
                />
              )}
            />
            {errors.comment && (
              <span className="text-primary-100 text-sm font-medium">
                {errors.comment.message}
              </span>
            )}
          </div>

          <Button type="submit" className="h-11 w-full md:h-12" disabled={isPending}>
            {isPending ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddReview;