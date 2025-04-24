"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TypewriterTitle from "./motion/TypewriterTitle";

const images = [
  {
    title: "Department of Electrical & Electronic Engineering",
    imgUrl:
      "https://aust.edu/storage/files/c5AfhsxdM5fF8xRRnrLEkgqI57ButlxX1MH9iexP.jpeg",
  },
  {
    title: "Electrical Lab",
    imgUrl:
      "https://aust.edu/storage/files/EKAjo6jQpZWFzborE5fhXKCMiObcYAE85wdpQUXI.jpeg",
  },
  {
    title: "Machine Lab",
    imgUrl:
      "https://aust.edu/storage/files/7vNjvNKM7rAoLzrz1wCL1NnIqlZ8E9ccnjFdcdqD.jpeg",
  },
  {
    title: "Computer Lab",
    imgUrl:
      "https://aust.edu/storage/files/hWebPHOVFqvZwELQn56lhboDUfaXwwOEtkSTPetl.jpeg",
  },
];

function Slider() {
  return (
    <div>
      <Swiper
        className="relative group"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((i, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[200px] md:h-[400px]">
              <Image
                src={i?.imgUrl}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/30 z-10" />

              <div className="absolute  z-20 text-white text-xl bottom-8 w-full rounded-md flex justify-center">
                <div className="px-5 py-2 flex justify-center bg-black/80">
                  <TypewriterTitle text={i.title} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute top-[50%] group-hover:left-2 -left-12 duration-500 cursor-pointer swiper-button-next h-[35px] w-[35px] bg-white z-10 grid place-content-center rounded-full">
          <ChevronLeft />
        </div>
        <div className="absolute top-[50%] group-hover:right-2 -right-12 duration-500 cursor-pointer swiper-button-prev h-[35px] w-[35px] bg-white z-10 grid place-content-center rounded-full">
          <ChevronRight />
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
