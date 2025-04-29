import { cn } from "@/lib/utils";
import Image from "next/image";

const images = [
  { x: 2, y: 2, url: "/assets/1.jpg" },
  { x: 1, y: 1, url: "/assets/2.jpg" },
  { x: 1, y: 1, url: "/assets/3.jpg" },
  { x: 2, y: 1, url: "/assets/4.jpg" },
  { x: 2, y: 1, url: "/assets/5.jpg" },
  { x: 2, y: 2, url: "/assets/6.jpg" },
  { x: 1, y: 1, url: "/assets/7.jpg" },
  { x: 1, y: 1, url: "/assets/8.jpg" },
  { x: 2, y: 2, url: "/assets/9.jpg" },
  { x: 1, y: 1, url: "/assets/10.jpg" },
  { x: 1, y: 1, url: "/assets/11.jpg" },
  { x: 2, y: 1, url: "/assets/12.jpg" },
];

function Gallery() {
  return (
    <div className="p-8 m-32">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-2">
        {images.map((src, index) => (
          <div
            key={index}
            className={cn(
              "overflow-hidden h-full rounded shadow-lg",
              `col-span-${src.x}`,
              `row-span-${src.y}`
            )}
          >
            <Image
              src={src.url}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-full object-cover hover:scale-110 duration-500 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
