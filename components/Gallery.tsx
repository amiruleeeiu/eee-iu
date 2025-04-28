import Image from "next/image";

const images = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
  "/assets/6.jpg",
  "/assets/7.jpg",
  "/assets/8.jpg",
  "/assets/9.jpg",
  "/assets/10.jpg",
  "/assets/11.jpg",
  "/assets/12.jpg",
];

function Gallery() {
  return (
    <div className="p-8 m-9">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg row-span-2"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500} // fixed width
              height={400} // fixed height
              className="w-full h-60 object-cover hover:scale-110 duration-500 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
