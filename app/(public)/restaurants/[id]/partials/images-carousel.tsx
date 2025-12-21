import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ImagesCarouselProps {
  className?: string;
  images: string[];
}

const ImagesCarousel = ({ className, images }: ImagesCarouselProps) => {
  return (
    <div className={cn('flex w-full flex-col', className)}>
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-full">
              <CarouselImage image={image} title={`Image ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;

interface CarouselImageProps {
  image: string;
  title: string;
}

const CarouselImage = ({ image, title }: CarouselImageProps) => {
  return (
    <div className="relative aspect-361/260 w-full overflow-hidden rounded-2xl cursor-pointer">
      <div className="relative h-full w-full">
        <Image src={image} alt={title} fill className="object-cover object-center" />
      </div>
    </div>
  );
};