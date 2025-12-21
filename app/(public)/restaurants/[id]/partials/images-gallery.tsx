import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImagesGalleryProps {
  className?: string;
  images: string[];
}

const ImagesGallery = ({ className, images }: ImagesGalleryProps) => {
  const getImageClassName = (index: number) => {
    if (index === 0) {
      return 'col-span-2 row-span-3 relative w-full overflow-hidden rounded-2xl';
    }
    if (index === 1) {
      return 'col-span-2 row-span-2 relative w-full min-h-[302px] overflow-hidden rounded-2xl';
    }
    return 'relative w-full min-h-[148px] overflow-hidden rounded-2xl';
  };

  return (
    <div className={cn('grid grid-cols-4 gap-5', className)}>
      {images.map((image, index) => (
        <div key={index} className={getImageClassName(index)}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            fill
            className="object-cover object-center hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesGallery;