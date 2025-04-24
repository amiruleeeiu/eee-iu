"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypewriterTitle from "./motion/TypewriterTitle";

function ResearchActivities() {
  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 3, type: "spring" }}
        className="my-5 flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <TypewriterTitle text="Research Activities" />
          <div className="bg-yellow-600 h-1 w-56"></div>
        </div>
        {/* <h1 className="text-3xl font-bold border-b-2">Research Activities</h1> */}
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-[90%] mx-auto"
      >
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="shadow-xl flex flex-col justify-between duration-300 bg-white  mt-2 rounded-md mb-2 overflow-hidden"
          >
            <Image
              src="https://aust.edu/storage/files/c5AfhsxdM5fF8xRRnrLEkgqI57ButlxX1MH9iexP.jpeg"
              alt="research"
              className="w-full h-60 object-cover hover:scale-110 duration-300 rounded-t-md overflow-hidden"
              width={400}
              height={200}
            />
            <div className="p-4 overflow-hidden">
              <div className="mt-5">
                <h2 className="font-bold text-lg hover:text-yellow-500 duration-500 text-gray-600">
                  Research Activity Title {index + 1}
                </h2>
                <p className="text-gray-800 text-sm tracking-wider mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.... Lorem
                  ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="text-sm mt-2">Published: 16 Apr, 2025</p>
              </div>
            </div>

            <div className="p-4 flex justify-center items-center">
              <button className="relative cursor-pointer overflow-hidden border-2 border-slate-900 px-3 py-1 rounded-full text-sm font-semibold text-slate-900 group hover:text-white duration-300">
                <span className="relative z-20">Read More</span>
                <span className="absolute inset-0 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full hover:bg-slate-900 z-10"></span>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ResearchActivities;
