import {
  carouselData,
  type CarouselData,
} from '@/features/shared/constants/banner-data';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import { cn } from "@/lib/utils";

interface ImagesCarouselProps {
  className?: string;
}

const ImagesCarousel = ({
  className,
}: ImagesCarouselProps) => {
  return (
    <div className={cn('flex w-full flex-col', className)}>
      <Carousel>
        <CarouselContent>
          {carouselData.map((carousel, index) => (
            <CarouselItem key={index} className='md:basis-full'>
              <CarouselImage key={index} {...carousel} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;

const CarouselImage = ({ image, title }: CarouselData) => {
  return (
    <div className='relative aspect-361/260 w-full overflow-hidden rounded-2xl cursor-pointer'>
      <div className='relative h-full w-full'>
        <Image src={image} alt={title} fill />
      </div>
    </div>
  );
};
