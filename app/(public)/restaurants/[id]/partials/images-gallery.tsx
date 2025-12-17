import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImagesGalleryProps {
  className?: string;
}

const ImagesGallery = ({ className }: ImagesGalleryProps) => {
  return (
    <div className={cn('grid grid-cols-4 gap-5', className)}>
      {/* Image 1 */}
      <div className="col-span-2 row-span-3 relative w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/menus/menu-1.png"
          alt="Menu 1"
          fill
          className="object-cover object-center hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Image 2 */}
      <div className="col-span-2 row-span-2 relative w-full min-h-[302px] overflow-hidden rounded-2xl">
        <Image
          src="/images/menus/menu-2.png"
          alt="Menu 2"
          fill
          className="object-cover object-center hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Image 3 */}
      <div className="relative w-full min-h-[148px] overflow-hidden rounded-2xl">
        <Image
          src="/images/menus/menu-3.png"
          alt="Menu 3"
          fill
          className="object-cover object-center hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Image 4 */}
      <div className="relative w-full min-h-[148px] overflow-hidden rounded-2xl">
        <Image
          src="/images/menus/menu-4.png"
          alt="Menu 4"
          fill
          className="object-cover object-center hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default ImagesGallery;