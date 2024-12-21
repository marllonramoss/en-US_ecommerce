"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/18512711/pexels-photo-18512711/free-photo-of-part-of-a-woman-body-sitting-on-a-chair.jpeg",
    url: "https://www.exemplo.com/natureza",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Adventure Gear Sale",
    description: "Discover mountain trails with up to 40% off gear.",
    img: "https://images.pexels.com/photos/6995869/pexels-photo-6995869.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    url: "https://www.exemplo.com/montanhas",
    bg: "linear-gradient(to right, rgba(0, 204, 255, 0.8), rgba(0, 102, 204, 0.8))",
  },
  {
    id: 3,
    title: "Cultural Treasures Sale",
    description: "Save up to 30% on items inspired by world heritage.",
    img: "https://images.pexels.com/photos/9463865/pexels-photo-9463865.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    url: "https://www.exemplo.com/cultura",
    bg: "linear-gradient(to right, rgba(153, 51, 255, 0.8), rgba(255, 51, 153, 0.8))",
  },
];

const slide = () => {
  const [current, setCurrent] = React.useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000 "
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 flex items-center justify-center gap-8 flex-col 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative xl:w-1/2 h-1/2 xl:h-full ">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default slide;
